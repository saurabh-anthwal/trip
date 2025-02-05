export default function Footer() {
  const footerLinks = {
    company: ['About Us', 'Careers', 'Blog', 'Press'],
    support: ['Help Center', 'Safety', 'Cancellation', 'COVID-19'],
    legal: ['Privacy Policy', 'Terms of Service', 'Trust & Safety'],
    business: ['Success Stories', 'Travel Agents', 'Affiliate Program'],
  };

  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">trip</span>
                <span className="text-orange-500">lanza</span>
              </span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">© 2024 Triplanza. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
