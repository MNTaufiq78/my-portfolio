import Link from "next/link";
import Layout from '../layout';

export default function Contact() {
  return (
    //<Layout>
      <div className="flex flex-col items-center mt-10 px-4">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-4 text-center">You can reach me at:</p>
        <div className="mt-6 flex flex-col space-y-4">
          {/* Email */}
          <Link href="mailto:gydmnt@gmail.com">
            <span className="text-gray-400 hover:text-white">📧 gydmnt@gmail.com</span>
          </Link>

          {/* Phone */}
          <Link href="tel:+919515413090">
            <span className="text-gray-400 hover:text-white">📞 +91 95154 13090</span>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/MNTaufiq78" passHref>
            <span className="text-gray-400 hover:text-white">GitHub</span>
          </Link>
        </div>
      </div>
    //</Layout>
  );
}
