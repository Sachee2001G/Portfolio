"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    description:
      "A modern e-commerce solution with Next.js and Stripe integration. Features include real-time inventory tracking, seamless checkout process, and an intuitive admin dashboard.",
    details:
      "Built a scalable e-commerce infrastructure supporting 10k+ daily users. Utilized Next.js for server-side rendering to optimize SEO and performance. Integrated Stripe Connect for multi-vendor payments and implemented a real-time inventory management system using PostgreSQL triggers and WebSockets. The project resulted in a 40% increase in sales conversion rates.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    title: "AI Dashboard",
    category: "Data Visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    description:
      "Real-time data visualization dashboard powered by AI analytics. Provides predictive insights and actionable metrics for business growth.",
    details:
      "Designed and developed a comprehensive analytics dashboard for a fintech client. The system processes millions of data points to provide real-time visualization of market trends. Leveraged Python for the AI model backend and D3.js for complex, interactive frontend charts. The dashboard reduced reporting time by 90% and improved decision-making speed.",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "FastAPI"],
    link: "#",
  },
  {
    title: "Social Experience",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    description:
      "A new way to connect with friends through shared experiences. Built with React Native and Firebase for cross-platform compatibility.",
    details:
      "Created a cross-platform mobile application focused on spontaneous social meetups. Implemented features like geolocation-based event discovery, real-time chat, and story sharing. Used React Native for a near-native performance on both iOS and Android, backed by Firebase for robust authentication and real-time database capabilities.",
    technologies: ["React Native", "Firebase", "Redux", "Google Maps API"],
    link: "#",
  },
  {
    title: "Finance Tracker",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    description:
      "Smart personal finance tracking with predictive budgeting. Helps users manage expenses and plan for future savings goals.",
    details:
      "Developed a personal finance assistant that helps users understand their spending habits. The app securely connects to bank accounts via Plaid to auto-categorize transactions. Built a custom budgeting algorithm that adjusts recommendations based on users' spending patterns over time.",
    technologies: ["Vue.js", "Node.js", "Plaid API", "MongoDB", "Express"],
    link: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 relative bg-gray-50/50 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-bebas tracking-wide">
            Selected Works
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            A collection of projects where design meets code to solve real
            problems.
          </p>
        </motion.div>

        {/* Flex wrap with justify center handles centering the last row of orphans */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] flex-shrink-0"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-indigo-500 uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors font-bebas tracking-wide">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition-colors">
                    <ArrowUpRight
                      size={16}
                      className="text-gray-400 group-hover:text-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2rem] overflow-hidden max-w-6xl w-full shadow-2xl relative flex flex-col lg:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full text-black hover:bg-black hover:text-white transition-all z-20"
              >
                <X size={24} />
              </button>

              {/* Modal Image - Left Side on Desktop */}
              <div className="lg:w-1/2 relative bg-gray-100 min-h-[300px] lg:min-h-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content - Right Side on Desktop */}
              <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-300">
                <span className="text-sm font-medium text-indigo-600 mb-2 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight font-bebas tracking-wide">
                  {selectedProject.title}
                </h3>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                  <p>{selectedProject.description}</p>
                  <p className="font-light">{selectedProject.details}</p>
                </div>

                <div className="mt-auto">
                  <a
                    href={selectedProject.link}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-transform hover:scale-105 active:scale-95 text-lg"
                  >
                    View Project <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
