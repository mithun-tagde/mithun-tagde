"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Change light/dark theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Change active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

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
    { category: "Graphics Programming", items: ["C++", "OpenGL", "WebGL", "DirectX", "GLSL", "HLSL", "CUDA"] },
    { category: "Platforms & Tools", items: ["iTwin", "Docker", "PostgreSQL", "Git", "VS Code"] },
    { category: "Soft Skills", items: ["Leadership", "Requirements Analysis", "Software Design", "Team Collaboration"] },
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

  const education = [
    {
      period: "2001 - 2005",
      title: "Bachelor's Degree in Mechanical Engineering",
      institution: "Government College of Engineering Aurangabad",
      description: "Focused on mechanical engineering principles and design.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              MT
            </div>
            <span className="font-bold text-xl hidden sm:block">Mithun Tagde</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <Button className="hidden md:flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                  Senior Software Engineer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hello, I'm{" "}
                  <span className="text-teal-500 dark:text-teal-400 font-extrabold">
                    Mithun Tagde
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Senior Software Engineer at Bentley Systems specializing in C++, iTwin, OpenGL, WebGL, DirectX, GLSL, HLSL, and CUDA.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                    View projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                    Download CV
                  </Button>
                </div>

                <div className="mt-12 flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mithun-tagdeb6940328"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur-3xl opacity-20" />
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Mithun Tagde"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                About me
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Get to know me better</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Experienced Senior Software Engineer with a demonstrated history of working in the computer software industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Experienced Senior Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Requirements Analysis, C++, C# and Software Design.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Currently working at Bentley Systems as a Senior Software Engineer, focusing on real-time rendering and visualization technologies. Strong engineering professional with expertise in graphics programming and 3D visualization.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">10+</div>
                    <div className="text-gray-600 dark:text-gray-300">Years of experience</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">20+</div>
                    <div className="text-gray-600 dark:text-gray-300">Projects completed</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">My skills</h3>
                <Tabs defaultValue="Graphics Programming" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    {skills.map((category) => (
                      <TabsTrigger key={category.category} value={category.category}>
                        {category.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {skills.map((category) => (
                    <TabsContent key={category.category} value={category.category}>
                      <div className="grid grid-cols-2 gap-4">
                        {category.items.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-teal-500" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My recent work</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Here's a selection of projects I've worked on recently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
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

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                View more projects
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Education
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My academic journey</h2>
              <p className="text-gray-600 dark:text-gray-300">My educational and professional development.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.period}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500" />
                  <div className="mb-1 text-teal-500">{edu.period}</div>
                  <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Let's talk?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Interested in working together or have any questions?
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-6">Contact information</h3>
                  <p className="mb-8 opacity-90">
                    Complete the form and I'll get back to you as soon as possible.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-white/20">
                        <Mail size={20} />
                      </div>
                      <span>mithun.tagde@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-white/20">
                        <Github size={20} />
                      </div>
                      <span>github.com/yourusername</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-white/20">
                        <Linkedin size={20} />
                      </div>
                      <span>linkedin.com/in/mithun-tagdeb6940328</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 bg-white dark:bg-gray-800">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                      Send message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                MT
              </div>
              <span className="font-bold">Mithun Tagde</span>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Mithun Tagde. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

