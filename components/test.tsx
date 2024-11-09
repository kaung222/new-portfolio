"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-gray-800 shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-20 flex flex-col items-center justify-center space-y-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <X />
          </Button>
          <a href="#about" className="text-xl" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="text-xl" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="text-xl" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-xl" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20">
        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-4">Backend Developer</h2>
          <p className="text-xl mb-6">
            Hi, I&apos;m Jane Doe. I specialize in building robust and scalable
            backend systems.
          </p>
          <Button>Download CV</Button>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Node.js",
              "Python",
              "Java",
              "SQL",
              "MongoDB",
              "Docker",
              "Kubernetes",
              "AWS",
              "RESTful APIs",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "E-commerce API",
                description:
                  "Developed a scalable API for an e-commerce platform using Node.js and MongoDB.",
              },
              {
                title: "Data Processing Pipeline",
                description:
                  "Built a data processing pipeline using Python and Apache Kafka.",
              },
              {
                title: "Microservices Architecture",
                description:
                  "Designed and implemented a microservices architecture using Java Spring Boot and Docker.",
              },
              {
                title: "Real-time Chat Server",
                description:
                  "Created a real-time chat server using WebSockets and Redis for message queueing.",
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:jane@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
