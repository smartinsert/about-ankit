
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Ankit Thakur</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
            Full Stack Software Engineer & Engineering Manager
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Experienced engineer with a track record of optimizing performance, 
            scaling systems, and leading engineering teams at Goldman Sachs, 
            Morgan Stanley, and other financial technology companies.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/experience">View Experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
