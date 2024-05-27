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
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleInputClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container id="about">
      <Separator />
      <h1>About Me</h1>
      <p>
        I&apos;ve worked with a diverse range of programming languages, from
        C/C++ and Python to JavaScript, allowing me to develop a broad skill set
        as a full-stack developer. <br/> Each of my projects is built using different
        frameworks and libraries for both Front-end and Back-end, enabling me to
        adapt and utilize the best tools for each task.
      </p>
      <TimeLineSection>
        <TimeLineContainer>
          {TimeLineList.map((item, index) => (
            <TimeLineInput
              key={index}
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
