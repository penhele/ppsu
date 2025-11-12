import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {StatusBadge} from "@/components/status-badge"; 
import { User } from "lucide-react"; 

type ProfileCardProps = {
  user: {
    name: string;
    status: string; 
  };
};

const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export const ProfileSidebarCard = ({ user }: ProfileCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">Pegawai</p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
          <DetailRow 
            label="Status" 
            value={<StatusBadge status={user.status} />} 
          />
        </div>
      </CardContent>
    </Card>
  );
};