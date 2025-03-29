"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Change active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About me", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ]

  const skills = [
    { name: "C++", level: 95 },
    { name: "iTwin", level: 90 },
    { name: "OpenGL", level: 85 },
    { name: "WebGL", level: 85 },
    { name: "DirectX", level: 85 },
    { name: "GLSL", level: 85 },
    { name: "HLSL", level: 85 },
    { name: "CUDA", level: 80 },
    { name: "Docker", level: 75 },
    { name: "PostgreSQL", level: 75 },
  ]

  const projects = [
    {
      title: "iTwin Platform Development",
      description: "Leading development of real-time rendering and visualization features using OpenGL, WebGL, and DirectX.",
      technologies: ["C++", "OpenGL", "WebGL", "DirectX", "GLSL", "HLSL"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "3D Graphics Engine",
      description: "Developed and optimized 3D graphics engine with support for multiple rendering backends.",
      technologies: ["C++", "OpenGL", "DirectX", "CUDA"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Visualization System",
      description: "Built a high-performance real-time visualization system for large-scale 3D models.",
      technologies: ["C++", "WebGL", "GLSL", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans">
      {/* Mobile navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mithun Tagde
          </span>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id ? "bg-gray-800 text-blue-400" : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-50">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 p-2 rounded-full transition-all ${
              activeSection === item.id
                ? "bg-gray-800 text-blue-400 shadow-lg shadow-blue-500/20"
                : "hover:bg-gray-800/50"
            }`}
            title={item.label}
          >
            {item.icon}
            <span
              className={`${
                activeSection === item.id ? "opacity-100 w-auto" : "opacity-0 w-0"
              } overflow-hidden transition-all duration-300`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-20 md:pt-0">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                Senior Software Engineer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hello, I'm{" "}
                <span className="text-blue-500 font-extrabold">
                  Mithun Tagde
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Senior Software Engineer at Bentley Systems specializing in C++, iTwin, OpenGL, WebGL, DirectX, GLSL, HLSL, and CUDA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Contact
                </Button>
              </div>
            </motion.div>

            <div className="mt-12 flex gap-4">
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mithun-tagdeb6940328" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User size={24} className="text-blue-400" />
              About me
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  Experienced Senior Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Requirements Analysis, C++, C# and Software Design.
                </p>
                <p className="text-gray-300 mb-6">
                  Currently working at Bentley Systems as a Senior Software Engineer, focusing on real-time rendering and visualization technologies. Strong engineering professional with expertise in graphics programming and 3D visualization.
                </p>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Download CV
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">My skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase size={24} className="text-blue-400" />
              My Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap size={24} className="text-blue-400" />
              Education
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="mb-1 text-blue-400">2001 - 2005</div>
                <h3 className="text-xl font-semibold">Bachelor's Degree in Mechanical Engineering</h3>
                <p className="text-gray-400">Government College of Engineering Aurangabad</p>
                <p className="mt-2 text-gray-300">
                  Focused on mechanical engineering principles and design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Mail size={24} className="text-blue-400" />
              Contact
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  Interested in working together or have any questions? Feel free to contact me through the form or my social media.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" />
                    <span>mithun.tagde@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="text-blue-400" />
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-blue-400" />
                    <a href="https://www.linkedin.com/in/mithun-tagdeb6940328" className="hover:text-blue-400 transition-colors">
                      linkedin.com/in/mithun-tagdeb6940328
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mithun Tagde. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

