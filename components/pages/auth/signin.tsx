import SigninForm from "@/components/forms/singin-form";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Signin = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <SigninForm />
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <p>akun : admin@ppsu.com (admin)</p>
        <p>akun : ahmad@ppsu.com (pegawai)</p>
        <p>akun : alya@ppsu.com (pegawai)</p>
        <p>akun : regina@ppsu.com (pegawai)</p>
        <p>akun : prabu@ppsu.com (pegawai)</p>
        <p>akun : hafizh@ppsu.com (pegawai)</p>
        <p>akun : stephen@ppsu.com (pegawai)</p>
        <p>password : ppsu1234</p>
      </CardFooter>
    </Card>
  );
};

export default Signin;
