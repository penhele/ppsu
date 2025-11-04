import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateAdminDialogForm from "@/components/forms/create-admin-dialog-form";

const CreateAdminDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Tambah Admin</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Admin</DialogTitle>
        </DialogHeader>
        se
        <CreateAdminDialogForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateAdminDialog;
