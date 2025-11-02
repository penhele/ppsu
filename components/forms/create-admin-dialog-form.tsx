"use client";

import { saveAdmin } from "@/lib/action/user";
import { AdminSchema, AdminType } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import InputTextController from "@/components/inputs/input-text-controller";
import { Button } from "@/components/ui/button";

const CreateAdminDialogForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<AdminType>({
    resolver: zodResolver(AdminSchema),
    defaultValues: {
      email: "",
      password: "ppsu1234",
    },
  });

  function onSubmit(data: AdminType) {
    console.log("submit data", data);

    startTransition(async () => {
      try {
        await saveAdmin(data);
        toast.success("Data admin berhasil disimpan!");
      } catch (error) {
        toast.error("Gagal menyimpan data admin.");
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputTextController title="Email" name="email" control={form.control} />

      <InputTextController
        name="password"
        title="Password"
        control={form.control}
        isDisabled
      />

      <Button>{isPending ? "Menyimpan..." : "Simpan"}</Button>
    </form>
  );
};

export default CreateAdminDialogForm;
