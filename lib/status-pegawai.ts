// import { CutiStatus, PegawaiStatus } from "@prisma/client";
// import { prisma } from "./prisma";

// export const checkAndUpdatePegawaiStatus = async () => {
//   const now = new Date();

//   const pegawaiCuti = await prisma.pegawai.findMany({
//     where: {
//       status: PegawaiStatus.CUTI,
//       cuti: {
//         some: {
//           status: CutiStatus.DISETUJUI,
//           tanggal_selesai: { lt: now },
//         },
//       },
//     },
//     select: { id_pegawai: true },
//   });

//   const ids = pegawaiCuti.map((p) => p.id_pegawai);

//   await prisma.pegawai.updateMany({
//     where: { id_pegawai: { in: ids } },
//     data: { status: PegawaiStatus.AKTIF },
//   });

//   console.log(`✅ ${ids.length} pegawai dikembalikan ke status AKTIF`);
// };
