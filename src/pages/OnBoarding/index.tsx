import clsx from "clsx";
import { memo, useRef, useState } from "react";
import style from "./index.module.scss";
import Logo from "../../components/common/logo";
import { useMount } from "ahooks";
import { Swiper } from "antd-mobile";
import oneImg from "./../../assets/img/Onboard/onBoardImage-one.png";
import twoImg from "./../../assets/img/Onboard/onBoardImage-two.png";
import threeImg from "./../../assets/img/Onboard/onBoardImage-three.png";
import { useNavigate } from "react-router-dom";

const OnBoarding = memo(() => {
  const [tabs, setTabs] = useState(0);
  useMount(() => {
    setTimeout(() => {
      setTabs(1);
    }, 4000);
  });

  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();
  const carouselContent = [
    {
      id: 1011,
      img: oneImg,
      maintext: "Simple Money Management",
      subText: "Get your notifications or alert when you do the over expenses",
    },
    {
      id: 1012,
      img: twoImg,
      maintext: "Note Down Expenses",
      subText: "Daily note your expenses to help manage money",
    },
    {
      id: 1013,
      img: threeImg,
      maintext: "Easy to Track and Analize",
      subText: "Tracking your expense help make sure you don't overspend",
    },
  ];

  const handleNext = () => {
    swiperRef.current?.swipeNext();
  };

  const letsGoHome = () => {
    navigate("/auth");
  };

  return (
    <div className={clsx(style.container)}>
      {/* Show The Logo  */}
      {tabs === 0 && <Logo direction="column" showName />}

      {/* Splash Screens */}
      {tabs !== 0 && <Logo cHeight={100} size={32} direction="row" />}

      {/* renders the swiper */}
      {tabs !== 0 && (
        <Swiper
          ref={swiperRef}
          onIndexChange={(index) => {
            if (index === carouselContent.length - 1) {
              setTabs(2);
            } else {
              setTabs(1);
            }
          }}
        >
          {carouselContent.map((slide, index) => (
            <Swiper.Item key={index}>
              <div className={clsx(style.swiperContent)}>
                <div className={clsx(style.text)}>
                  \<img src={slide.img} alt={`carousel-image-${slide.id}`} />
                  <span>{slide.maintext}</span>
                  <span>{slide.subText}</span>
                </div>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      )}

      {tabs !== 0 && (
        <div
          onClick={tabs === 2 ? letsGoHome : handleNext}
          className={clsx(style.buttonSlide)}
        >
          Let's go
        </div>
      )}
    </div>
  );
});

export default OnBoarding;
