import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const session = await auth();
  if (!session) return <p>tidak ada session</p>;

  return (
    <div className="flex items-center flex-col justify-center min-h-screen"></div>
  );
};

export default Home;
