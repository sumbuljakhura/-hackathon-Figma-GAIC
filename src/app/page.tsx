import HeroSection from "./components/herosection";
import { Tables } from "./components/tables";
import { Top } from "./components/top";
import { AsgaardSofa } from "./components/Asgaardsofa";
import { Blog } from "./components/blog";
import { Instagram } from "./components/instagram";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    
    <main>
      <Navbar/>
<HeroSection/>
<Tables/> 
<Top/>
<AsgaardSofa/>
<Blog/>
<Instagram/>
</main>  );
}
