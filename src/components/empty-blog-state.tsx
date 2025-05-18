import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmptyBlogState = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] space-y-8 p-8'>
      <div className='w-full max-w-2xl'>
        <div className='bg-card rounded-lg border shadow-lg overflow-hidden'>
          {/* Terminal Header */}
          <div className='bg-muted px-4 py-2 flex items-center space-x-2 border-b'>
            <div className='flex space-x-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500' />
              <div className='w-3 h-3 rounded-full bg-yellow-500' />
              <div className='w-3 h-3 rounded-full bg-green-500' />
            </div>
            <div className='flex-1 text-center text-sm font-mono text-muted-foreground'>
              blog@ankitthakur:~$
            </div>
          </div>

          {/* Terminal Content */}
          <div className='p-6 font-mono text-sm space-y-4'>
            <div className='flex items-start space-x-2'>
              <span className='text-green-500'>$</span>
              <span className='text-foreground'>ls blog/</span>
            </div>
            <div className='text-muted-foreground'>
              No blog posts found in directory
            </div>
            <div className='flex items-start space-x-2'>
              <span className='text-green-500'>$</span>
              <span className='text-foreground'>git status</span>
            </div>
            <div className='text-muted-foreground'>
              <div>On branch main</div>
              <div>Your blog is up to date with 'origin/main'</div>
              <div>nothing to commit, working tree clean</div>
            </div>
            <div className='flex items-start space-x-2'>
              <span className='text-green-500'>$</span>
              <span className='text-foreground'>echo "Coming soon..."</span>
            </div>
            <div className='text-primary'>Coming soon...</div>
          </div>
        </div>
      </div>

      <div className='text-center space-y-4'>
        <h2 className='text-2xl font-bold tracking-tight'>
          Blog Posts Coming Soon
        </h2>
        <p className='text-muted-foreground max-w-[600px]'>
          I'm currently working on some interesting articles about software
          development, system design, my experiences in the tech industry and
          travel. Stay tuned!
        </p>
        <div className='flex items-center justify-center space-x-4'>
          <Button
            asChild
            variant='outline'
          >
            <Link to='/contact'>
              <Terminal className='mr-2 h-4 w-4' />
              Get in Touch
            </Link>
          </Button>
          <Button asChild>
            <Link to='/'>Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyBlogState;
