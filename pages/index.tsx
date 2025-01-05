import React from "react";
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  Follower,
  AudioLive,
  Slider
} from "../components/index";

const Home = () => {
  return (
    <div className={`cursor-default select-none ${Style.homePage}`}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        head="New Collection"
        p="Discover the most outstanding NFTs in all topics of life."
      />
     <AudioLive/> 
      <Title
        head="Latest Audio Collections"
        p="Brows the best available audio collection"
      />
      <Follower/>
      <Slider />
      <Collection />
      <Title
        head={"Filter NFTs"}
        p={"Discover the most outstanding NFTs in all topics of life."}
      />
      <Filter />
      <NFTCard/>
      <Title
        head={"Search by Category"}
        p={"Explore the NFTs in the most featured Categories"}
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
