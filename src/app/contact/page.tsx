import Link from "next/link";
import Layout from '../layout';

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-4">You can reach me at:</p>
        <div className="mt-6 flex flex-col space-y-4">
          {/* Email */}
          <Link href="mailto:gydmnt@gmail.com">
            <a className="text-gray-400 hover:text-white">📧 gydmnt@gmail.com</a>
          </Link>

          {/* Phone */}
          <Link href="tel:+919515413090">
            <a className="text-gray-400 hover:text-white">📞 +91 95154 13090</a>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/MNTaufiq78" passHref>
            <a className="text-gray-400 hover:text-white">GitHub</a>
          </Link>

          {/* Resume */}
          <Link href="https://drive.google.com/file/d/1NSvB4w5UTN-v_BzjA5VeX9thVSp919XM/view?usp=drive_link" passHref>
            <a className="text-gray-400 hover:text-white">View My Resume</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
