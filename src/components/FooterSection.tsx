
import React from 'react';
import { Users, Globe, Mail, Phone } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Student Groups</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <a href="#" className="hover:text-blue-300 transition-colors">Houston Students WhatsApp</a>
              </li>
              <li className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <a href="#" className="hover:text-blue-300 transition-colors">UH Ridesharing Group</a>
              </li>
              <li className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <a href="#" className="hover:text-blue-300 transition-colors">Rice Airport Pickup Group</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                <a href="https://www.ridemetro.org" className="hover:text-blue-300 transition-colors">METRO Houston</a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                <a href="https://www.uber.com" className="hover:text-blue-300 transition-colors">Uber</a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                <a href="https://www.lyft.com" className="hover:text-blue-300 transition-colors">Lyft</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:student.transport@university.edu" className="hover:text-blue-300 transition-colors">student.transport@university.edu</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+17131234567" className="hover:text-blue-300 transition-colors">(713) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 Houston Student Transportation Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
