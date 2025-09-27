import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Timeline from '@/components/Timeline';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          About PixelForge
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a team of creative minds passionate about digital innovation. With over a decade of experience, we blend strategy, design, and technology to deliver results that matter.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg">
              Empower brands to thrive in the digital age through bold ideas and measurable growth.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-100">
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg">
              Become the go-to partner for innovative marketing solutions worldwide.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
        <Timeline />
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Join Our Team
        </Button>
      </div>
    </div>
  );
}
