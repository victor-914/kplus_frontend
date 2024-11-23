import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000] text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Kplus-property</h3>
            <p className="mb-6">
              Your trusted partner in finding the perfect property. We make real estate
              simple, efficient, and rewarding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/search" className="hover:text-white transition-colors">
                  Search Properties
                </a>
              </li>
              <li>
                <a href="/properties" className="hover:text-white transition-colors">
                  Featured Listings
                </a>
              </li>
              
              
             
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>
                  Fatima Plaza Wuye. Block C5, Opposite Sharfa PMS station, Abuja.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>(+234) 8155273175</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@kplus-property.com</span>
              </li>
            </ul>
          </div>

         
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} Kplus-property Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}