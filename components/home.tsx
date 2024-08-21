import { Button } from "@/components/ui/button";
import {
  CodeIcon,
  Github,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MountainIcon,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import Projects from "./projects";

export default function MainComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className=" font-bold">JM</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  James Marcus
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack Developer | Node.js Enthusiast | Problem Solver
                </p>
              </div>
              <img
                alt="Profile"
                className="aspect-square overflow-hidden rounded-full object-cover object-center"
                height="150"
                src="/my-img.jpeg?height=150&width=150"
                width="150"
              />
            </div>
          </div>
        </section>
        <Projects />
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex items-center space-x-4">
                <CodeIcon className="h-6 w-6" />
                <span>Javascript</span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contact
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Get in touch with me
              </p>
              <div className="flex space-x-4">
                <Link href="mailto:thirdgodiswinning@gmail.com">
                  <Button variant="outline">
                    <MailIcon className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/james-marcus-27284724b/">
                  <Button variant="outline">
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/kaung222">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>

                <Link href="https://resume.io/r/EkzBJSJzh">
                  <Button variant="outline">
                    <StickyNote className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 James Marcus. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
