
import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 wood-bg px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4 minecraft-text">Get In Touch</h2>
          <p className="max-w-2xl mx-auto">
            Interested in working together? Have a project in mind or need a custom
            Minecraft plugin? Let's talk about how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="minecraft-container p-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">axillityz</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:contact@Axillity.xyz" className="text-lg font-bold hover:text-primary transition-colors">
                contact@Axillity.xyz
              </a>
            </div>
            
            <div className="mt-6 w-full max-w-md flex flex-col items-center">
              <div className="minecraft-btn w-full text-center">
                <a href="https://discord.com/users/axillityz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Message on Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
