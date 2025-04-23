import ProjectCard from "@/src/components/sections/projects/ProjectCard";
import ProjectSkil from "@/src/components/sections/projects/ProjectSkil";

const Page = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto">
      <ProjectCard
        projectName={"무신사 클론코딩"}
        period={"25.??.?? ~ ??.??"}
        participation={"100%"}
        content={"---"}
        skilbg１={"#e17100"}
        skil１={"HTML"}
      ></ProjectCard>
    </div>
  );
};

export default Page;
