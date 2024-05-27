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

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
    text-align:center;
  }

    @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    text-align:center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    text-align:center;
  }
`;

export const ListItem = styled.li`
  max-width: 300px;
  display: flex;
  flex-direction: column;


  picture{
   height:2rem;
   margin-bottom:2rem;
  }

   @media ${(props) => props.theme.breakpoints.sm} {
    margin:0 auto;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 2rem 0;
  }

  p{
   line-height:3rem;
  }
`;
