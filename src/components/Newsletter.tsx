// src/components/Newsletter.tsx

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate an API request
    setTimeout(() => {
      toast({
        title: "Subscribed Successfully!",
        description: "You'll now receive our latest updates and offers.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-purple-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-dark mb-4">
            Stay Updated on K-Beauty Trends
          </h2>

          {/* Subheading */}
          <p className="text-gray-dark mb-8">
            Subscribe to our newsletter for exclusive offers, new releases, and skincare tips.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple"
              />
              <button
                type="submit"
                className="btn-primary py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Terms Notice */}
            <p className="text-xs text-gray mt-3">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
