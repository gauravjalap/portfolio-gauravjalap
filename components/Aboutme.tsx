import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a results-driven Full Stack Developer with expertise in the MERN
          stack, passionate about building high-performance web applications and
          implementing efficient automated systems. With hands-on experience in
          developing scalable and user-centric solutions, I have a proven track
          record of delivering projects that enhance user experience and
          streamline processes. From building a high-traffic web application
          that increased donation efficiency by 40% to architecting a food
          delivery platform that handles 1000+ transactions, I bring a
          commitment to performance and innovation. I am proficient in
          JavaScript, React, Node.js, and MongoDB, among other modern
          technologies, and thrive in collaborative environments where
          problem-solving and creativity are key.
        </p>
        <p>
          In addition to technical expertise, I possess strong leadership
          skills, having led cross-functional teams and managed projects from
          concept to deployment. I am continuously exploring new technologies to
          improve my skills and bring fresh perspectives to the projects I work
          on.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
