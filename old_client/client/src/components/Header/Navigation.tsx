import React from "react";
import { NavItem } from "./NavItem";

const navItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Me" },
  { path: "projects", title: "Projects" },
  { path: "awards-achievements", title: "Awards & Achievements" },
  { path: "endorsements", title: "Endorsements" },
  { path: "gallery", title: "Gallery" },
  { path: "contact", title: "Contact" },
];

export const Navigation: React.FC = () => (
  <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
    <ul className="flex flex-wrap gap-10">
      {navItems.map((item, index) => (
        <NavItem key={index} path={item.path} text={item.title} />
      ))}
    </ul>
  </nav>
);
