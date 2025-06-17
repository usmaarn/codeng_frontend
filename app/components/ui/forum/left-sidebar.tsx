import { useState } from "react";
import { CardTitle } from "../card";
import { Link } from "react-router";
import { Icon } from "../icon";
import { type Topic } from "~/lib/types";

export default function LeftSidebar() {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: 1,
      name: "ReactJS",
      description: "",
      image:
        "https://cdn.neurosys.com/wp-content/uploads/2021/10/react-js-1.svg",
    },
    {
      id: 2,
      name: "Nodejs",
      description: "",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*v2vdfKqD4MtmTSgNP0o5cg.png",
    },
    {
      id: 3,
      name: "Solid Principle",
      description: "",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHirSAcWGtrOA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687361225293?e=1755734400&v=beta&t=U1a0wlYoSpuxbXG_z2LZ0R1PbuzBRInLkbn2t9QfmmU",
    },
    {
      id: 4,
      name: "System Design",
      description: "",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20221117170254/OBJECTIVESOFSYSTEMDESIGN.png",
    },
  ]);

  return (
    <div className="mt-5">
      <div className="space-y-5">
        <CardTitle>Top Topics</CardTitle>
        <ul className="mt-3">
          {topics.map((topic, i) => (
            <li>
              <Link
                to=""
                key={topic.id}
                className="flex items-center gap-3 p-2 hover:bg-white hover:shadow-sm rounded-sm"
              >
                <img
                  className="size-6 object-contain"
                  src={topic.image}
                  alt={topic.name}
                />
                <span>{topic.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
