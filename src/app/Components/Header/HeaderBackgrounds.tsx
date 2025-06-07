import Image from "next/image";
import leftBackground from "../../../assets/leftBackground.png";
import rightBackground from "../../../assets/rightBackground.png";
import rightImage from "../../../assets/rightImage.png";
import leftImage from "../../../assets/leftImage.png";
import backgroundHeroSection from "../../../assets/heroSection.png";

export default function HeaderBackgrounds() {
  return (
    <>
      <div className="absolute left-0 top-0 z-0">
        <div className="absolute w-[800px] sm:w-[1000px] lg:w-[1274px] h-[600px] sm:h-[800px] lg:h-[1054px] top-[80px] sm:top-[100px] lg:top-[126px] -left-[200px] sm:-left-[300px] lg:-left-[499px] z-0">
          <Image
            src={leftBackground}
            alt="Left background"
            fill
            style={{ objectFit: "cover", pointerEvents: "none" }}
            priority
          />
        </div>
        <div className="absolute w-[40px] sm:w-[120px] lg:w-[154px] h-[80px] sm:h-[120px] lg:h-[154px] top-[400px] sm:top-[500px] lg:top-[673px] left-[15px] sm:left-[35px] lg:left-[52px] z-10 block">
          <Image
            src={rightImage}
            alt="Left small image"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 z-0">
        <div className="absolute w-[600px] sm:w-[800px] lg:w-[970px] h-[600px] sm:h-[750px] lg:h-[949px] top-[150px] sm:top-[200px] lg:top-[275px] right-[-200px] sm:right-[-300px] lg:right-[-458px] z-0">
          <Image
            src={rightBackground}
            alt="Right background"
            fill
            style={{ objectFit: "cover", pointerEvents: "none" }}
            priority
          />
        </div>
        <div className="absolute w-[40px] sm:w-[80px] lg:w-[104px] h-[60px] sm:h-[80px] lg:h-[104px] top-[380px] sm:top-[480px] lg:top-[625px] right-[10px] sm:right-[35px] lg:right-[165px] z-10  ">
          <Image
            src={leftImage}
            alt="Right small image"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      <div className=" absolute  w-full  s h-[600px] sm:h-[800px] lg:h-[1077px] -top-[30px] sm:-top-[40px] lg:-top-[53px] left-1/2 transform -translate-x-1/2 z-0">
        <Image
          src={backgroundHeroSection}
          alt="Background"
          layout="fill"
          objectFit="contain"
          priority={true}
          style={{ pointerEvents: "none" }}
        />
      </div>
    </>
  );
}
