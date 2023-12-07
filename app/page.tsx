import Image from 'next/image';
import Navbar from './Navbar';
import LUX from './linksUnderXav';
import PoP from './PoP/PartofPage';
import XavGen from './XavGen';

export default function Home() {

  const loading = true;

  return (
    <main id="home" className="flex min-h-screen flex-col items-center justify-between p-24 font-mono"
    style={{background: "radial-gradient(circle at 10% 20%, rgba(47, 27, 37, 0.2), transparent 50%), radial-gradient(circle at 60% 70%, rgba(81, 0, 143, 0.2), transparent 50%), radial-gradient(circle at 90% 50%, rgba(81, 0, 143, 0.2), transparent 50%)"}}>
      <Navbar />
      <div style={{ height: '25vh' }}></div>
      <XavGen/>
      <LUX/>
      <PoP/>

</main>
  )
}
