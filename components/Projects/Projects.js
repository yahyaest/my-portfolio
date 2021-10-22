import React from "react";
import Image from 'next/image'
import { projects } from "../../constant/constants";
import {Separator,
  Container,
  Cards,
  Card,
  CardSideFront,
  CardSideBack,
  CardButton,
  CardTitle,
  CardDetails,
  CardInfo,
  CardTags,
  CardDescription,
  CardSpan,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container id="projects">
      <Separator />
      <h1>Projects</h1>
      <Cards>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardSideFront>
              <CardTitle size={project.title.length}>{project.title}</CardTitle>

              <CardDetails>
                <Image
                  src={`/Images/${project.image}`}
                  alt={`/Images/${project.image}`}
                  width={1920}
                  height={600}
                />
                <CardTags size={project.tags2 ? 2 : 1}>
                  <p>
                    Tags :{" "}
                    {project.tags.map((tag) => (
                      <CardSpan key={tag}>{tag}</CardSpan>
                    ))}
                  </p>
                  {project.tags2 && (
                    <p>
                      Django :{" "}
                      {project.tags2.map((tag) => (
                        <CardSpan key={tag}>{tag}</CardSpan>
                      ))}
                    </p>
                  )}
                </CardTags>
              </CardDetails>
            </CardSideFront>

            <CardSideBack>
              <CardTitle size={project.title.length}>{project.title}</CardTitle>
              <CardInfo>
                <CardDescription size={project.description.length}>
                  {project.description}
                </CardDescription>
                <CardButton onClick={() => window.open(project.visit.link)}>
                  {project.visit.text}
                </CardButton>
                <CardButton onClick={() => window.open(project.source.link)}>
                  {project.source.text}
                </CardButton>
                {project.source2 && (
                  <CardButton onClick={() => window.open(project.source2.link)}>
                    {project.source2.text}
                  </CardButton>
                )}
              </CardInfo>
            </CardSideBack>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};
export default Projects;
