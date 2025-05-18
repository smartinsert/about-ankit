import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from './components/layout';
import Index from './pages/index';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Blog from './pages/blog';
import BlogPost from './pages/blog-post';
import Contact from './pages/contact';
import NotFound from './pages/not-found';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider
    defaultTheme='system'
    storageKey='portfolio-theme'
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Layout />}
            >
              <Route
                index
                element={<Index />}
              />
              <Route
                path='about'
                element={<About />}
              />
              <Route
                path='experience'
                element={<Experience />}
              />
              <Route
                path='projects'
                element={<Projects />}
              />
              <Route
                path='skills'
                element={<Skills />}
              />
              <Route
                path='blog'
                element={<Blog />}
              />
              <Route
                path='blog/:postId'
                element={<BlogPost />}
              />
              <Route
                path='contact'
                element={<Contact />}
              />
            </Route>
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
