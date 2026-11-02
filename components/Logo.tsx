import Image from "next/image";

type LogoProps = {
  className?: string;
  title?: string;
};

export default function Logo({
  className = "h-14 w-14 shrink-0 sm:h-16 sm:w-16",
  title = "The Bar Association Kattappana",
}: LogoProps) {
  return (
    <Image
      src="/assets/logo-white.png"
      alt={title}
      width={128}
      height={128}
      className={className}
      priority
      unoptimized
    />
  );
}
