export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10 text-white px-4">
      {/* Hero Section */}
      <h1 className="mt-6 text-3xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-gray-400 mt-4 text-center">Showcasing my projects and skills.</p>

      {/* About Me Section */}
      <section className="mt-10 px-6 max-w-3xl text-justify">
        <h3 className="text-2xl font-bold text-center">About Me</h3>
        <p className="text-gray-300 mt-4">
          Hi, I am Mohammed Naseeruddin Taufiq, a passionate software developer with a strong foundation in fullstack web development and data analytics.
          I have a <b>B.Tech in Computer Science and Engineering (Data Analytics)</b> from Presidency University, Bangalore (2020-2024), with a CGPA of <b>7.92</b>.
          I specialize in <b>React, Next.js, Node.js and Firebase</b>. I have led multiple projects, including <b>MovieHub, FOODHUNT, and Doctor AI</b>.
          I am currently looking for opportunities in software engineering and cybersecurity. Feel free to check out my work!
        </p>
      </section>

      {/* Education Section */}
      <section className="mt-10 px-6 max-w-3xl text-justify">
        <h3 className="text-2xl font-bold text-center">Education</h3>

        <div className="mt-6">
          <h4 className="text-xl font-semibold">Bachelor of Technology (B.Tech) - CSE (Data Analytics)</h4>
          <p className="text-gray-400">2020 - 2024 | Presidency University, Bangalore</p>
          <p className="text-gray-300 font-bold">CGPA: 7.92</p>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold">Intermediate (12th Grade)</h4>
          <p className="text-gray-400">2018 - 2020 | Narayana Junior College, Hyderabad</p>
          <p className="text-gray-300 font-bold">Percentage: 91.7%</p>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold">High School (10th Grade)</h4>
          <p className="text-gray-400">2017 - 2018 | Motessori High School</p>
          <p className="text-gray-300 font-bold">CGPA: 8.8</p>
        </div>
      </section>
      <section className="mt-10 px-6 max-w-3xl text-justify pb-16 flex justify-center">
        <a 
          href="/Resume2.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative px-6 py-2 text-white font-bold text-lg rounded-md border border-cyan-400 bg-black transition duration-300 hover:bg-cyan-400 hover:text-black shadow-lg shadow-cyan-400/50"
        >
          View Resume
        </a>
      </section>
    </div>
  );
}
