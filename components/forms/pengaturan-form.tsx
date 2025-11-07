import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAdminBySessionId } from "@/lib/data/user";
import Tableheader from "@/components/table-header";

const PengaturanForm = async () => {
  const session = await auth();
  if (!session) return null;

  const admin = await getAdminBySessionId(session.user.id as string);

  const items = [
    { label: "ID", value: admin?.id },
    { label: "Email", value: admin?.email },
    { label: "Role", value: admin?.role },
  ];

  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-white">
      <Tableheader title="Profil Admin" />

      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <Label>{item.label}</Label>
              <Input defaultValue={item.value as string} disabled />
            </div>
          ))}
        </div>
      </div>

      <Button variant={"outline"} className="hover:border-primary">
        Ganti Password
      </Button>
    </div>
  );
};

export default PengaturanForm;
