"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";

function Header({ headerTitle, headerBack, headerAction, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hello world" />
        <meta name="keywords" content="hello world" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <header
        className="fixed top-0 left-0 w-full h-14 z-30"
        style={{ maxWidth: "480px" }}
      >
        <div className="container mx-auto  flex flex-row justify-center items-center h-full bg-primary-700">
          <div>
            <h1>menu 1</h1>
          </div>
          <div className="w-6/12">
            <h2>menu 2</h2>
          </div>
          <div className="w-3/12"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
