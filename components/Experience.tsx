import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReact, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import { FaBrain, FaReact, FaHandsHelping, FaDatabase } from "react-icons/fa";
import { GiNinjaHead } from "react-icons/gi";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="ApexIQ"
          subTitle="Web Developer Intern - Present"
          icon={<FaBrain />}
        />
        <ExperienceCard
          title="PSS Foundation"
          subTitle="Web Developer Intern 2023"
          icon={<FaHandsHelping />}
        />
        <ExperienceCard
          title="Exposys Data Labs"
          subTitle="Web Developer Intern 2023"
          icon={<FaDatabase />}
        />

        <ExperienceCard
          title="Coding Ninjas"
          subTitle="Campus Ambassador 2022 - 2023"
          icon={<GiNinjaHead />}
        />
      </div>
    </div>
  );
};

export default Experience;
