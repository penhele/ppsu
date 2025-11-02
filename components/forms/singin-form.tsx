"use client";

import InputTextController from "../inputs/input-text-controller";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { SigninSchema, SigninType } from "@/lib/zod";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const SigninForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SigninType) => {
    startTransition(async () => {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Email atau password salah.");
      } else {
        toast.success("Login berhasil!");
        redirect("/");
      }
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputTextController title="Email" name="email" control={form.control} />
      <InputTextController
        title="Password"
        name="password"
        control={form.control}
      />

      <Button className="w-full">
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default SigninForm;
