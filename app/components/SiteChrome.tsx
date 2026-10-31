
"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type SiteChromeProps = {
  children: ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();

  const paginaExclusiva =
    pathname === "/addrianakleinterapias" ||
    pathname.startsWith("/addrianakleinterapias/") ||
    pathname === "/seunome" ||
    pathname.startsWith("/seunome/") ||
    pathname === "/desafio" ||
    pathname.startsWith("/desafio/") ||
    pathname === "/desafios" ||
    pathname.startsWith("/desafios/") ||
    pathname === "/challenges" ||
    pathname.startsWith("/challenges/");

  if (paginaExclusiva) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">{children}</div>
      <SiteFooter />
    </>
  );
}
