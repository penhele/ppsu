import Link from "next/link";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";

const CreateButton = ({ href }: { href: string }) => {
  return (
    <Button className="bg-primary hover:bg-orange-500">
      <Link href={href} className="flex justify-between items-center gap-2">
        <UserPlus />
        <span>Tambah Pegawai</span>
      </Link>
    </Button>
  );
};

export default CreateButton;
