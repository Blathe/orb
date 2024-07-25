
# Orb

Orb is an extremely quick and simple template for getting something up and running with Next.js and Clerk authentication.


## Features

- Basic landing page
- Sign Up and Sign In using Clerk components
- Dark mode toggle


## Deployment

1. Clone and cd into the Orb folder
2. ```npm install```
3. Setup your account through Clerk if you havent, create a project, and retrieve your API keys.
4. Rename your .env.example file to .env.local
5. Replace the following environment variables with your Clerk API keys
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR PUBLIC KEY
CLERK_SECRET_KEY=YOUR SECRET KEY
```
6. Run the application ```npm run dev```
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

