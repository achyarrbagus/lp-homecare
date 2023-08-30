"use client";

import React from "react";
import Head from "next/head";
// import Header from "./Header";
import { Button, Navbar } from "flowbite-react";
// import NavbarFlow from "@/components/Navbar";

function Layout({
  title,
  back,
  keywords,
  description,
  children,
  headerAction,
}: any) {
  return (
    <>
      <div className="flex flex-col  max-w-layout mx-auto min-h-screen overflow-hidden">
        <div style={{ width: "100%" }} className="fixed mx-auto">
          {/* <NavbarFlow /> */}
        </div>
        <main
          className="w-full mx-auto h-auto"
          style={{
            height: "290vh",
            marginTop: "10px",
            backgroundColor: "rgb(236 250 248)",
          }}
        >
          <div className="flex flex-col justify-center">{children}</div>
        </main>
      </div>
    </>
  );
}

export default Layout;
