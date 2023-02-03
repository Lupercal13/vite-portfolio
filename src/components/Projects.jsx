import React from "react";
import ProjectItem from "./ProjectItem";
import placeholder from '../assets/placeholder.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium
        sed soluta repellendus cupiditate voluptate fuga voluptatibus ipsam
        blanditiis, cum magni rem harum. Laboriosam quaerat quasi sunt neque
        totam laudantium.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={placeholder} title='example app' />
        <ProjectItem img={placeholder} title='example app'/>
        <ProjectItem img={placeholder} title='example app' />
        <ProjectItem img={placeholder} title='example app' />
      </div>
    </div>
  );
};

export default Projects;
