import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background p-4 pt-16 pb-12 space-y-8 sm:px-8 md:pb-8 md:pr-4 lg:px-10 text-lg text-primary xl:pb-12 xl:pt-24 xl:pl-20 2xl:pl-32 2xl:pt-32">
      {/* Logo */}
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 md:grid-cols-6 md:gap-x-4 lg:grid-cols-11 lg:gap-x-0">
        <div className="col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-3">
          <Image src={Logo} alt="Comfy logo" width={130} quality={100} />
          <div className="flex gap-4 my-4 text-3xl">
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineTwitter />
          </div>
          {/* Address */}
          <div className="space-y-4">
            <h6 className="font-bold">Address</h6>
            <address className="not-italic space-y-2">
              <div>+123 654 987</div>
              <div>877 The Bronx, NY</div>
              <div>14568, USA</div>
            </address>
          </div>
        </div>
        {/* Shop */}
        <div className="space-y-6 sm:order-3 lg:col-span-2">
          <h6 className="font-bold">Shop</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/">All Products</Link>
            </li>
            <li>
              <Link href="/">Bedroom</Link>
            </li>
            <li>
              <Link href="/">Dining Room</Link>
            </li>
          </ul>
        </div>
        {/* My Account */}
        <div className="space-y-6 sm:order-1 lg:col-span-2">
          <h6 className="font-bold">My Account</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/">Sign in</Link>
            </li>
            <li>
              <Link href="/">Register</Link>
            </li>
            <li>
              <Link href="/">Order Status</Link>
            </li>
          </ul>
        </div>
        {/* Help */}
        <div className="space-y-6 sm:order-2 lg:col-span-2">
          <h6 className="font-bold">Help</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/">Shipping</Link>
            </li>
            <li>
              <Link href="/">Returns</Link>
            </li>
            <li>
              <Link href="/">Sizing</Link>
            </li>
          </ul>
        </div>
        {/* Legal Stuff */}
        <div className="space-y-6 sm:order-4 lg:col-span-2">
          <h6 className="font-bold">Legal Stuff</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy & Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <p className="text-center text-base sm:text-left">
        Copyright ©2020 COMFY. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
