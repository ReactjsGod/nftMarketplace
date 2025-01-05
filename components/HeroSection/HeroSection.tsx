import React from 'react'
import Style from './HeroSection.module.css'
import Image from 'next/image'
import {Button} from '../index'
import images from '../../assets/images'


const HeroSection = () => {
    const DiscoverClick = () => {

    }
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Discover collect, and sell NFTs</h1>
                <p>Discover the most outstanding NFTs and all your favorite products all in one place</p>
                <Button btnText={'Discover'} handleClick={DiscoverClick}/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} alt='hero image' width={600} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection