import { Prisma } from "@prisma/client";

export type CutiProps = Prisma.CutiGetPayload<{
  include: {
    Pegawai: true;
  };
}>;
