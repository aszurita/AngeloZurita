import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import SocialMedia from './socialmedia';
import { ThemeContext } from "../../Shared/ThemeContext";
import { useContext } from 'react';
function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={`w-full ${darkMode ? 'text-white' : 'text-black'} bg-green-calid bg-opacity-10 text-base `}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-calid">CONTACT ME</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:text-green-calid transition-colors">
                <Mail size={18} />
                <span>azurita@espol.edu.ec</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-calid">QUICK LINKS</h3>
            <div className="flex flex-col space-y-2">
              <a href="#Tools" className="hover:text-green-calid transition-colors" >TOOLS</a>
              <a href="#Articles" className="hover:text-green-calid transition-colors">ARTICLES</a>
              <a href="#Portfolio" className="hover:text-green-calid transition-colors" >PORTFOLIO</a>
              <a href="#Experiences" className="hover:text-green-calid transition-colors" >EXPERIENCES</a>
              <a href="#Presentations" className="hover:text-green-calid transition-colors" >PRESENTATIONS</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-calid">FOLLOW ME</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/aszurita" className="hover:text-green-calid transition-colors">
                <SocialMedia sm={true} type='github' />
                <SocialMedia sm={false} type='github' />
              </a>
              <a href="https://www.linkedin.com/in/angelo-saul-zurita-guerrero/" className="hover:text-green-calid transition-colors">
                <SocialMedia sm={true} type='linkedin' />
                <SocialMedia sm={false} type='linkedin' />
              </a>
              <a href="https://x.com/angelozurita7" className="hover:text-green-calid transition-colors">
                <SocialMedia sm={true} type='X' />
                <SocialMedia sm={false} type='X' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2024 Angelo Zurita. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;