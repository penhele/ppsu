import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const pegawaiData = Array.from({ length: 15 }).map(() => ({
    nama: faker.person.fullName(),
    tempat_lahir: faker.location.city(),
    tanggal_lahir: faker.date.birthdate({ min: 1970, max: 2000, mode: "year" }),
    alamat: faker.location.streetAddress(),
    rt: faker.number.int({ min: 1, max: 10 }).toString(),
    rw: faker.number.int({ min: 1, max: 10 }).toString(),
    kelurahan: faker.location.city(),
    kecamatan: faker.location.county(),
    kota: faker.location.city(),
    provinsi: faker.location.state(),
    no_telepon: `62${faker.string.numeric(10)}`,
    no_ktp: faker.string.numeric(16),
    npwp: faker.string.numeric(15),
    no_rekening: faker.finance.accountNumber(10),
    bank_dki_cabang: faker.location.city(),
    pendidikan: faker.helpers.arrayElement(["SD", "SMP", "SMA"]),
    jenis_pekerjaan: faker.helpers.arrayElement(["PETUGAS_PPSU"]),
  }));

  await prisma.pegawai.createMany({ data: pegawaiData });
  console.log(`✅ Berhasil menambahkan ${pegawaiData.length} data pegawai`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
