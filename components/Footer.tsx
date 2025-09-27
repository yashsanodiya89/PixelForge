import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PixelForge
            </h3>
            <p className="text-gray-400">
              Innovating digital experiences for forward-thinking brands.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Strategy</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">SEO & SEM</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Content Creation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Social Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
            </div>
            <p className="text-gray-400">info@pixelforge.com | +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PixelForge Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
