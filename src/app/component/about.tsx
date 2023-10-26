"use client";
import { headerItems, userInfo } from "@/app/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
const About: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id={headerItems.about.page}
      className="h-screen flex flex-col sm:mt-8 md:flex-row text-center justify-center items-center md:text-start"
    >
      <div className="m-4 md:ml-12 sm:ml-12 md:w-1/2">
        <h1 className="text-6xl my-6">About</h1>
        <h2 className="text-3xl my-4">Get to know me!</h2>
        {isClient && (
          <p
            className="[&>p]:mt-5"
            dangerouslySetInnerHTML={{ __html: userInfo.about }}
          />
        )}
        <button className="bg-teal-600 w-28 rounded h-10 mt-4 text-neutral-100">
          Projects
        </button>
      </div>
      <div>
        {["Nikhil_Raj_passportphoto"].map((path) => {
          return (
            <div
              key={path}
              className="flex flex-col justify-center items-center text-center"
            >
              <Image
                src={`/${path}.jpg`}
                alt="profilepic"
                width={300}
                height={300}
                className="m-auto"
              />
              <div className="mt-3 w-3/4 break-words">
                {userInfo.skills.map((skill) => (
                  <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
