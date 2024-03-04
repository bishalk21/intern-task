import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  color?: string;
  isChildren?: boolean;
  children?: NavItem[];
}
