"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <div
      className=" w-full  z-50 fixed  flex justify-between items-center bg-secondary py-2 
    px-4 border-b border-primary/10"
    >
      <div className="flex items-center">
        <MobileSidebar />
        {/* <Menu className="block md:hidden" /> */}
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            companion.AI
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm">
          Upgrade
          <Sparkles className="h-4 w-4  fill-white text-white ml-4" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};
