"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../../../public/logo.png";
import { navbar } from "./data";
import Button from "../ui/Button";
export default function MobileSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="lg:hidden flex items-center justify-between w-full px-4 py-4">
        <div>
          <Image
            src={logo}
            width={150}
            height={27}
            alt="HisabKitab logo"
            priority
          />
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 text-white hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer"
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>
      {isMenuOpen && (
        <nav>
          <div
            className="fixed inset-0 bg-black/30 text-white z-[60]"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[300px] bg-[#090420] z-[61] p-4 space-y-6 shadow-xl">
            <div className="flex justify-between items-center">
              <Image
                alt="HisabKitab logo"
                src={logo}
                className="object-cover"
                width={150}
                height={32}
                priority
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 transition-colors duration-200 hover:cursor-pointer"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <ul>
                {navbar.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.Link}
                      className="flex items-center justify-between py-3 hover:cursor-pointer text-white hover:text-blue-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-[18px] font-medium">
                        {item.name}
                      </span>
                      {item.icon && (
                        <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4">
              <Button variant="login" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
