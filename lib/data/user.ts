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
    const result = await prisma.user.findMany({
      where: { role },
    });

    return result;
  } catch (error) {
    console.error("Error fetching user by id:", error);
  }
};

export const getAdminBySessionId = async (sessionId: string) => {
  return await prisma.user.findFirst({
    where: {
      id: sessionId,
      role: Role.ADMIN,
    },
    include: { pegawai: true },
  });
};
