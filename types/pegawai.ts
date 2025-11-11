import { Prisma } from "@prisma/client";
import { CutiStatus, Role } from "@prisma/client";

export type PegawaiProps = Prisma.PegawaiGetPayload<{
  include: {
    cuti: true;
    user: true;
  };
}>;
