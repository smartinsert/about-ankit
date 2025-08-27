import { useState } from 'react';
import { send } from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_7k10gr4';
    const templateID = 'template_d0w7em5';
    const publicKey = 'BZXWNTMOAmBCb_bbR';

    send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast({
          title: 'Message sent!',
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', title: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again later.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <Input
            id='name'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='space-y-2'>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='space-y-2'>
        <Input
          id='subject'
          name='title'
          placeholder='Subject'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='space-y-2'>
        <Textarea
          id='message'
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>
      <Button
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
