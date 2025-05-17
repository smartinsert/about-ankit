
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <p>+91 8291119891</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="mailto:ankitccb@gmail.com" 
                      className="hover:text-primary hover:underline"
                    >
                      ankitccb@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://linkedin.com/in/ankit.thakur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline"
                    >
                      linkedin.com/in/ankit.thakur
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://github.com/ankit.thakur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline"
                    >
                      github.com/ankit.thakur
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Based in Bengaluru, India. Available for remote work and collaborations worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
