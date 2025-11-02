import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    include: { pegawai: true },
  });
};

export const getUserByRole = async (role: Role) => {
  try {
    return await prisma.user.findMany({
      where: { role },
      include: {
        pegawai: true,
      },
    });
  } catch (error) {
    console.error("Error fetching user by id:", error);
  }
};
