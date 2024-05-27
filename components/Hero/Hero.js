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
            <strong>Hi, I&apos;m Yahya Machat</strong>, a passionate full-stack
            developer. I specialize in crafting responsive and scalable web
            applications using elegant and efficient code. This portfolio
            showcases some of the web apps I've created.
          </HeroText>

          <HeroButton href="#about">Learn More</HeroButton>
        </HeroContent>
      </HeroSection>
      <BackgroundAnimation />
    </HeroSection>
  );
};

export default Hero;
