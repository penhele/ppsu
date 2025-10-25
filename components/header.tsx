const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="">
      <h1 className="font-medium text-xl">{title}</h1>
      <span className="text-base text-gray-400">{description}</span>
    </div>
  );
};

export default SectionHeader;
