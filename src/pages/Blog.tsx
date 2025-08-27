import { useState, useEffect } from 'react';
import BlogCard from '@/components/blog-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { blogService } from '@/services/blog-service';
import { BlogPost } from '@/types/blog';
import { useQuery } from '@tanstack/react-query';
import EmptyBlogState from '@/components/empty-blog-state';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { toast } = useToast();

  const mediumBlogPost = {
    id: 'medium-thinking-generically',
    title: 'Thinking Generically',
    excerpt:
      'A deep dive into generic programming concepts and patterns to write reusable code effectively.',
    date: '2023-03-25',
    category: 'Programming',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YwvcdCHDwjFgVTV-26w1DA.jpeg',
    externalUrl:
      'https://medium.com/@ankitccb/thinking-generically-e7cbbf13e365',
  };

  // Fetch blog posts using React Query
  const {
    data: blogPosts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: blogService.getAllPosts,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to load blog posts. Please try again later.',
        variant: 'destructive',
      });
    }
  }, [error, toast]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const externalPosts = [mediumBlogPost];

  const allPosts = [...externalPosts, ...blogPosts];

  const filterPosts = () => {
    return allPosts.filter(
      (post) =>
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Get unique categories
  const categories = [
    'All',
    ...new Set(blogPosts.map((post: BlogPost) => post.category)),
  ];

  if (isLoading) {
    return (
      <div className='container py-8'>
        <div className='flex items-center justify-center min-h-[60vh]'>
          <div className='animate-pulse text-muted-foreground'>Loading...</div>
        </div>
      </div>
    );
  }

  if (!allPosts || allPosts.length === 0) {
    return <EmptyBlogState />;
  }

  return (
    <div className='min-h-screen'>
      <section className='py-12'>
        <div className='container'>
          <h1 className='text-4xl font-bold mb-8'>My Blog</h1>

          <div className='mb-8'>
            <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
              <div className='flex flex-wrap gap-2'>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      activeCategory === category ? 'default' : 'outline'
                    }
                    size='sm'
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className='w-full md:w-64'>
                <Input
                  placeholder='Search blog posts...'
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filterPosts().map((post: BlogPost) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                imageUrl={post.imageUrl}
                externalUrl={post.externalUrl}
              />
            ))}
          </div>

          {filterPosts().length === 0 && !isLoading && (
            <div className='text-center p-12'>
              <p className='text-muted-foreground'>
                No blog posts found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
