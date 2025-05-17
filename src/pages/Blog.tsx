
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "My Journey Through Financial Tech",
    excerpt: "Reflecting on my career in the financial technology sector and the evolution of trading systems over the past decade.",
    date: "May 15, 2023",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHx8fDE2MTYyNjc4MTY&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "2",
    title: "Exploring South-East Asia: A Developer's Perspective",
    excerpt: "My recent travels through South-East Asia, experiencing different cultures while working remotely as a software engineer.",
    date: "April 3, 2023",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fHx8MTYxNjI2Nzg0OQ&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "3",
    title: "Performance Optimization Techniques in High-Frequency Trading Systems",
    excerpt: "A deep dive into the techniques I've used to optimize performance in high-frequency trading systems.",
    date: "March 10, 2023",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29kZXxlbnwwfHx8fDE2MTYyNjc4Mzc&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "4",
    title: "Hiking in the Himalayas: A Life-Changing Experience",
    excerpt: "My experience hiking through the Himalayas and how it changed my perspective on work-life balance.",
    date: "February 21, 2023",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fHx8MTYxNjI2Nzg2NA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterPosts = () => {
    return blogPosts
      .filter((post) => 
        (activeCategory === "All" || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  };

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">My Blog</h1>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="w-full md:w-64">
                <Input
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterPosts().map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
          
          {filterPosts().length === 0 && (
            <div className="text-center p-12">
              <p className="text-muted-foreground">No blog posts found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
