import React from "react";
import {
  Container,
  Separator,
  List,
  ListItem,
  ListContainer,
} from "./TechnologiesStyles";
import { DiCode, DiDatabase, DiReact, DiZend, DiAptana } from "react-icons/di";
import { FaServer } from "react-icons/fa";

const Technologies = () => {
  return (
    <Container id="tech">
      <Separator />
      <h1>Technologies</h1>
      <p>
        I&apos;ve worked with a diverse range of technologies across the web
        development spectrum, spanning both Back-end, Front-end, Databases, and
        DevOps tools. <br /> My experience encompasses building robust Back-end
        solutions, crafting engaging Front-end interfaces, optimizing database
        performance, and orchestrating infrastructure with DevOps tools.
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
              React/Next.js <br />
              Angular <br />
              Svelte
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
              Nest.JS <br />
              Django
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
              PostgreSQL <br />
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
              Bootstrap <br />
              Material-UI <br />
              TailwindCSS
            </p>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiAptana size="4rem" />
          </picture>
          <ListContainer>
            <h2>DevOps Tools</h2>
            <p>
              <em>Experience with :</em> <br />
              Linux <br />
              Docker <br />
              Git <br />
              Nginx
            </p>
          </ListContainer>
        </ListItem>
      </List>
    </Container>
  );
};

export default Technologies;
