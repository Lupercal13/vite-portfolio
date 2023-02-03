import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2020",
    title: "Google",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione laboriosam repudiandae aliquid similique voluptate libero nam sequi, quam, dicta aut explicabo vitae nisi repellendus fuga perspiciatis autem expedita quaerat architecto error quasi minima perferendis saepe. Et perferendis fugiat, sed quae odio in tempore ducimus ad nobis facilis natus tenetur.",
  },
  {
    year: "2017",
    title: "Amazon",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione laboriosam repudiandae aliquid similique voluptate libero nam sequi, quam, dicta aut explicabo vitae nisi repellendus fuga perspiciatis autem expedita quaerat architecto error quasi minima perferendis saepe. Et perferendis fugiat, sed quae odio in tempore ducimus ad nobis facilis natus tenetur.",
  },
  {
    year: "2015",
    title: "MailChimp",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione laboriosam repudiandae aliquid similique voluptate libero nam sequi, quam, dicta aut explicabo vitae nisi repellendus fuga perspiciatis autem expedita quaerat architecto error quasi minima perferendis saepe. Et perferendis fugiat, sed quae odio in tempore ducimus ad nobis facilis natus tenetur.",
  },
  {
    year: "2012",
    title: "Facebook",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione laboriosam repudiandae aliquid similique voluptate libero nam sequi, quam, dicta aut explicabo vitae nisi repellendus fuga perspiciatis autem expedita quaerat architecto error quasi minima perferendis saepe. Et perferendis fugiat, sed quae odio in tempore ducimus ad nobis facilis natus tenetur.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b53]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
