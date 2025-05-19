import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link
            to='/'
            className='flex items-center space-x-2'
          >
            <span className='font-bold'>AT</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            to='/about'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            About
          </Link>
          <Link
            to='/experience'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Experience
          </Link>
          <Link
            to='/projects'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Projects
          </Link>
          <Link
            to='/skills'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Skills
          </Link>
          <Link
            to='/blog'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Blog
          </Link>
          <Link
            to='/contact'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Contact
          </Link>
        </nav>

        {/* Right Section - Theme Switcher and Mobile Menu Button */}
        <div className='flex items-center space-x-2'>
          <ThemeSwitcher />
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={toggleMenu}
          >
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden border-t'>
          <nav className='container flex flex-col space-y-4 py-4'>
            <Link
              to='/about'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to='/experience'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to='/projects'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to='/skills'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to='/blog'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='text-sm font-medium transition-colors hover:text-primary'
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
