import React from "react";
import Image from "next/image";
import images from "../../assets/images";
import style from "./Category.module.css";
import { BsCCircleFill } from "react-icons/bs";

const Category = () => {
  const categoryArray = [1, 2, 3, 4, 5,6];
  return (
    <div className={style.box_category}>
        <div className={style.category}>
      {categoryArray.map((el, i) => (
        <div key={i + 1} className={style.category_box}>
          <Image
            className={style.category_box_img}
            src={images.creatorbackground1}
            alt="bg-image"
            width={350}
            height={150}
            objectFit="cover"
          />
          <div className={style.category_box_title}>
            <span>
              <BsCCircleFill />
            </span>
            <div className={style.category_box_title_info}>
                <h4>Entertainment</h4>
                <small>1995 NFTS</small>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Category;
