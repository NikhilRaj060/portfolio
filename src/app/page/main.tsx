import Intro from "@/app/component/info";
import About from "@/app/component/about";
import Project from "../component/project";
const Main: React.FC = () => {
  return (
    <div className="lg:mx-32 md:mx-4">
      <Intro />
      <About />
      <Project />
    </div>
  );
};

export default Main;
