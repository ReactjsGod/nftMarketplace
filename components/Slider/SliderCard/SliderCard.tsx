import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "../../../assets/images";
import Style from "./SliderCard.module.css";
import LikeProfile from "../../LikeProfile/LikeProfile";

interface sliderCardProps {
  el: number;
  i: number;
}

const SliderCard = ({ el, i }: sliderCardProps) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.slider_box_img}>
          <Image
            src={images.creatorbackground1}
            alt="slider image"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT video #462</p>
          <div className={Style.sliderCard_box_title_like}>
            <LikeProfile />
            <small>1 of 100</small>
          </div>
        </div>
        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>current Bid</small> <p>1.00 ETH</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>remaining Time</small>
            <p>3h : 15m :20sec</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
