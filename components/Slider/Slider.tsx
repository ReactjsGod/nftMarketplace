import React from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";

interface SliderProp {
    direction:string;
}

const Slider = () => {
    const drapSlider = React.useRef<HTMLDivElement>(null);
    const [width, setWidth] = React.useState(0);
  
    const sliderArray = [1, 2, 3, 4, 5, 6];
  
    const handleScroll = ({ direction }: SliderProp) => {
      const { current } = drapSlider;
  
      if (current) {
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
        if (direction === 'left') {
          current.scrollLeft -= scrollAmount;
        } else {
          current.scrollLeft += scrollAmount;
        }
      }
    };
  
    React.useEffect(() => {
      if (drapSlider.current) {
        setWidth(drapSlider.current.scrollWidth - drapSlider.current.offsetWidth);
      }
    }, []);
  
    return (
      <div className={Style.slider}>
        <div className={Style.slider_box}>
          <h2>Explore NFTs video</h2>
          <div className={Style.slider_box_button}>
            <p>Click on play icon & enjoy</p>
            <div className={Style.slider_box_button_btn}>
              <div className={Style.slider_box_button_btn_icon}>
                <TiArrowLeftThick onClick={() => handleScroll({ direction: "left" })} />
              </div>
              <div className={Style.slider_box_button_btn_icon}>
                <TiArrowRightThick onClick={() => handleScroll({ direction: "right" })} />
              </div>
            </div>
          </div>
          <motion.div className={Style.slider_box_items} ref={drapSlider}>
            <motion.div
              className={Style.slider_box_item}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {sliderArray.map((el, i) => (
                <SliderCard key={i + 1} el={el} i={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Slider;
