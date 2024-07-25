import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className="flex flex-col h-[calc(100vh-64px)] items-center justify-center">
      <SignIn />
    </main>
  )
}

export default SignInPage