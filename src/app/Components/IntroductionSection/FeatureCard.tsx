import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: StaticImageData;
}
const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="w-full max-w-[306px]  h-auto min-h-[330.59px] flex-shrink-0 shadow-[0px_4px_4px_0px_#00000040] bg-[#0F0E1E] backdrop-blur-sm border border-[#1B1F2F] rounded-[15px] p-6 sm:p-8 lg:px-10 lg:pt-12 lg:pb-12 flex flex-col gap-4 sm:gap-6 items-start justify-start text-white ">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <Image
          width={3.63}
          height={35}
          src={feature.icon}
          alt={feature.description}
          className="w-8 h-9 sm:w-[30.63px] sm:h-[35px]"
        />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-[-0.01em] mb-2 sm:mb-4">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-gray-300 flex-grow">
        {feature.description}
      </p>
    </div>
  );
};
export default FeatureCard;
