import styled from "styled-components";

export const Separator = styled.div`
  width: 60px;
  height: 6px;
  border-radius: 10px;
  margin-bottom: 4rem;
  background-color: white;
  background: linear-gradient(270deg, gold 0%, darkorange 100%);
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
`;

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 6rem;

  &:hover ${Separator} {
    width: 120px;
  }
`;

export const TimeLineSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TimeLineContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 100px;
  max-width: 1900px;
  position: relative;
  z-index: 0;
`;

export const TimeLineInput = styled.div`
  width: 25px;
  height: 25px;
  background-color: #aeb6bf;
  position: relative;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    background-color: #aeb6bf;
    width: 10vw;
    height: 5px;
    max-width: 300px;
  }
  &::before {
    left: calc(-4vw + 12.5px);
  }
  &::after {
    right: calc(-4vw + 12.5px);
  }
  &.active {
    background-color: goldenrod;
    &::before {
      background-color: goldenrod;
    }
    &::after {
      background-color: goldenrod;
    }
    span {
      font-weight: 700;
      &::before,
      &::after {
        font-size: 1.5rem;
      }
      
    }
  }
  &.active ~ .input {
    &,
    &::before,
    &::after {
      background-color: #aeb6bf;
    }
  }
  span {
    width: 1px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    &::before,
    &::after {
      font-size: 1.5rem;
      visibility: visible;
      position: absolute;
      left: 50%;
    }
    &::after {
      content: attr(data-year);
      top: 25px;
      transform: translateX(-50%);
    }
    &::before {
      content: attr(data-info);
      top: -65px;
      width: 70px;
      transform: translateX(-5px) rotateZ(-45deg);
      text-indent: -10px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 17px;
    height: 17px;

    &::before,
    &::after {
      height: 3px;
    }
    &::before {
      left: calc(-4vw + 8.5px);
    }
    &::after {
      right: calc(-4vw + 8.5px);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 12px;
    height: 12px;

    &.active {
      span {
        &::before,
        &::after {
          font-size: 1rem;
        }
      }
    }

    span {
      &::before,
      &::after {
        font-size: 1rem;
      }
    }
  }
`;
