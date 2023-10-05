"use client";

import { Button } from "@nextui-org/button";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const AuthButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
        scopes: "user-top-read"
      },
    });
  };

  return (
    <div>
      <div className="p-2 flex justify-evenly">
        {!session ? (
          <Button onClick={handleSignIn}>Login</Button>
        ) : (
          <Button onClick={handleSignOut}>Logout</Button>
        )}
      </div>
    </div>
  );
};

export default AuthButton;

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-top-read"
].join(',')