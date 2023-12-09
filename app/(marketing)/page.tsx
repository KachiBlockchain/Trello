import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";

import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Taskify - Trello Clone
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 wp-fit">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish all with Taskify.
      </div>

      {/* <Button className="mt-6" size="lg" onClick={proModal.onOpen()}>
        Clickme
        <Link href="/sign-up">Get Taskfiy for free</Link>
      </Button> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-6 animate-pulse" size="lg">
            Click me to watch a video to see how this app works.
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] flex items-center flex-col">
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle>Video Description</DialogTitle>
            <DialogDescription>
              Maximize the video to see the application features in it's full glory.
            </DialogDescription>
          </DialogHeader>
          <div className="gap-4 py-4">
            <div className=" m-4 lg:m-0">
              <iframe
                src="https://www.loom.com/embed/882eb2cec79645d4a79175662dbee19b?sid=8de8d716-96a4-42d6-a32c-ff197718e71a"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <p className="text-sm text-neutral-700 text-center my-2">You will love it, promised.</p>
    </div>
  );
};

export default MarketingPage;
