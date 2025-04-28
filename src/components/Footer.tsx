import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">

        {/* Top Section: Company Info, Shopping Links, Customer Service, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-4">K-BEAUTY</h3>
            <p className="text-gray mb-4">
              Your source for authentic Korean beauty products, delivering the latest innovations in skincare and makeup.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-dark hover:text-purple transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Shopping Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-4">Shopping</h3>
            <ul className="space-y-2">
              {['Skincare', 'Makeup', 'Masks', 'Bestsellers', 'New Arrivals'].map((category) => (
                <li key={category}>
                  <Link
                    to={`/products/${category.toLowerCase().replace(' ', '-')}`}
                    className="text-gray hover:text-purple transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                { name: 'Contact Us', link: '/contact' },
                { name: 'Shipping & Returns', link: '/shipping' },
                { name: 'FAQ', link: '/faq' },
                { name: 'Terms & Conditions', link: '/terms' },
                { name: 'Privacy Policy', link: '/privacy' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-gray hover:text-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-dark mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-purple mt-1 flex-shrink-0" />
                <span className="text-gray">123 K-Beauty Street, Seoul, South Korea</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-purple flex-shrink-0" />
                <span className="text-gray">+82 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-purple flex-shrink-0" />
                <span className="text-gray">hello@kbeautyshop.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray mb-4 md:mb-0">
            &copy; {currentYear} K-Beauty Shop. All rights reserved.
          </p>

        
        </div>

      </div>
    </footer>
  );
};

export default Footer;