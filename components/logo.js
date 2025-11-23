import Image from "next/image";
import LogoImage from "@/public/logo-digital-synk.png";

export default function Logo() {
  return (
    <Image
      src={LogoImage}
      alt="Digital Synk Logo"
      width={200}
      height={200}
      className="object-contain"
      priority
    />
  );
}
