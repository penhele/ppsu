import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const PengaturanForm = () => {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-white">
      <h1 className="text-xl font-medium">Profil Admin</h1>

      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label>Nama</Label>
            <Input defaultValue={"Stephen Helenus"} disabled />
          </div>
          <div className="flex flex-col gap-2">
            <Label>ID</Label>
            <Input defaultValue={"ADMIN01"} disabled />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input defaultValue={"stephen@admin.com"} disabled />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Role</Label>
            <Input defaultValue={"Admin"} disabled />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Button variant={"outline"} className="hover:border-primary">
          Ganti Password
        </Button>
        <Button className="bg-primary hover:bg-orange-500">Logout</Button>
      </div>
    </div>
  );
};

export default PengaturanForm;
