import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className="flex flex-col h-[calc(100vh-64px)] items-center justify-center">
      <SignUp />
    </main>
  )
}

export default SignUpPage