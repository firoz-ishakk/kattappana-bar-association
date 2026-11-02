import Image from "next/image";

const variants = {
  white: "/assets/logo-white.png",
  black: "/assets/logo-black.png",
  green: "/assets/logo-green.png",
} as const;

type LogoProps = {
  variant?: keyof typeof variants;
  className?: string;
  title?: string;
};

export default function Logo({
  variant = "white",
  className = "h-14 w-14 shrink-0 sm:h-16 sm:w-16",
  title = "The Bar Association Kattappana",
}: LogoProps) {
  return (
    <Image
      src={variants[variant]}
      alt={title}
      width={128}
      height={128}
      className={className}
      priority
      unoptimized
    />
  );
}
