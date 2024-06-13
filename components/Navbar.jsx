import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="font-light text-base">
      <div className="flex justify-between p-6 backdrop-filter backdrop-blur-sm">
        <div>Logo</div>
        <div>
          <ul className="flex gap-x-5">
            <Button variant="ghost" className="rounded-full">
              Home
            </Button>
            <Button variant="ghost" className="rounded-full">
              Services
            </Button>
            <Button variant="ghost" className="rounded-full">
              Projects
            </Button>
            <Button variant="ghost" className="rounded-full">
              About Us
            </Button>
            <Button variant="ghost" className="rounded-full">
              Contact Us
            </Button>
          </ul>
        </div>
      </div>
      <Separator className=" bg-zinc-800 w-full" />
    </header>
  );
};

export default Navbar;
