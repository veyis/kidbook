import Image from "next/image";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import path from "path";
import { p } from "framer-motion/client";


function Header() {

    const MenuList = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Blog",
            path: "/blog"
        },

    ]



  return (
    <Navbar maxWidth="full" >
      <NavbarContent>
        <NavbarBrand>
          <Image src={'/logo.svg'} alt="Logo" width={40} height={40} />
          <h2 className="font-bold text-2xl text-primary ml-3">Story Book</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" >
        {MenuList.map((item, index) => (
            <NavbarItem className="text-xl text-primary font-medium hover:underline mx-2" key={index}>
                <Link href={item.path
                }>{item.name}</Link>
            </NavbarItem>
        ))}
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem >
                <Button color="primary" >Get Started</Button>
            </NavbarItem>
            {/* <NavbarItem>
                <Link href="/register">Register</Link>
            </NavbarItem> */}
        </NavbarContent>



    </Navbar>
  );
}

export default Header;