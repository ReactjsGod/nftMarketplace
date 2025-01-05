import React, { useState } from "react";
import images from "../../assets/images";
import Style from "./Follower.module.css";
import { RiAwardLine, RiUserFollowFill } from "react-icons/ri";
import FollowerTabCard from "./Card/FollowerTabCard";

const Follower = () => {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const FollowingArray = [1, 2, 3, 4, 5, 6, 7];
  const NewsArray = [1, 2, 3, 4, 5, 6, 7];
  const [popular, setPopular] = React.useState<boolean>(true);
  const [following, setFollowing] = React.useState<boolean>(true);
  const [news, setNews] = React.useState<boolean>(true);

  const openPopluar = () => {
    if(!popular){setPopular(true)}else{setPopular(false)}
  };
  const openFollower = () => {
    if(!following){setFollowing(true)}else{setFollowing(false)}
  };
  const openNews = () => {
    if(!news){setNews(true)}else{setFollowing(false)}
  };

  return (
    <div className={Style.followerTab}>
    <div className={Style.followerTab_title}>
      <h2> Top Creators List..</h2>
      <div className={Style.followerTab_tabs}>
        <div className={Style.followerTab_tabs_btn}>
          <button onClick={() => openPopluar()}>
            <RiUserFollowFill /> Popular
          </button>
          <button onClick={() => openFollower()}>
            <RiUserFollowFill /> Following
          </button>
          <button onClick={() => openNews()}>
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>
    </div>

    {popular && (
      <div className={Style.followerTab_box}>
        {CardArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {following && (
      <div className={Style.followerTab_box}>
        {FollowingArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {news && (
      <div className={Style.followerTab_box}>
        {NewsArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    <div className={Style.followerTab_member}>
      <div className={Style.followerTab_member_box}>
        <a href="#">Show me more</a>
        <a href="#">Become, author</a>
      </div>
    </div>
  </div>
  );
};

export default Follower;
