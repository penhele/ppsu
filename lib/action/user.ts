"use server";

import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/utils/password";
import { AdminType } from "@/lib/zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const saveAdmin = async (data: AdminType) => {
  const hashedPassword = await hashPassword(data.password);

  try {
    await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: Role.ADMIN,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/pengaturan");
  redirect("/dashboard/pengaturan");
};
