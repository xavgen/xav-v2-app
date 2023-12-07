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
          <span className="text-gray-400">Skills</span>
          <p className="text-2xl text-left p-5 rounded-3xl w-full text-purple-400">
            Programming:&nbsp;
          </p>
          <ul className="grid grid-cols-2 gap-3 pl-10">
            {"- Python, - Java, - React, - HTML, - GitHub, - Typescript, - NextJS, - Javascript, - C#, - Visual Studio Code"
              .split(", ")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          <br></br>
          <p className="text-2xl text-left p-5 rounded-3xl w-full text-purple-400">
            Other:&nbsp;
          </p>
          <ul className="grid grid-cols-2 gap-3 pl-10">
            {"- Microsoft Office, - Google Workspace, - Project Management, - Code Documentation, - Netlify, - Procreate"
              .split(", ")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div className="w-1/4 m-16 items-center">
          <Image
            src="./art_1.png"
            alt="Description of image"
            className="object-cover rounded-3xl"
          />
          <br></br>
          <Link
            className="group rounded-lg border border-transparent px-5 py-4"
            href="https://github.com/xavgen"
          >
            <span
              className={`mb-3 text-xl font-semibold text-center group-hover:jumpOnce group-hover:text-purple-400 text-gray-400`}
            >
              <br></br>
              {Array.from("My Github".replace(/ /g, "\u00a0")).map(
                (letter, index) => (
                  <span
                    key={index}
                    className="jump"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter}
                  </span>
                )
              )}
              &nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                -&gt;
              </span>
            </span>
          </Link>

          <Link
            className="group rounded-lg border border-transparent px-5 py-4"
            href="https://instagram.com/_reedless?igshid=YzAwZjE1ZTI0Zg=="
          >
            <span
              className={`mb-3 text-xl font-semibold text-center group-hover:jumpOnce group-hover:text-purple-400 text-gray-400`}
            >
              <br></br>
              {Array.from("My Art Instagram".replace(/ /g, "\u00a0")).map(
                (letter, index) => (
                  <span
                    key={index}
                    className="jump"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter}
                  </span>
                )
              )}
              &nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                -&gt;
              </span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
