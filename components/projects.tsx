import React from "react";
import { projects } from "./data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { AppDialog } from "./app-dialog";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              return (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle className="">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className=" ">
                    <div className="gap-3 flex">
                      {project.stacks.map((stack) => (
                        <p>{stack}</p>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-5">
                      <AppDialog>
                        <div className="">
                          <p>{project.details?.title}</p>

                          {/* tech stacks  */}
                          <div className=" mt-5">
                            <b className=" text-blue-700">Tech Stacks:</b>
                            {project.details?.technologies.map((technology) => {
                              return (
                                <p className="" key={technology.name}>
                                  <b>{technology.name}: </b>{" "}
                                  {technology.description}
                                </p>
                              );
                            })}
                          </div>
                          {/* features  */}
                          <div className=" mt-5">
                            <b className=" font-bold text-blue-700">
                              Key Features:
                            </b>
                            {project.details?.features.map((feature) => {
                              return (
                                <p className="" key={feature.name}>
                                  <b>{feature.name}: </b> {feature.description}
                                </p>
                              );
                            })}
                          </div>
                          <p>{project.details.conclusion}</p>
                        </div>
                      </AppDialog>
                      <Button>View Project</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
