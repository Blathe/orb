import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';
import React, { ReactNode } from 'react'

const Header = async () => {

    const user = await currentUser();

    return (
        <div className="py-4 bg-gray-100 shadow-md">
            <div className="container flex flex-row justify-between">
                <p className="text-lime-600 font-bold text-2xl"><Link href="/">Orb</Link></p>
                <div>
                    <SignedIn>
                        <div className="flex flex-row gap-4 items-end">
                            <p className="dark:text-white">Welcome, {user?.firstName}</p>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Header