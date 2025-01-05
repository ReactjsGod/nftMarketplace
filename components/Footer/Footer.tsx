import React from "react";
//Internal import
import Style from "./Footer.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutubeCircular,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../assets/images";
import { Discover, HelpCompnent } from "../Navbar";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`select-none ${Style.footer}`}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="logo" width={100} height={100} />
          <p>
            The world's first and largested digital Margetplace for non-fungible
            tokens (NFTs) and physical products, Buy, Sell, and discover
            exclusive products and NFTs
          </p>
          <div className={Style.footer_social}>
            <a href="#" className="hover:text-blue-500">
              <TiSocialFacebook />
            </a>
            <a href="#" className="hover:text-blue-500">
              <TiSocialLinkedin/>
            </a>
            <a href="#" className="hover:text-blue-500">
              <TiSocialTwitter/>
            </a>
            <a href="#" className="hover:text-red-500">
              <TiSocialYoutubeCircular/>
            </a>
            <a href="#" className="hover:text-[#E1306C]">
              <TiSocialInstagram/>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCompnent />
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email address *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and Sell, extraordinary NFTs openSea is the
              first and largest NFT Marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
