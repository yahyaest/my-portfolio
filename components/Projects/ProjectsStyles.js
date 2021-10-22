import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
      0% {
        background-color: hsl(200, 20%, 70%);
      }
      100% {
        background-color: hsl(200, 20%, 95%);
      }
`;

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

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 1fr;
  }
`;

export const CardSideFront = styled.div`
  height: 52rem;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 20px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  background: crimson;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 40rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 30rem;
  }
`;

export const CardSideBack = styled.div`
  height: 52rem;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 20px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  background: crimson;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);

  @media ${(props) => props.theme.breakpoints.md} {
    height: 40rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 30rem;
  }
`;

export const Card = styled.div`
  -webkit-perspective: 150rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 90%;
  max-width: 600px;
  margin: 5rem auto;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  &:hover ${CardSideFront} {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  &:hover ${CardSideBack} {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 40rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 30rem;
  }
`;

export const CardTitle = styled.div`
  height: 10rem;
  padding: 4rem 1rem;
  font-size: ${(props) => (props.size > 20 ? "3rem" : "4rem")};
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 8rem;
    padding: 2rem 1rem;
    font-size: ${(props) => (props.size > 20 ? "2rem" : "3rem")};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 6rem;
    padding: 1.5rem 1rem;
    font-size: ${(props) => (props.size > 20 ? "1.5rem" : "2rem")};
  }
`;

export const CardDetails = styled.div`
  padding: 0 2rem 2rem;

  img {
    width: 100%;
    height: 30rem;
    margin: 0.5rem auto;
    border: 1px solid silver;
    border-radius: 20px;
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    animation: ${skeletonLoading} 1s linear infinite alternate;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    img {
      height: 20rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    img {
      height: 15rem;
    }
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
`;

export const CardDescription = styled.div`
  text-align: center;
  color: #fff;
  font-size: ${(props) => (props.size > 250 ? "1.75rem" : "2rem")};
  margin-top: ${(props) => (props.size > 250 ? "10rem" : "8rem")};
  margin-bottom: ${(props) => (props.size > 250 ? "5rem" : "8rem")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.size > 250 ? "1.25rem" : "1.5rem")};
    margin-top: ${(props) => (props.size > 250 ? "8rem" : "6rem")};
    margin-bottom: ${(props) => (props.size > 250 ? "4rem" : "6rem")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.size > 250 ? "0.9rem" : "1rem")};
    margin-top: ${(props) => (props.size > 250 ? "6rem" : "4rem")};
    margin-bottom: ${(props) => (props.size > 250 ? "3rem" : "4rem")};
  }
`;

export const CardTags = styled.div`
  margin: 2rem 0;
  p {
    margin: ${(props) => (props.size > 1 ? "2rem 0" : "4rem 0")};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 1.5rem 0;
    p {
      margin: ${(props) => (props.size > 1 ? "1.5rem 0" : "3rem 0")};
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0.5rem 0;
    font-size: 1.25rem;
    p {
      margin: ${(props) => (props.size > 1 ? "0.75rem 0" : "1.25rem 0")};
    }
  }
`;

export const CardSpan = styled.span`
  color: black;
  background-color: goldenrod;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 10px;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.25rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.9rem;
    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const CardButton = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  margin: 1rem;
  display: inline-block;
  border-radius: 0.5rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #777;

  &:after {
    background-color: #fff;
  }

  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    -webkit-transform: scaleX(1.4) scaleY(1.6);
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active,
  &:focus {
    outline: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem 2rem;
    margin: 1rem;
    font-size: 1.25rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.5rem;
    margin: 1rem;
    font-size: 1rem;
  }
`;
