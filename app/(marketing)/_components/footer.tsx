import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center w-full justify-between">
        <Logo />
        <div className=" flex gap-1 items-center justify-evenly">
          <span> Built with </span>
          <Heart className="text-red-500 gap-x-3 h-5 w-5" /> <span> by </span>
          <Link href="https://codecrafthub.tech"> CodeCraftHub </Link>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-center md:justify-between w-full ">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
