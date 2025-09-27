import Portfolio from '@/components/Portfolio';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the brands we've transformed. Each project showcases our commitment to creativity and results.
        </p>
      </div>

      <Portfolio />

      <div className="text-center mt-16">
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
          View All Projects
        </Button>
      </div>
    </div>
  );
}
