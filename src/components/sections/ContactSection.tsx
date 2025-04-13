
import React from 'react';
import { MessageSquare, Mail, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 wood-bg px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4 minecraft-text">Contact Me</h2>
          <p className="max-w-2xl mx-auto">
            Want to chat about Minecraft plugins or need a custom development solution?
            Reach out and let's create something amazing together!
          </p>
        </div>
        
        <div className="minecraft-container p-8 hover-block">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="minecraft-container-dark p-6 minecraft-build delay-100">
                <div className="flex flex-col items-center gap-4">
                  <MessageSquare className="h-10 w-10 text-primary minecraft-bounce" />
                  <h3 className="text-xl font-bold">Discord</h3>
                  <a href="https://discord.com/users/axillityz" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-lg font-bold hover:text-primary transition-colors">
                    axillityz
                  </a>
                  <div className="minecraft-btn w-full text-center">
                    <a href="https://discord.com/users/axillityz" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center justify-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      <span>Message on Discord</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="minecraft-container-dark p-6 minecraft-build delay-200">
                <div className="flex flex-col items-center gap-4">
                  <Mail className="h-10 w-10 text-primary minecraft-bounce" />
                  <h3 className="text-xl font-bold">Email</h3>
                  <a href="mailto:contact@Axillity.xyz" 
                     className="text-lg font-bold hover:text-primary transition-colors">
                    contact@Axillity.xyz
                  </a>
                  <div className="minecraft-btn w-full text-center">
                    <a href="mailto:contact@Axillity.xyz" 
                       className="flex items-center justify-center gap-2">
                      <Mail className="h-5 w-5" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="minecraft-container-dark p-6 w-full md:w-1/2 minecraft-build delay-300">
              <div className="flex flex-col items-center gap-4">
                <Github className="h-10 w-10 text-primary minecraft-bounce" />
                <h3 className="text-xl font-bold">GitHub</h3>
                <a href="https://github.com/AxillityDev" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-lg font-bold hover:text-primary transition-colors">
                  AxillityDev
                </a>
                <div className="minecraft-btn w-full text-center">
                  <a href="https://github.com/AxillityDev" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-2">
                    <Github className="h-5 w-5" />
                    <span>View GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
