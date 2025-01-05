import React from "react";
import Link from "next/link";
import Style from "./HelpCenter.module.css";
import { useRouter } from "next/navigation";

const HelpCenter = () => {
  const router = useRouter();
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
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div key={i} className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
