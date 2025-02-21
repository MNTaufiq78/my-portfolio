"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { 
    name: "MovieHub", 
    desc: "MovieHub is a movie-watching platform that I led. It is built using HTML, Tailwind CSS, and JavaScript for the frontend. Firebase is used for user authentication, and Amazon S3 handles movie storage, ensuring a seamless streaming experience. Users can browse, search, and watch movies efficiently.",
    },
  { 
    name: "FoodHunt", 
    desc: "FoodHunt is a Swiggy-like food ordering application where users can explore restaurants and their menus. The frontend is built using JSX and React, with Redux for efficient data management. This project enables users to add items to a cart, place orders, and track deliveries.",
    },
  { 
    name: "Doctor AI", 
    desc: "Doctor AI is an acute disease prediction chatbot built using Android Studio (Java). It integrates Python via the Chaquopy plugin and leverages SVM and Decision Tree algorithms for accurate medical condition predictions. Users input symptoms, and the AI provides real-time diagnostic suggestions.",
    },
  { 
    name: "Sketch2Colour", 
    desc: "Sketch2Colour is an AI-powered anime sketch colorization model. It uses Conditional Generative Adversarial Networks (C-GANs) to transform black-and-white anime line art into a fully colored anime image. The implementation follows techniques from research paper(s) on anime sketch colorization. The model is trained on an Anime Sketch Colorization Pair dataset and referenced a blog on Towards Data Science.",
    
    },
  { 
    name: "Instagram Clone", 
    desc: "This Instagram-like web app replicates the Play Store version of Instagram. Built with React (JSX, Hooks, Context API) and Tailwind CSS for the UI. It features React Router for navigation. The backend uses Node.js and Express.js, with Firebase for authentication and database storage. Real-time messaging is enabled via Socket.io, while WebSockets handle live interactions.",
    },
];


export default function Projects() {
    const [selected, setSelected] = useState<{ name: string; desc: string } | null>(null);
  
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-40 h-40 bg-gray-900 flex items-center justify-center cursor-pointer border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(project)}
            >
              {project.name}
            </motion.div>
          ))}
        </div>
  
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 p-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="bg-gray-800 p-10 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
                <p>{selected.desc}</p>
                <button className="mt-6 px-4 py-2 bg-red-600 rounded" onClick={() => setSelected(null)}>
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }