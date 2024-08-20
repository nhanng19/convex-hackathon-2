'use client'
 
import { LINKEDIN_URL } from "../app/helpers/auth"

export default function Home() {

  const handleSignIn = () => {
    window.location.href = LINKEDIN_URL;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleSignIn} style={{ backgroundColor: "white", color: "black", padding: 10 }}>
        Login with LinkedIn
      </button>
    </main>
  );
}
