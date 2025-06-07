"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import logo from "../../../../public/logo.png";
import { navbar } from "./data";
import Button from "../ui/Button";
import MobileSidebar from "./MobileSidebar";
export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:flex items-center justify-between text-[16px] pt-[18px] ">
        <Image
          src={logo}
          width={258}
          height={37}
          alt="HisabKitab logo"
          className="
      lg:ml-8 xl:ml-16 2xl:ml-44
      lg:w-[180px] xl:w-[220px] 2xl:w-[258px]
      lg:h-[26px] xl:h-[32px] 2xl:h-[37px]
    "
          priority
        />
        <div className="flex items-center lg:space-x-4 xl:space-x-6 2xl:space-x-8">
          <ul
            className="
      flex items-center py-[35px] text-white   font-medium
      lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px]
    "
          >
            {navbar.map((item) => (
              <li
                key={item.id}
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <span className="lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  {item.name}
                </span>
                {item.icon && (
                  <ChevronDown
                    className="
                  ml-1 
                  lg:w-[8px] lg:h-[18px] 
                  xl:w-[9px] xl:h-[20px] 
                  2xl:w-[10.73px] 2xl:h-[22px]
                "
                    strokeWidth={4.5}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:me-[60px] xl:me-[180px] 2xl:me-[317px]">
          <Button
            variant="login"
            className="lg:scale-75 xl:scale-90 2xl:scale-100"
          />
        </div>
      </nav>
      <MobileSidebar />
    </>
  );
}
