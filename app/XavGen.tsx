export default function XavGen() {
    return (
        <div className="relative flex flex-col place-items-center before:absolute before:h-[600px] before:w-[900px]
       before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl 
       before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-[400px] after:-translate-y-1/3 after:bg-gradient-conic
        after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
       before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-300 after:dark:via-[#51008f] 
       after:dark:opacity-50 before:lg:h-[800px] z-[-1] align-middle" >
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" // dark:drop-shadow-[0_0_2px_#CECCCC]
          src="/next.svg" 
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1 className={`mb-3 text-7xl font-bold`}>
        {Array.from("Xavier").map((letter, index) => (
      <span key={index} className="jump" style={{ animationDelay: `${index * 0.1}s` }}>
        {letter}
      </span>
    ))}
    &nbsp;
    {Array.from("Genio").map((letter, index) => (
      <span key={index} className="jump" style={{ animationDelay: `${index * 0.1}s` }}>
        {letter}
      </span>
    ))}
          </h1>
          <br></br>
          <br></br>
      </div>
    )
}