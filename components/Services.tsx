import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, BarChart3, Megaphone, Code, Lightbulb } from 'lucide-react';

const Services = () => {
  const serviceItems = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive websites and apps that perform flawlessly across all devices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'SEO Optimization',
      description: 'Drive organic traffic with proven search engine strategies and analytics.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Engage audiences on platforms like Instagram, LinkedIn, and TikTok with targeted campaigns.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom solutions built with modern tech stacks for scalability and speed.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Content Strategy',
      description: 'Compelling stories and visuals that connect with your target audience.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ArrowRight,
      title: 'Conversion Optimization',
      description: 'A/B testing and UX improvements to boost leads and sales.',
      color: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized services designed to meet your unique business goals. We adapt to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
