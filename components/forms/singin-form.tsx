"use client";

import InputTextController from "@/components/inputs/input-text-controller";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { SigninSchema, SigninType } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

const SigninForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

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
        router.push("/dashboard");
      }
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputTextController
        title="Email"
        name="email"
        control={form.control}
        placeholder="Email"
      />
      <InputTextController
        title="Password"
        name="password"
        control={form.control}
        placeholder="Password"
        isPassword
      />

      <Button className="w-full">
        {isPending ? (
          <div className="flex gap-2 items-center">
            <Spinner />
            <span>Logging in...</span>
          </div>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default SigninForm;
