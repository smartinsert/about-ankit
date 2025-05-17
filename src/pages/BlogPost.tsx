
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "My Journey Through Financial Tech",
    date: "May 15, 2023",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHx8fDE2MTYyNjc4MTY&ixlib=rb-4.0.3&q=80&w=1080",
    content: `
      <p class="mb-4">The world of financial technology has undergone a remarkable transformation over the past decade. From the early days of electronic trading to today's high-frequency, AI-driven systems, I've had the privilege of witnessing and contributing to this evolution firsthand.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Early Days</h2>
      <p class="mb-4">When I first entered the industry at FlexTrade, trading systems were already electronic but nowhere near as sophisticated as they are today. Latency was measured in hundreds of milliseconds, and algorithmic trading was still in its relative infancy.</p>
      <p class="mb-4">Working on order routing systems taught me the fundamentals of building reliable, fault-tolerant systems where even milliseconds matter. This experience set the foundation for my career and instilled in me a passion for performance optimization.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of Big Data</h2>
      <p class="mb-4">As I moved through positions at Edelweiss and later Fractal Analytics, I witnessed the rise of big data in financial markets. Suddenly, we had access to vast amounts of market data, and the challenge became how to process this information quickly enough to gain a competitive advantage.</p>
      <p class="mb-4">This is where my experience with Kafka, PostgreSQL, and event-driven architectures became crucial. Building systems that could handle billions of data points while maintaining sub-10 second query times was a challenge that pushed me to rethink database design and optimization.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Modern Financial Platforms</h2>
      <p class="mb-4">Today, at Goldman Sachs, I work on the Marquee platform, which represents the modern era of financial technology. It's not just about speed and data processing anymore—it's about creating intuitive user experiences that make complex financial information accessible and actionable.</p>
      <p class="mb-4">The challenge has evolved from "Can we build it?" to "Can we build it in a way that users will love and adopt?" This shift has required me to develop a broader skill set, encompassing not just backend performance but frontend user experience as well.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Lessons Learned</h2>
      <p class="mb-4">Throughout this journey, I've learned several key lessons:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Performance always matters, but the definition of "good enough" changes with context</li>
        <li>User experience is just as important as technical excellence</li>
        <li>Systems must be designed with scale in mind from day one</li>
        <li>Continuous learning is not optional in this field—it's essential</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
      <p class="mb-4">As I look to the future, I see artificial intelligence and machine learning transforming financial technology even further. The ability to predict market movements, automate decision-making, and generate insights from unstructured data will create new opportunities and challenges.</p>
      <p class="mb-4">I'm excited to continue this journey, applying what I've learned while embracing new technologies and approaches. The financial technology sector has never been more dynamic, and I'm grateful to be part of its ongoing evolution.</p>
    `,
  },
  {
    id: "2",
    title: "Exploring South-East Asia: A Developer's Perspective",
    date: "April 3, 2023",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fHx8MTYxNjI2Nzg0OQ&ixlib=rb-4.0.3&q=80&w=1080",
    content: `
      <p class="mb-4">As a software engineer, I spend most of my days in front of multiple screens, diving deep into code and solving complex technical problems. While I love what I do, I've always believed that travel is essential for maintaining perspective and creativity. My recent journey through South-East Asia wasn't just a vacation—it was a reminder of how different environments can spark new ideas and approaches to problem-solving.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Working Remotely from Bali</h2>
      <p class="mb-4">My journey began in Bali, Indonesia, where I spent three weeks working remotely while exploring the island. The digital nomad community there is thriving, with excellent co-working spaces and a supportive community of like-minded professionals.</p>
      <p class="mb-4">What struck me most was how a change in environment affected my productivity and creativity. Coding with a view of rice terraces instead of office walls led to some of my most productive days. The relaxed atmosphere helped me approach complex problems with a clearer mind.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Vietnam: Chaos and Order</h2>
      <p class="mb-4">From Bali, I traveled to Vietnam, spending time in Ho Chi Minh City and Hanoi. The contrast between the chaotic streets and the methodical approach to daily life reminded me of how we build software systems—creating order from complexity through well-defined patterns and practices.</p>
      <p class="mb-4">In Vietnam, I was particularly impressed by the resourcefulness of local entrepreneurs. With limited resources, they build businesses that solve real problems efficiently. It's a reminder that in software development, elegant solutions don't always require the most advanced technologies—sometimes simplicity and creativity are more valuable.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Thailand: The Balance of Old and New</h2>
      <p class="mb-4">My final stop was Thailand, where ancient temples stand alongside modern skyscrapers. This juxtaposition of old and new mirrors what we often face in software development—maintaining legacy systems while implementing new technologies.</p>
      <p class="mb-4">While in Bangkok, I attended a local tech meetup where I met developers from around the world. Our discussions revealed how similar our challenges are despite working in different industries and countries. It was a powerful reminder of the global community we belong to as developers.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Lessons for Professional Growth</h2>
      <p class="mb-4">My time in South-East Asia taught me several lessons that I've applied to my professional life:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Changing your environment can lead to fresh perspectives on stubborn problems</li>
        <li>Different cultures approach problem-solving in unique ways—there's always something to learn</li>
        <li>Balance is essential—productivity improves when work is interspersed with new experiences</li>
        <li>The tech community is global, and connections made while traveling can lead to valuable collaborations</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Looking Forward</h2>
      <p class="mb-4">As I returned to my regular work routine, I brought back not just memories but a refreshed approach to my role as a software engineer. Travel has become an essential part of my professional development strategy, not just an escape from work.</p>
      <p class="mb-4">I'm already planning my next journey, knowing that each new destination will bring its own lessons and inspirations that will make me a better engineer and a more well-rounded person.</p>
    `,
  },
];

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen py-12">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-8">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container max-w-4xl">
          <Link to="/blog" className="flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          {post.imageUrl && (
            <div className="w-full h-[400px] overflow-hidden rounded-lg mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex justify-between items-center text-muted-foreground mb-8">
            <time>{post.date}</time>
            <span className="bg-secondary px-3 py-1 rounded">{post.category}</span>
          </div>
          
          {/* Blog content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Share this post</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
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
