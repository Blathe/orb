import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex flex-col h-[calc(100vh-64px)] items-center justify-center">
      <SignedOut>
        <p>Looks like you need to sign in. <SignInButton /></p>
      </SignedOut>
      <SignedIn>
         <div>
            <p>Welcome, {user?.firstName}</p>
         </div>
      </SignedIn>
    </main>
  );
}
