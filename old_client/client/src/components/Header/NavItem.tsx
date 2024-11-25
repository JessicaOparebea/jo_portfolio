import Link from "next/link";
import React from "react";

type NavItemProps = {
  path: string;
  text: string;
};

export const NavItem: React.FC<NavItemProps> = ({ path, text }) => (
  <Link href={path} className="self-stretch my-auto">
    {text}
  </Link>
);
