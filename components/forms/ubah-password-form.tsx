import InputText from "@/components/inputs/input-text";
import { Button } from "@/components/ui/button";

const UbahPasswordForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <InputText title="Password Lama" name="password_lama"/>
      <InputText title="Password Baru" name="password_baru"/>
      <InputText title="Konfirmasi Password Baru" name="konfirmasi_password_baru"/>

      <Button>Ubah Password</Button>
    </form>
  );
};

export default UbahPasswordForm;
