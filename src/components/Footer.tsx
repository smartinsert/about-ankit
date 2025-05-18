import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-t bg-background'>
      <div className='container py-8 md:py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} Ankit Thakur. All rights reserved.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <a
              href='mailto:ankitccb@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Mail className='h-5 w-5' />
              <span className='sr-only'>Email</span>
            </a>
            <a
              href='https://github.com/smartinsert'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </a>
            <a
              href='https://www.linkedin.com/in/ankit-thakur-b599a522/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Linkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className='mt-8 flex justify-center gap-6 text-sm text-muted-foreground'>
          <Link
            to='/'
            className='hover:text-primary transition-colors'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='hover:text-primary transition-colors'
          >
            About
          </Link>
          <Link
            to='/blog'
            className='hover:text-primary transition-colors'
          >
            Blog
          </Link>
          <Link
            to='/contact'
            className='hover:text-primary transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
