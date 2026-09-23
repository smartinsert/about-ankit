import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import BlogPost from './pages/blog-post';
import Contact from './pages/Contact';
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
