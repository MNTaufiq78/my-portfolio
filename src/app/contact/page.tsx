export default function Contact() {
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-4">You can reach me at:</p>
        <div className="mt-6 flex flex-col space-y-4">
        {/* Email */}
        <link
          href="mailto:gydmnt@gmail.com"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          📧 gydmnt@gmail.com
        </link>

        {/* Phone */}
        <link
          href="tel:+919515413090"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          📞 +91 95154 13090
        </link>
        <div className="mt-6 flex flex-col space-y-4">
        {/* GitHub Link */}
        <link
          href="https://github.com/MNTaufiq78"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47 
              0-.23-.01-.82-.01-1.61-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 
              1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 
              0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 
              1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.3.69.9.69 1.82 
              0 1.31-.01 2.36-.01 2.68 0 .26.16.57.67.47A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
          <span>GitHub</span>
        </link>
        </div>
        {/* Resume Link */}
        <link
          href="https://drive.google.com/file/d/1NSvB4w5UTN-v_BzjA5VeX9thVSp919XM/view?usp=drive_link" 
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          View My Resume
        </link>
      </div>
      </div>
    );
  }
  