import Header from "@/components/layout/Header";
import { SideNavbar } from "@/components/layout/SideNavbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // console.log(children);
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <SideNavbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
          <div className="flex flex-col">
            <div className="flex-1 space-y-4 md:p-8 h-screen">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
