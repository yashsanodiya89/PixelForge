import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your project? Let's discuss how we can bring your vision to life.
        </p>
      </div>

      <Contact />

      <div className="text-center mt-16">
        <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Schedule a Call
        </Button>
      </div>
    </div>
  );
}
