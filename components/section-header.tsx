import dynamic from "next/dynamic";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <h1 className="font-medium text-xl">{title}</h1>
      <span className="text-base text-gray-600">{description}</span>
    </div>
  );
};

export default SectionHeader;
