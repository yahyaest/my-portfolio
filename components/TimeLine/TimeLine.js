import React, { useState } from "react";
import {
  Container,
  Separator,
  TimeLineSection,
  TimeLineContainer,
  TimeLineInput,
} from "./TimeLineStyles";
import { TimeLineList } from "../../constant/constants";

const TimeLine = () => {

const [currentIndex,setCurrentIndex] = useState(2)

  const handleInputClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container id="about">
      <Separator />
      <h1>About Me</h1>
      <p>
        I&apos;ve worked with different language from C/C++ , Python to
        JavaScript. Each app is built with different framework/library for both
        Front-end and Back-end.
      </p>
      <TimeLineSection>
        <TimeLineContainer>
          {TimeLineList.map((item, index) => (
            <TimeLineInput
              className={index < currentIndex + 1 ? "active" : ""}
              onClick={() => handleInputClick(index)}
            >
              <span data-year={item.date} data-info={item.content}></span>
            </TimeLineInput>
          ))}
        </TimeLineContainer>
      </TimeLineSection>
    </Container>
  );
};

export default TimeLine;
