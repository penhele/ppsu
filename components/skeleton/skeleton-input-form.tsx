import { SkeletonLabel, SkeletonInput, SkeletonTitle } from "./skeleton";

const SkeletonInputForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonLabel />
      <SkeletonInput />
    </div>
  );
};

export default SkeletonInputForm;
