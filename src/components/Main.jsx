import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="/"
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Harrison Payne
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              className="text-[#001b5e] font-semibold "
              sequence={[
                1000,
                "Developer", // Types 'developer'
                2000, // waits 2seconds
                "Coder", // deletes prev text and types new tx
                2000,
                "Tech Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter
              className="cursor-pointer hover:scale-110 hover:text-[#001b5e]"
              size={25}
            />
            <FaFacebookF
              className="cursor-pointer hover:scale-110 hover:text-[#001b5e]"
              size={25}
            />
            <FaInstagram
              className="cursor-pointer hover:scale-110 hover:text-[#001b5e]"
              size={25}
            />
            <FaLinkedinIn
              className="cursor-pointer hover:scale-110 hover:text-[#001b5e]"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
