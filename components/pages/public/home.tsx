// "use client"

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button>
        <Link href={"pengajuan-cuti"}>Pengajuan Cuti</Link>
      </Button>
    </div>
  );
};

export default Home;
