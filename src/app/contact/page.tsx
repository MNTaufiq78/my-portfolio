import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-400 mt-4">You can reach me at:</p>
      <div className="mt-6 flex flex-col space-y-4">

        {/* Email */}
        <a href="mailto:gydmnt@gmail.com" className="text-gray-400 hover:text-white">
          📧 gydmnt@gmail.com
        </a>

        {/* Phone */}
        <a href="tel:+919515413090" className="text-gray-400 hover:text-white">
          📞 +91 95154 13090
        </a>

        {/* GitHub */}
        <a href="https://github.com/MNTaufiq78" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          GitHub
        </a>

        {/* Resume */}
        <a href="https://drive.google.com/file/d/1NSvB4w5UTN-v_BzjA5VeX9thVSp919XM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          View My Resume
        </a>
      </div>
    </div>
  );
}
