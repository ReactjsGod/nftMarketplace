import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "./Notification.module.css";
import { useRouter } from "next/navigation";
import images from "../../../assets/images";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="user image" width={50} height={50} className={Style.notification_box_img}/>
        </div>
        <div className={Style.notification_box_info}>
          <h4>Charly Archibald Dieudonne</h4>
          <p>Measure action your user....</p>
          <small>3 minutes ago</small>
          <label className={Style.notification_box_new}/>
        </div>
      </div>
    </div>
  );
};

export default Notification;
