import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import background from "../public/image.png";

export default function Home() {
  return (
    <div className=" text-white min-h-screen">
      <div className="absolute -z-10">
        <Image src={background} alt="bg-img" className="w-full " />
      </div>
      <Navbar />
      <main className="flex flex-col items-center justify-center px-8 py-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Digital Solutions That Drive Success
          </h1>
          <p className="text-lg mb-8">
            At DigitX, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape. From
            captivating web design to data-driven marketing strategies, we are
            committed to delivering results that exceed expectations.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-black rounded-full px-6 py-2">
              Get Started
            </Button>
            <Button className="bg-transparent border border-white text-white rounded-full px-6 py-2">
              Free Consultation
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
