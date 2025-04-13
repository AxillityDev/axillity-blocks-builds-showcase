
import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 stone-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white minecraft-text mb-4">About Me</h2>
          <p className="text-white max-w-2xl mx-auto">
            I'm a passionate Minecraft developer with expertise in creating custom plugins, mods, and server solutions.
            With years of experience in Java and the Bukkit/Spigot/Paper ecosystem, I specialize in bringing creative ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="minecraft-container hover-block minecraft-build delay-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Code size={48} className="text-primary minecraft-bounce" />
              </div>
              <CardTitle className="text-center">Plugin Development</CardTitle>
              <CardDescription className="text-center">Custom Minecraft Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                I create custom Spigot/Paper plugins tailored to your exact specifications, from simple utility plugins to complex game mechanics.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <span className="text-sm text-muted-foreground">Java | Kotlin | Spigot API</span>
            </CardFooter>
          </Card>

          <Card className="minecraft-container hover-block minecraft-build delay-200">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Server size={48} className="text-primary minecraft-bounce" />
              </div>
              <CardTitle className="text-center">Server Setup</CardTitle>
              <CardDescription className="text-center">Optimized Minecraft Servers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                I set up and configure high-performance Minecraft servers with custom plugins, optimizations, and security measures.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <span className="text-sm text-muted-foreground">Paper | Velocity | Docker</span>
            </CardFooter>
          </Card>

          <Card className="minecraft-container hover-block minecraft-build delay-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Database size={48} className="text-primary minecraft-bounce" />
              </div>
              <CardTitle className="text-center">Database Integration</CardTitle>
              <CardDescription className="text-center">Data-Driven Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                I implement robust database solutions to store player data, server statistics, and game information securely and efficiently.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <span className="text-sm text-muted-foreground">MySQL | MongoDB | Redis</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
