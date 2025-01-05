import React from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImage,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "../../assets/images";
import Image from "next/image";
import style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = React.useState<boolean>(true);
  const [image, setImage] = React.useState<boolean>(true);
  const [video, setVideo] = React.useState<boolean>(true);
  const [music, setMusic] = React.useState<boolean>(true);

  //function section
  const openFilter = () => {
    if(!filter){
        setFilter(true);
    }else{
        setFilter(false);
    }
  };
  const openImage = () => {
    if(!image){
        setImage(true);
    }else{
        setImage(false);
    }
  };
  const openVideo = () => {
    if(!video){
        setVideo(true);
    }else{
        setVideo(false);
    }
  };
  const openMusic = () => {
    if(!music){
        setMusic(true)
    }else{
        setMusic(false)
    }
  };

  return (
    <div className={style.filter}>
      <div className={style.filter_box}>
        <div className={style.filter_box_left}>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Musics</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photos</button>
        </div>
        <div className={style.filter_box_right}>
          <div className={style.filter_box_right_box} onClick={openFilter}>
            <FaFilter />
            <span>Filter</span>
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className={style.filter_box_items}>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <FaWallet /> <span>0.01 ETH - 10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={openImage}
            >
              <FaImage /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={openVideo}
            >
              <FaVideo /> <span>Videos</span>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={openMusic}
            >
              <FaMusic /> <span>Music</span>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <FaUserAlt /> <span>Verified</span>
              <MdVerified/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
