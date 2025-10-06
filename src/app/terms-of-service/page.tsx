import React from 'react';
import GlobalBackground from '../../components/GlobalBackground';

const TermsOfServicePage = () => {
  return (
    <div className="text-white min-h-screen">
      <GlobalBackground />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="glass-container p-8 md:p-12">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h1>Terms of Service</h1>
            <p className="text-gray-400 text-sm">Last updated: October 26, 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By using our website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the website. We may revise the Terms from time to time, and the most current version will always be posted on our website.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You may use the website only for lawful purposes and in accordance with these Terms. You agree not to use the website:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website.</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2>4. Governing Law</h2>
            <p>
              All matters relating to the website and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the jurisdiction without giving effect to any choice or conflict of law provision or rule.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at: contact@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
