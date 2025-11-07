"use server";

import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/utils/password";
import { AdminType } from "@/lib/zod";
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

    revalidatePath("/dashboard/pengaturan");

    return { success: true, message: "Data admin berhasil disimpan!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Gagal menyimpan data admin." };
  }
};
