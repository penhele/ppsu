import { Card, CardContent } from "./ui/card";

const InformasiCutiPegawai = () => {
  const totalJatah = 12;
  const terpakai = 4;
  const sisa = totalJatah - terpakai;
  return (
    <Card className="shadow-md border h-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">Informasi Cuti</h3>
        <p className="text-sm text-gray-500 mb-5">
          Status dan informasi cuti Anda
        </p>

        {/* Detail Cuti */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Jatah Cuti Tahunan</span>
            <span className="font-semibold text-gray-800">
              {totalJatah} hari
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cuti Terpakai</span>
            <span className="font-semibold text-blue-600">{terpakai} hari</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sisa Cuti</span>
            <span className="font-semibold text-gray-800">{sisa} hari</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InformasiCutiPegawai;
