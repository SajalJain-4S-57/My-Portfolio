import Section from '../components/Section';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import contactIllustration from '/assets/contact-illustration.png';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import emailjs from "@emailjs/browser"; 
import.meta.env.VITE_EMAILJS_SERVICE_ID;

// Validation schema
const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.email({message: 'Enter a valid email'}),
  message: z.string().min(10, 'Please include more details'),
});

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // new service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // new template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  return (
    <Section id="contact">
      <Toaster position="bottom-right" />
      <h2 id="contact-title" className="text-3xl md:text-4xl font-display font-bold mb-6">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image hidden on mobile */}
        <div className="hidden md:flex justify-center md:justify-start">
          <img
            src={contactIllustration}
            alt="Contact illustration"
            className="w-72 md:w-96 object-contain -ml-4 md:-ml-8"
          />
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Contact form">
          <div>
            <label className="block mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              {...register('name')}
              className="w-full px-4 py-2 rounded-md border border-black/10 dark:border-white/10 
                         bg-white/80 dark:bg-neutral-900/80 focus-ring"
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-4 py-2 rounded-md border border-black/10 dark:border-white/10 
                         bg-white/80 dark:bg-neutral-900/80 focus-ring"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register('message')}
              className="w-full px-4 py-2 rounded-md border border-black/10 dark:border-white/10 
                         bg-white/80 dark:bg-neutral-900/80 focus-ring"
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
          </div>

          <button
            disabled={isSubmitting}
            className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow 
                       hover:shadow-lg disabled:opacity-60 focus-ring"
            aria-label="Send message"
          >
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </Section>
  );
}
