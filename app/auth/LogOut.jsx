"use client";

import { signOut, useSession } from "next-auth/react";

const LogOut = () => {
  const session = useSession();
  return (
    <div>
      <div>{session?.data.user?.name}</div>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default LogOut;
