import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Semua Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="semua-status">Semua Status</SelectItem>
          <SelectItem value="aktif">Aktif</SelectItem>
          <SelectItem value="sedang-cuti">Sedang Cuti</SelectItem>
          <SelectItem value="tidak-aktif">Tidak Aktif</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusSelect;
