import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CreateAdminDialogForm from "./create-admin-dialog-form";

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
        <CreateAdminDialogForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateAdminDialog;
