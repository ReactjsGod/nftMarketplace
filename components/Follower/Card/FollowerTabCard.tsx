import React from "react";
import { IndexType } from "typescript";
import Style from "./FollowerTabCard.module.css";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import images from "../../../assets/images";

interface FollowerTabCardProps {
  el: number;
  i: number;
}

const FollowerTabCard = ({ el, i }: FollowerTabCardProps) => {
  const [following, setFollowing] = React.useState<boolean>();
  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className={Style.FollowerTabCard}>
    <div className={Style.FollowerTabCard_rank}>
      <p>
        #{i + 1} <span>🥇</span>
      </p>
    </div>

    <div className={Style.FollowerTabCard_box}>
      <div className={Style.FollowerTabCard_box_img}>
        <Image
          className={Style.FollowerTabCard_box_img_img}
          src={images.creatorbackground1}
          alt="profile braground"
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>

      <div className='w-20 h-20 absolute left-1/2 right-1/2 bg-white rounded-full'>
        <div className="flex justify-center items-center w-full h-full">
          <Image
          className={'rounded-full mx-auto z-10'}
          alt="profile picture"
          width={50}
          height={50}
          src={images.user1}
        />  
        </div>
        
      </div>

      <div className={Style.FollowerTabCard_box_info}>
        <div className={Style.FollowerTabCard_box_info_name}>
          <h4>
            Giada Mann{""}{" "}
            <span>
              <MdVerified />
            </span>
          </h4>
          <p>12.321 ETH</p>
        </div>

        <div className={Style.FollowerTabCard_box_info_following}>
          {following ? (
            <a onClick={() => followMe()}>
              Follow{""}{" "}
              <span>
                <TiTick />
              </span>
            </a>
          ) : (
            <a onClick={() => followMe()}>Following</a>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default FollowerTabCard;
