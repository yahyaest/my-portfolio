import React from "react";
import {
  Container,
  Separator,
  List,
  ListItem,
  ListContainer,
} from "./TechnologiesStyles";
import { DiCode, DiDatabase, DiReact, DiZend } from "react-icons/di";
import { FaServer } from "react-icons/fa";

const Technologies = () => {
  return (
    <Container id="tech">
      <Separator />
      <h1>Technologies</h1>
      <p>
        I've worked with a range of technologies in the web development world.
        From Back-end ,Front-end and Databases
      </p>
      <List>
        <ListItem>
          <picture>
            <DiCode size="4rem" />
          </picture>
          <ListContainer>
            <h2>Languages</h2>
            <p>
              <em>Experience with :</em> <br />
              JavaScript/TypeScript <br />
              Python <br />
              C/C++
            </p>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <h2>Front-End</h2>
            <p>
              <em>Experience with :</em> <br />
              React.js <br />
              Next.js
            </p>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FaServer size="2.5rem" />
          </picture>
          <ListContainer>
            <h2>Back-End</h2>
            <p>
              <em>Experience with :</em> <br />
              Node/Express <br />
              Django <br />
            </p>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiDatabase size="3rem" />
          </picture>
          <ListContainer>
            <h2>Database</h2>
            <p>
              <em>Experience with :</em> <br />
              MySQL <br />
              MongoDB <br />
            </p>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="4rem" />
          </picture>
          <ListContainer>
            <h2>UI/UX</h2>
            <p>
              <em>Experience with :</em> <br />
              tools like Bootstrap
            </p>
          </ListContainer>
        </ListItem>
      </List>
    </Container>
  );
};

export default Technologies;
