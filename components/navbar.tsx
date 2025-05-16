import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 h-16">
            <Link href={"/"} className="text-xl font-medium">Blog</Link>
            <div className="flex items-center gap-4">
            <SignedIn>
              <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
              <Button variant={"outline"}>Sign In</Button>
              </SignInButton> 
            </SignedOut>
           
            </div>
        </div>
    </header>
  )
}
