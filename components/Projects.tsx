import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import pssFoundation from "../public/img/projects/pssFoundation.webp";
import chatbot from "../public/img/projects/chatbot.webp";
import vSorting from "../public/img/projects/vSorting.webp";
import pathFind from "../public/img/projects/pathFind.webp";
import todo from "../public/img/projects/todo.webp";
import fooddel from "../public/img/projects/fooddel.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={fooddel.src}
          title="Food Delivery Website"
          link="https://feastflies.gauravjalap.me/"
        />
        <ProjectCard
          img={todo.src}
          title="Task Management Application"
          link="https://task-management-system-client-nine.vercel.app/"
        />
        {/* <ProjectCard
          img={cyberBlog.src}
          title="Cyber Security"
          link="https://task-management-system-client-nine.vercel.app/"
        /> */}
        <ProjectCard
          img={pssFoundation.src}
          title="PSS Foundation Website"
          link="https://pss-one.vercel.app/"
        />
        <ProjectCard
          img={vSorting.src}
          title="Sorting Visualizer"
          link="https://visualize-sorting-eight.vercel.app/"
        />

        <ProjectCard
          img={pathFind.src}
          title="Path Finding Visualiser"
          link="https://path-finding-visualiser-seven.vercel.app/"
        />
        <ProjectCard
          img={chatbot.src}
          title="ChatBot"
          link="https://github.com/gauravjalap/chatbot-app"
        />
      </div>
    </div>
  );
};

export default Projects;
