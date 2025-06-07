import React from "react";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/ft_shape1.png.png";
import Image from "next/image";
export default function FeatureShape() {
  return (
    <>
      <div className="absolute left-0 top-4/5 transform -translate-y-1/2 z-10">
        <div className="w-fit">
          <Image
            src={shape2}
            width={77}
            height={101}
            alt="this is icon display in left of Feature Card"
          />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-fit">
          <Image
            src={shape1}
            width={77}
            height={101}
            alt="this is icon display in right of Feature Card"
          />
        </div>
      </div>
    </>
  );
}
