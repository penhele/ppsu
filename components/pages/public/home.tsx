import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const session = await auth();
  if (!session) return <p>tidak ada session</p>;

  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <p>email : {session.user.email}</p>
      <p>user id : {session.user.id}</p>
      <p>user role : {session.user.role}</p>

      <Button>
        <Link href={"pengajuan-cuti"}>Pengajuan Cuti</Link>
      </Button>
    </div>
  );
};

export default Home;
