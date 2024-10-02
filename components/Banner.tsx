import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start text-center gap-2">
        <h1 className="text-5xl font-bold text-white">Gaurav Kumar</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Full Stack Developer specializing in the MERN stack, building
          high-performance, scalable web applications. Passionate about
          problem-solving, automation, and delivering user-centric solutions.
          Dedicated to leveraging technology for innovation and efficiency.
        </p>
      </div>
    </div>
  );
};

export default Banner;
