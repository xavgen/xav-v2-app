import Image from "next/image";
import Navbar from "../Navbar";
import Link from "next/link";
import Home from "../page";
import Navbar2 from "../NavbarTwo";

export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col justify-between p-24 font-mono"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)",
      }}
    >
      <Navbar2 />
      <div
        className="ripple border rounded-3xl about2-content flex justify-between items-centered m-12 mr-20 ml-20 pb-8 mt-10"
        style={{
          borderColor: "rgba(83, 56, 87)",
          borderWidth: "5px",
          backgroundColor: "rgba(15, 17, 12)",
        }}
      >
        <div className="text-2xl text-left pt-10 pl-10 rounded-3xl">
          <span className="text-gray-400">Who am I?</span>

          <p className="text-5xl text-left p-5 pl-1 rounded-3xl w-full ">
            I'm a <span className="text-purple-400 ripple">web designer</span>{" "}
            and <span className="ripple text-purple-400">developer</span> based
            in Atlanta, GA.
          </p>

          <br></br>
          <span className="text-gray-400 text-2xl">About Me</span>
          <p className="text-2xl text-left p-5 rounded-3xl w-full text-gray-400">
            Education:&nbsp;
            <span className="text-purple-400">
              Georgia Institute of Technology
            </span>
          </p>
          <ul className="pl-5">
            <li className="text-2xl text-left ml-20 rounded-3xl w-full text-white mt-3">
              - CS Major, Class of 2026
            </li>
          </ul>

          <p className="text-2xl text-left p-5 rounded-3xl w-full text-gray-400">
            Interests:&nbsp;
          </p>
          <ul className="pl-5">
            <li className="text-2xl text-left ml-20 rounded-3xl w-full text-white">
              - Web Development, UI/UX Design, Art
            </li>
          </ul>

          <p className="text-2xl text-left p-5 rounded-3xl w-full text-gray-400">
            Links:&nbsp;
          </p>
          <ul>
            <li className="text-2xl text-left ml-20 rounded-3xl w-full text-white">
              <Link
                className="group rounded-lg border border-transparent px-5 py-4"
                href="https://www.linkedin.com/in/xavier-genio"
              >
                <span
                  className={`mb-3 text-2xl text-center group-hover:jumpOnce group-hover:text-purple-400`}
                >
                  - LinkedIn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
            <li className="text-2xl text-left ml-20 rounded-3xl w-full text-white">
              <Link
                className="group rounded-lg border border-transparent px-5 py-4"
                href="https://github.com/xavgen"
              >
                <span
                  className={`mb-3 text-2xl text-center group-hover:jumpOnce group-hover:text-purple-400`}
                >
                  - Github{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
            <li className="text-2xl text-left ml-20 rounded-3xl w-full text-white">
              <Link
                className="group rounded-lg border border-transparent px-5 py-4"
                href="https://instagram.com/_reedless?igshid=YzAwZjE1ZTI0Zg=="
              >
                <span
                  className={`mb-3 text-2xl text-center group-hover:jumpOnce group-hover:text-purple-400`}
                >
                  - Art Instagram{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src="./me_2.jpg"
          alt="Description of image"
          className="w-1/4 items-start object-cover m-20 rounded-3xl"
        />
      </div>
    </main>
  );
}
