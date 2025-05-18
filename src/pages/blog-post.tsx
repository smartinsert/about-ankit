import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blog-service';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const BlogPost = () => {
  const { postId } = useParams();
  const { toast } = useToast();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: () => (postId ? blogService.getPostById(postId) : null),
    enabled: !!postId,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to load blog post. Please try again later.',
        variant: 'destructive',
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <div className='min-h-screen py-12'>
        <div className='container text-center'>
          <h1 className='text-4xl font-bold mb-8'>Loading...</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='min-h-screen py-12'>
        <div className='container text-center'>
          <h1 className='text-4xl font-bold mb-8'>Blog Post Not Found</h1>
          <p className='text-muted-foreground mb-8'>
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to='/blog'>Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <section className='py-12'>
        <div className='container max-w-4xl'>
          <Link
            to='/blog'
            className='flex items-center text-primary hover:underline mb-8'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Blog
          </Link>

          {post.imageUrl && (
            <div className='w-full h-[400px] overflow-hidden rounded-lg mb-8'>
              <img
                src={post.imageUrl}
                alt={post.title}
                className='w-full h-full object-cover'
              />
            </div>
          )}

          <h1 className='text-3xl md:text-4xl font-bold mb-4'>{post.title}</h1>

          <div className='flex justify-between items-center text-muted-foreground mb-8'>
            <time>{post.date}</time>
            <span className='bg-secondary px-3 py-1 rounded'>
              {post.category}
            </span>
          </div>

          {/* Blog content */}
          <div
            className='prose max-w-none'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className='mt-12 border-t pt-8'>
            <h2 className='text-2xl font-bold mb-4'>Share this post</h2>
            <div className='flex gap-4'>
              <Button
                variant='outline'
                size='sm'
              >
                Twitter
              </Button>
              <Button
                variant='outline'
                size='sm'
              >
                LinkedIn
              </Button>
              <Button
                variant='outline'
                size='sm'
              >
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
