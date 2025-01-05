'use client'

import React from 'react'
import Image from 'next/image';
import images from '../../assets/images';
import style from './NFTCard.module.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';

const NFTCard = () => {
    const featuredArrays = [1,2,3,4,5,6,7,8,9,10];
    const [like, setLike]=React.useState<boolean>(true);
    const likeNFT = ()=>{
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    }
  return (
    <div className={style.NFTCard}>
        {featuredArrays.map((el, i)=>(
            <div className={style.NFTCard_box} key={i+1}>
                <div className={style.NFTCard_box_img}>
                    <Image src={images.nft_1} alt='nft image' width={600} height={600} />

                </div>
                <div className={style.NFTCard_box_update}>
                    <div className={style.NFTCard_box_update_left}>
                        <div className={style.NFTCard_box_update_left_like} onClick={likeNFT}>
                            {like ? <AiFillHeart className='text-red-500'/> : <AiOutlineHeart/>}{" "}22
                        </div>
                    </div>
                    <div className={style.NFTCard_box_update_right}>
                        <div className={style.NFTCard_box_update_right_info}>
                            <small>Remaining time</small>
                            <p>3h: 15m:20s</p>
                        </div>
                    </div>
                </div>
                <div className={style.NFTCard_box_update_details}>
                    <div className={style.NFTCard_box_update_details_price}>
                        <div className={style.NFTCard_box_update_details_price_box}>
                            <h4>monkey NFTs</h4>
                            <div className={style.NFTCard_box_update_details_price_box_box}>
                                <div className={style.NFTCard_box_update_details_price_box_box_bid}>
                                    <small>Current Bid</small>
                                    <p>1.000 ETH</p>
                                </div>
                                <div className={style.NFTCard_box_update_details_price_box_stock}>
                                    <small>61 in stock</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.NFTCard_box_update_details_category}>
                        <BsImage/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCard