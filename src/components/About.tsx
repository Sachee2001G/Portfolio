"use client";
import { motion } from "framer-motion";
import { Palette, Globe, Cpu, Code2 } from "lucide-react";
import Image from "next/image";

const About = () => {
  const techStack = [
    { name: "HTML5", image: "/html.png" },
    { name: "CSS3", image: "/css.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "TypeScript", image: "/typescript.png" },
    { name: "React", image: "/react.png" },
    { name: "Angular", image: "/angular.png" },
    { name: "Express.js", image: "/express.png" },
    { name: "Next.js", image: "/next.png" },
    { name: "Python", image: "/python.png" },
    { name: "Django", image: "/django.png" },
  ];

  return (
    <section id="about" className="py-32 relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-indigo-500 uppercase tracking-wider">
            Who I Am
          </span>
          <h2 className="text-6xl md:text-8xl font-bold mt-2 font-bebas tracking-wide">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Bio Card - Large (Row 1, Col 1-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/50 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 font-bebas tracking-wide">
              Design-Driven Developer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              IT engineering student skilled in Machine Learning, Python, and
              Full Stack Web Development, QA Testing, and UI/UX design.
              Experienced in building scalable applications, analysing data, and
              creating user cantered interfaces. Strong teamwork, problem
              solving, and technical execution abilities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experienced in building scalable applications, analysing data, and
              creating user cantered interfaces. Strong teamwork, problem
              solving, and technical execution abilities.
            </p>
          </motion.div>

          {/* Profile Image Card (Row 1, Col 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white group"
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />{" "}
            {/* Placeholder background */}
            <Image
              src="/me.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Stats Card (Row 2, Col 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <h4 className="text-6xl font-bold mb-2 font-bebas">2+</h4>
              <p className="text-indigo-200 text-lg">Years of Experience</p>
            </div>
            <div className="relative z-10 mt-8">
              <h4 className="text-6xl font-bold mb-2 font-bebas">10+</h4>
              <p className="text-indigo-200 text-lg">Projects Completed</p>
            </div>
          </motion.div>

          {/* Focus Areas (Row 2, Col 2-3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border border-white/50"
          >
            <h3 className="text-xl font-bold mb-6 font-bebas tracking-wide">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {" "}
              {/* Adjusted grid to fit 2 cols nicely or stick to 3 but might be tight */}
              <div className="bg-white/60 p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Machine Learning</h4>
                  <p className="text-sm text-gray-500">
                    Building intelligence.
                  </p>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Web Development</h4>
                  <p className="text-sm text-gray-500">
                    Building scalable apps.
                  </p>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-2xl flex items-center gap-4 sm:col-span-2">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Creative Coding</h4>
                  <p className="text-sm text-gray-500">
                    Adding magic with interaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Tech Stack Section */}
        <div className="relative mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-purple-500 uppercase tracking-wider flex items-center justify-center gap-2">
              <Code2 size={16} /> Tech Stack
            </span>
            <h3 className="text-3xl font-bold mt-2 font-bebas tracking-wide">
              Tools I Use
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2, // Randomize float start
                  },
                }}
                className="group relative flex flex-col items-center justify-center"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
