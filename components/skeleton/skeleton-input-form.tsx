import { SkeletonLabel, SkeletonInput } from "@/components/skeleton/skeleton";

const SkeletonInputForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonLabel />
      <SkeletonInput />
    </div>
  );
};

export default SkeletonInputForm;
