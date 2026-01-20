"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type BackgroundWrapperProps = {
  children: ReactNode;
};

export default function BackgroundWrapper({
  children,
}: BackgroundWrapperProps) {
  const pathname = usePathname();
  const isExperienceRoute = pathname?.startsWith("/experience");
  const backgroundClass = isExperienceRoute ? "bg-secondary bg-app" : "bg-app";

  return <div className={`min-h-screen ${backgroundClass}`}>{children}</div>;
}
