import React from "react";
import cloud from "../../../assets/cluade.svg";
import Smartphone from "../../../assets/mobile.svg";
import QrCode from "../../../assets/faster.svg";
import Bell from "../../../assets/autmic.svg";
import Printer from "../../../assets/print.svg";
import FileText from "../../../assets/quotation.svg";
import Building from "../../../assets/multiTask.svg";
import Settings from "../../../assets/multiTask.svg";

import FeatureCard from "./FeatureCard";
const featuresData = [
  {
    id: 1,
    title: "Cloud Based Access",
    description: "Real-time access and synchronization across devices.",
    icon: cloud,
  },
  {
    id: 2,
    title: "Mobile Access",
    description:
      "Manage accounting tasks beyond invoicing, including e-way bills and purchases.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Faster Payments",
    description: "QR code integration for instant payments.",
    icon: QrCode,
  },
  {
    id: 4,
    title: "Automated Reminders",
    description: "Set up automated WhatsApp reminders for payments.",
    icon: Bell,
  },
  {
    id: 5,
    title: "Advanced User Management",
    description: "Assign roles with limited access and manage multiple users.",
    icon: Settings,
  },
  {
    id: 6,
    title: "Enhanced Printing Options",
    description: "Support for bar-code scanning, thermal and A5 printing.",
    icon: Printer,
  },
  {
    id: 7,
    title: "Quotation and Estimation",
    description: "Easily create and convert quotations to invoices.",
    icon: FileText,
  },
  {
    id: 8,
    title: "Multi-Company Management",
    description: "Manage multiple companies from one place seamlessly.",
    icon: Building,
  },
];
const FeatureCardsGrid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 xl:gap-10 px-5 ">
      {featuresData.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};
export default FeatureCardsGrid;
