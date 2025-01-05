import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutubeCircular,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import Style from "./Sidebar.module.css";
import images from "../../../assets/images";
import Button from "../../Button/Button";

const Sidebar = ({ setOpenSideMenu }: any) => {
  const [openDiscover, setOpenDiscover] = React.useState(false);
  const [openHelp, setOpenHelp] = React.useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "Search",
    },
    {
      name: "NFT Details",
      link: "NFT-Details",
    },
    {
      name: "Account Details",
      link: "Account-Details",
    },
    {
      name: "Account Settings",
      link: "Account-Settings",
    },
    {
      name: "Connect Wallet",
      link: "Connect-Wallet",
    },
    {
      name: "Blog",
      link: "Blog",
    },
  ];
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
    {
      name: "Sign up",
      link: "signup",
    },
    {
      name: "Sign in",
      link: "signin",
    },
    {
      name: "Subscribe",
      link: "subscribe",
    },
  ];

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };
  const openDiscoverMenu = () => {
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
  };
  const openHelpMenu = () => {
    if(!openHelp){
      setOpenHelp(true);
    }else{
      setOpenHelp(false);
    }
  };

const handleBtnCreate = () =>{}
  const handleBtnWallet = () =>{}

  return (
    <div className={Style.SideBar}>
      <GrClose
        className={Style.SideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.SideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover the most outstanding topics on NFTs</p>
        <div className={Style.SideBar_social}>
          <a href="#">
            <TiSocialFacebook className="hover:text-blue-500" />
          </a>
          <a href="#">
            <TiSocialLinkedin className="hover:text-blue-500"/>
          </a>
          <a href="#">
            <TiSocialTwitter className="hover:text-blue-500"/>
          </a>
          <a href="#">
            <TiSocialYoutubeCircular className="hover:text-red-500"/>
          </a>
          <a href="#">
            <TiSocialInstagram className="hover:text-[#E1306C]"/>
          </a>
        </div>
      </div>
      <div className={Style.SideBar_menu}>
        <div>
          <div
            className={Style.SideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            {openDiscover ? <TiArrowSortedUp/> :<TiArrowSortedDown />}
          </div>
          {openDiscover && (
            <div className={Style.SideBar_discover}>
              {discover.map((el, i) => (
                <p key={i+1}>
                  <Link href={{pathname: `${el.link }`}}>
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className={Style.SideBar_menu_box} onClick={()=>openHelpMenu()}>
            <p>Help Center </p>
            {openHelp ? <TiArrowSortedUp/> :<TiArrowSortedDown/>}
          </div>
          {openHelp && (
            <div className={Style.SideBar_discover}>
              {helpCenter.map((el, i)=>(
                <p key={i+1}>
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div> 
      <div className={Style.SideBar_button}>
        <Button btnText={`Create`} handleClick={handleBtnCreate}/>
        <Button btnText={`Connect Wallet`}handleClick={handleBtnWallet}/>
      </div>
    </div>
  );
};

export default Sidebar;
