"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialLink?: string;
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University",
    date: "2025",
    image: "/supervised.png",
    description:
      "Learned how to build machine learning models using Python and Scikit-learn, including data preprocessing, feature engineering, model selection, and evaluation.",
    credentialLink: "#",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning in Python",
    issuer: "Deerwalk Training Center",
    date: "2024",
    image: "/datascience.png", // Placeholder
    description:
      "Learned how to build machine learning models using Python and Scikit-learn, including data preprocessing, feature engineering, model selection, and evaluation.",
    credentialLink: "#",
  },
  {
    id: 3,
    title: "Full-Stack Web Development - MERN Stack",
    issuer: "Deerwalk Training Center",
    date: "2024",
    image: "/mern.jpg", // Placeholder
    description:
      "Gained in-depth knowledge of MERN stack development, including React, Node.js, MongoDB, and Express.js.",
    credentialLink: "#",
  },
];

const Certifications = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [startOffset, setStartOffset] = useState("5%");
  const [endOffset, setEndOffset] = useState("-55%");

  useEffect(() => {
    const handleResize = () => {
      setStartOffset(window.innerWidth < 768 ? "1%" : "5%");
      setEndOffset(window.innerWidth < 768 ? "-85%" : "-55%");
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [startOffset, endOffset]);

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden z-10">
        <motion.div style={{ x }} className="flex gap-8 p-4 md:p-16">
          {/* Title Card */}
          <div className="group relative h-[400px] w-[85vw] md:h-[450px] md:w-[450px] bg-white/50 backdrop-blur-xl border border-white/20 p-8 flex flex-col justify-center shrink-0 rounded-4xl shadow-sm">
            <h2 className="text-6xl md:text-8xl font-bold font-bebas text-black leading-none">
              Certifi- <br /> cations
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-medium">
              Continuous learning and professional development.
            </p>
          </div>

          {certificationsData.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const CertCard = ({
  cert,
  onClick,
}: {
  cert: Certification;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="group relative h-[400px] w-[85vw] md:w-[350px] lg:h-[450px] lg:w-[450px] overflow-hidden bg-white/60 backdrop-blur-md cursor-pointer rounded-3xl lg:rounded-4xl border border-white/20 hover:border-indigo-200 hover:shadow-xl transition-all"
    >
      <div className="h-2/3 relative overflow-hidden p-6">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-white">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-8 bg-white/40 backdrop-blur-sm">
        <span className="text-sm font-bold text-indigo-500 mb-2 uppercase tracking-wider block">
          {cert.issuer}
        </span>
        <h3 className="text-3xl font-bold text-gray-900 font-bebas leading-tight mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-gray-500 font-medium">{cert.date}</p>
      </div>
    </motion.div>
  );
};

const Modal = ({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-scroll cursor-pointer bg-black/20 backdrop-blur-sm p-4 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 cursor-default relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100/50 text-gray-500 hover:bg-gray-200/80 hover:text-black transition-all z-20"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-5 h-full">
          <div className="md:col-span-2 relative h-64 md:h-full min-h-[300px] bg-gray-50 p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square md:w-4/5">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
          </div>
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide border border-indigo-100">
                {cert.issuer}
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-wide border border-gray-200">
                {cert.date}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-bebas leading-none mb-6">
              {cert.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {cert.description}
            </p>
            {cert.credentialLink && (
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all hover:scale-105 w-fit shadow-lg shadow-gray-200"
              >
                View Credential <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
