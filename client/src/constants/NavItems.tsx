import { NavItem } from "@/types";
import { HandHelping, LayoutDashboard, UsersIcon } from "lucide-react";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Features",
    icon: HandHelping,
    url: "/features",
    isChildren: true,
    children: [
      {
        title: "Users",
        icon: UsersIcon,
        url: "/users",
      },
    ],
  },
];
