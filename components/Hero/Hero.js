import React from "react";
import BackgroundAnimation from "./../BackgrooundAnimation/BackgroundAnimation";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButton,
} from "./HeroStyles";
const Hero = () => {
  return (
    <HeroSection grid>
      <HeroSection row nopadding>
        <HeroContent>
          <HeroTitle main center>
            Welcome To <br /> My Personal Portfolio
          </HeroTitle>
          <HeroText>
            <strong> Hi, I'm Yahya Machat</strong>, I aspire to became a web
            developer. I build responsive websites through elegant and efficient
            code. This portfolio is an exposition to my created web apps.
          </HeroText>

          <HeroButton href="#about">Learn More</HeroButton>
        </HeroContent>
      </HeroSection>
      <BackgroundAnimation />
    </HeroSection>
  );
};

export default Hero;
