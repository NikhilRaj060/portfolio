import { headerItems, userInfo } from "@/app/constant/constant";
import Image from "next/image";
const Intro: React.FC = () => {
  return (
    <section
      id={headerItems.home.page}
      className="h-screen flex flex-col md:flex-row text-center justify-center items-center md:text-start"
    >
      <div>
        {["Nikhil_Raj_passportphoto"].map((path) => {
          return (
            <div key={path}>
              <Image
                src={`/${path}.jpg`}
                alt="profilepic"
                width={300}
                height={300}
                className="rounded-full shadow-2xl mt-10 object-cover ar-1"
              />
            </div>
          );
        })}
      </div>
      <div className="md:ml-12 sm:ml-12 md:w-1/2">
        <h1 className="text-7xl uppercase font-bold hidden md:block">
          Development Engineer
        </h1>
        <h1 className="text-2xl mt-5 md:text-3xl">
          Hi, I&#39;m{" "}
          <span className="text-red-600 text-3xl md:text-4xl">
            {userInfo.name}
          </span>
        </h1>
        <p
          className="mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />
        <button className="bg-teal-600 w-28 rounded h-10 text-neutral-100">
          About
        </button>
      </div>
    </section>
  );
};

export default Intro;
