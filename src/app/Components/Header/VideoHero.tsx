import Image from "next/image";
import videoBackground from "../../../assets/video.png";
import bottomVideo from "../../../assets/bottomVideo.png";
import bottomVideoTow from "../../../assets/bottomvideotow.png";
import Heading from "../ui/Heading";

export default function VideoHero() {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="absolute -top-1/5 left-0 -z-10 w-full h-full">
        <Image
          src={videoBackground}
          alt="Video background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative flex flex-col items-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="relative flex flex-col w-[280px] sm:w-[400px] md:w-[600px] lg:w-[878px] h-[180px] sm:h-[250px] md:h-[380px] lg:h-[557px] items-center justify-center rounded-[16px] bg-[#0F0E1E] p-4 sm:p-6 z-10">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Video Here
          </h2>
        </div>
        <div className="absolute -bottom-[40%]">
          <Image
            src={bottomVideoTow}
            alt="Small bottom video"
            width={280}
            height={175}
            className="sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[375] lg:w-[886px] lg:h-[552.6px]"
          />
        </div>
      </div>
      <div className="-translate-y-16">
        <Image
          src={bottomVideo}
          alt="Small bottom video"
          width={986}
          height={552.6}
          className="w-[300px]  sm:w-[420px] s md:w-[650px] ] lg:w-[986px] h-[220.6px] -translate-y-10"
        />
      </div>
      <div className="-translate-y-16">
        <Heading level="h2">
          <span className="block text-white">Meet hisabkitab</span>
          <span className="block bg-gradient-to-t from-[#2A2355] to-white bg-clip-text text-transparent">
            Not Just{" "}
            <span className="font-semibold">Another Accounting Software</span>
          </span>
        </Heading>
      </div>
    </div>
  );
}
//   return (
//     <div className="relative flex flex-col items-center justify-center ">
//       <div className="absolute -top-1/5 left-0 -z-10 w-full h-full">
//         <Image
//           src={videoBackground}
//           alt="Video background"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       <div className="relative flex flex-col items-center mt-24">
//         <div className="relative flex flex-col w-[878px] h-[557px] items-center justify-center rounded-[16px] bg-[#0F0E1E] p-6 z-10">
//           <h2 className="text-white text-3xl font-semibold">Video Here</h2>
//         </div>
//         <div className=" absolute -bottom-[40%]">
//           <Image
//             src={bottomVideoTow}
//             alt="Small bottom video"
//             width={886}
//             height={552.6}
//           />
//         </div>
//       </div>
//       <div className="-translate-y-16">
//         <Image
//           src={bottomVideo}
//           alt="Small bottom video"
//           width={986}
//           height={552.6}
//         />
//       </div>
//       <div  className="-translate-y-14">
//         <Heading level="h2">
//         <span className="block text-white">Meet hisabkitab</span>
//         <span className="block bg-gradient-to-t from-[#2A2355] to-white bg-clip-text text-transparent">
//           Not Just{" "}
//           <span className="font-semibold">Another Accounting Software</span>
//         </span>
//       </Heading>
//       </div>
//     </div>
//   );
// }

//  <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
//       <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
