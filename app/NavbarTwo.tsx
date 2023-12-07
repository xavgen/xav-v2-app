import Link from "next/link";

export default function Navbar2() {
  return (
    <nav className={`nav-bar fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out`}>
      <Link className="absolute top-0 left-0 p-5 pt-4 pb-4 text-1xl text-purple-400 m-3 bg-purple-900 bg-opacity-30 rounded-3xl" href='https://www.linkedin.com/in/xavier-genio'>
  <span>Xavier Genio</span>
</Link>
  <div className="container mt-4 mx-auto px-6 py-2 flex justify-center items-center">
    <div className="nav-items flex justify-between items-center space-x-8">
    <a href="../#home" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Home</a>
      <a href="../#about" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">About</a>
      <a href="../#projects" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Projects</a>
      <a href="../#skills" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Skills</a>
      <a href="../#involvements" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Involvement</a>
    </div>
  </div>
</nav>
  )
}