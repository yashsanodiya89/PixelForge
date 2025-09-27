import Services from '@/components/Services';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored digital solutions to elevate your brand. From strategy to execution, we cover every aspect of modern marketing.
        </p>
      </div>

      <Services />

      <div className="text-center mt-16">
        <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Get a Free Consultation
        </Button>
      </div>
    </div>
  );
}
