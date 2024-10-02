import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        <a href="mailto:work.gauravkumar01@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Email Me
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1FiCzAHOyoL_uw1IAAiczRU_b-D9Tgz4X/view?usp=sharing"
          download
        >
          <button className="w-52 h-14 bg-gradient-to-r from-green-600 via-green-700 to-teal-950 text-xl font-bold text-white rounded-lg hover:from-teal-950 hover:to-green-600 duration-300">
            Download Resume
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/gauravjalap" />
        {/* <SocialLink title="Youtube" link="https://www.youtube.com/@reactjsBD" /> */}
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/gauravjalap/"
        />
        {/* <SocialLink
          title="Facebook"
          link="https://www.facebook.com/Noorlalu143/"
        /> */}
        <SocialLink title="Twitter" link="https://x.com/gauravkumar0109" />
        <SocialLink
          title="LeetCode"
          link="https://leetcode.com/u/gauravjalap"
        />
      </div>
    </div>
  );
};

export default Contact;
