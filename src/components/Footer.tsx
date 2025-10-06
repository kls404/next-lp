import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="glass-container p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Brand */}
            <div className="flex flex-col items-start">
              <Link href="/" className="mb-4">
                <Image src="/images/logo.webp" alt="Logo" width={120} height={40} />
              </Link>
              <p className="text-gray-400 text-sm">
                Situs informasi terlengkap untuk Piala Dunia 2026.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-bold mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#jadwal" className="text-gray-400 hover:text-white">Jadwal</Link></li>
                <li><Link href="#tim" className="text-gray-400 hover:text-white">Tim</Link></li>
                <li><Link href="#stadion" className="text-gray-400 hover:text-white">Stadion</Link></li>
                <li><Link href="#rekomendasi" className="text-gray-400 hover:text-white">Rekomendasi</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold mb-4">Sumber</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/berita" className="text-gray-400 hover:text-white">Berita</Link></li>
                <li><Link href="#faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            {/* Social and Legal */}
            <div>
              <h3 className="font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                </a>
              </div>
              <h3 className="font-bold mb-4 mt-6">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center py-6 mt-8 border-t border-gray-800">
          <p className="text-gray-300 text-sm">&copy; 2026 Piala Dunia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
