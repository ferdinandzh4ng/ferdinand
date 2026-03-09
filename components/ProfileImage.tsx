import Image from "next/image";
import { PROFILE_IMAGE_URL } from "@/content/profile";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
  /** Override image URL (e.g. per-page image). Defaults to main profile image. */
  src?: string;
}

const sizes = { sm: 120, md: 200, lg: 280 };

export function ProfileImage({
  size = "md",
  className = "",
  priority = false,
  src = PROFILE_IMAGE_URL,
}: ProfileImageProps) {
  const px = sizes[size];
  return (
    <Image
      src={src}
      alt="Ferdinand"
      width={px}
      height={px}
      priority={priority}
      className={`rounded-full object-cover ${className}`}
      sizes={`(max-width: 768px) ${sizes.sm}px, ${px}px`}
    />
  );
}
