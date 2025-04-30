import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  BriefcaseBusiness, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={28} className="text-blue-400" />
              <span className="font-bold text-xl text-white">SarkariJobs</span>
            </div>
            <p className="mb-4">
              Your one-stop destination for all government job notifications, results, admit cards, and more.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs/central-government" className="hover:text-blue-400 transition-colors">Central Government</Link>
              </li>
              <li>
                <Link href="/jobs/state-government" className="hover:text-blue-400 transition-colors">State Government</Link>
              </li>
              <li>
                <Link href="/jobs/bank" className="hover:text-blue-400 transition-colors">Bank Jobs</Link>
              </li>
              <li>
                <Link href="/jobs/teaching" className="hover:text-blue-400 transition-colors">Teaching Jobs</Link>
              </li>
              <li>
                <Link href="/jobs/railway" className="hover:text-blue-400 transition-colors">Railway Jobs</Link>
              </li>
              <li>
                <Link href="/jobs/police" className="hover:text-blue-400 transition-colors">Police Jobs</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>contact@sarkarijobs.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Government Complex, New Delhi, 110001, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SarkariJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}