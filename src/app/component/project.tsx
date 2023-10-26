"use client";
import { headerItems, projects, userInfo } from "@/app/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
const Project: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id={headerItems.projects.page}
      className="flex flex-col text-cente justify-center items-center my-40"
    >
      <h1 className="text-6xl my-6">Projects</h1>
      <div className="flex justify-center items-center text-center mt-3 flex-wrap break-words">
        {Object.keys(projects).map((project) => (
          <Image
            src={projects[project as keyof projects].image}
            alt="projcts"
            width={300}
            height={300}
            className="mt-4 p-3"
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
