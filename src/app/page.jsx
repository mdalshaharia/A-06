import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Library from "@/components/library/Library";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Library></Library>
      <Footer></Footer>
    </div>
  );
}
