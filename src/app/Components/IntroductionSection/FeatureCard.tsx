import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: StaticImageData;
}
const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="w-[306px] h-[330.59px] flex-shrink-0 flex-grow-0 shadow-[0px_4px_4px_0px_#00000040] bg-[#0F0E1E] backdrop-blur-sm border border-[#1B1F2F] rounded-[15px] px-[41px] pt-[64px] pb-[61px] flex flex-col gap-6 items-start justify-start text-white sm:px-8 sm:pt-10 sm:pb-10">
      <div className="mb-8">
        <Image
          width={30.63}
          height={35}
          src={feature.icon}
          alt={feature.description}
        />
      </div>
      <h3 className="text-[22px] font-medium leading-[28.6px] tracking-[-0.01em] mb-4">
        {feature.title}
      </h3>
      <p className="text-[15px] font-normal leading-[23px] text-gray-300">
        {feature.description}
      </p>
    </div>
  );
};
export default FeatureCard;
