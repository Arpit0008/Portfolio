import { useState } from "react";
import ecommerce from "../assets/ecommerce.png";
import ExpenseManager from "../assets/ExpenseManager.png";
import RevealOnScroll from "../Ui/RevealOnScroll";
import UniversityExpenseManager from "../assets/UniversityExpenseManager.png";
import ReactCryptoTracker from "../assets/ReactCryptoTracker.png";

function Projects() {
  const [projects] = useState([
    {
      image: ecommerce,
      name: "Ecommer Website",
      brief:
        "Your MERN Stack E-commerce Website is a full-stack web application built using MongoDB, Express.js, React.js, and Node.js (MERN stack). This project provides a feature-rich online shopping platform with functionalities like user authentication, product management, order processing, and payment integration.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/Arpit0008/MERN_STACK_Ecommerce_Website",
    },
    {
      image: ExpenseManager,
      name: "Expense Manager App",
      brief:
        "Your Expense Manager App is an Android application developed using Java, Android Studio, and MVVM architecture to help users efficiently track and manage their expenses. The app ensures smooth data storage, retrieval, and visualization for better financial planning.",
      techStack: ["Java", "Android Studio", "MVVM", "Room Database"],
      githubLink: "https://github.com/Arpit0008/ExpesenseManagerApp",
    },
    {
      image: UniversityExpenseManager,
      name: "University Management System",
      brief:
        "Your University Management System is a Java-based console application designed to manage various university operations efficiently. It is built using Core Java and follows OOP principles for structured and modular programming.",
      techStack: ["Java", "OOP", "MySQL", "JDBC"],
      githubLink:
        "https://github.com/Arpit0008/University_Managment_System_Core_Java",
    },
    {
      image: ReactCryptoTracker,
      name: "Crypto Tracker",
      brief:
        "Your React Crypto Tracker is a web application built with React.js that provides real-time cryptocurrency price tracking and market insights. It leverages public crypto APIs to fetch live data and display relevant details in an intuitive UI.",
      techStack: ["React.js", "Axios", "CoinGecko API", "Chart.js"],
      githubLink: "https://github.com/Arpit0008/React_Cryto",
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl ">
                  <p className="text-gray-200">View Project</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                  >
                    <img src={project.image} alt={`${project.name} Image`} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
