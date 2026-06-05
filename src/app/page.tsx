"use client";

import LaptopScene from "./components/LaptopScene";

export default function Home() {
  return (
    <>
      {/* 3D Canvas - Fixed Background */}
      <LaptopScene />

      {/* Scrollable Content - Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="backdrop-blur-sm bg-black/50 p-8 rounded-2xl border border-cyan-500/30 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mohammed Naseeruddin Taufiq
            </h1>
            <p className="text-gray-300 text-center mt-6 text-lg md:text-xl">
              Advanced Web Developer | Cybersecurity Enthusiast | Fullstack Expert
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition">
                View Projects
              </button>
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="min-h-screen flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/50 p-8 rounded-2xl border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I am Mohammed Naseeruddin Taufiq, a passionate software developer with a strong 
              foundation in fullstack web development and data analytics. I have a{" "}
              <span className="text-cyan-400">B.Tech in Computer Science and Engineering (Data Analytics)</span>{" "}
              from Presidency University, Bangalore (2020-2024), with a CGPA of <span className="text-cyan-400">7.92</span>.
              <br /><br />
              I specialize in <span className="text-cyan-400">React, Next.js, Node.js and Firebase</span>. 
              I have led multiple projects, including <span className="text-cyan-400">MovieHub, FOODHUNT, and Doctor AI</span>.
              I am currently looking for opportunities in software engineering and cybersecurity.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="min-h-screen flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/50 p-8 rounded-2xl border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Education</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="text-2xl font-bold">Bachelor of Technology - CSE (Data Analytics)</h3>
                <p className="text-gray-400">2020 - 2024 | Presidency University, Bangalore</p>
                <p className="text-cyan-400 font-bold mt-2">CGPA: 7.92</p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="text-2xl font-bold">Intermediate (12th Grade)</h3>
                <p className="text-gray-400">2018 - 2020 | Narayana Junior College, Hyderabad</p>
                <p className="text-cyan-400 font-bold mt-2">Percentage: 91.7%</p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="text-2xl font-bold">High School (10th Grade)</h3>
                <p className="text-gray-400">2017 - 2018 | Motessori High School</p>
                <p className="text-cyan-400 font-bold mt-2">CGPA: 8.8</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a 
                href="/Resume2.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:scale-105 transition transform"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section (Section 3) */}
        <section className="min-h-screen flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/50 p-8 rounded-2xl border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Experience & Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "Three.js", "Firebase", "Python", "SQL"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Let's Connect</h3>
                <p className="text-gray-300 mb-4">
                  Looking for opportunities in software engineering and cybersecurity.
                  Feel free to reach out!
                </p>
                <div className="flex gap-3">
                  <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500/30 transition">GitHub</a>
                  <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500/30 transition">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}