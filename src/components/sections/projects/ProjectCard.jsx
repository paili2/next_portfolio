import Image from "next/image";
import ProjectSkil from "./ProjectSkil";

const ProjectCard = (props) => {
  return (
    <article
      style={{
        boxShadow: `
        rgba(240, 46, 170, 0.4) 5px 5px,
        rgba(240, 46, 170, 0.3) 10px 10px,
        rgba(240, 46, 170, 0.2) 15px 15px,
        rgba(240, 46, 170, 0.1) 20px 20px,
        rgba(240, 46, 170, 0.05) 25px 25px
      `,
      }}
      className="w-full bg-white rounded-4xl p-10"
    >
      <div className="flex gap-20">
        <div className="w-2/5 h-96 relative rounded-4xl">
          <Image
            className="w-full h-full object-cover rounded-4xl"
            fill
            src="/musinsa.jpeg"
            alt=""
          ></Image>
        </div>
        <div className="flex flex-col gap-10 text-black items-start justify-center">
          <h2 className="text-4xl font-bold">{props.projectName}</h2>
          <div className="flex flex-col gap-5 text-lg">
            <div className="flex items-center gap-7 ">
              <strong>제작기간</strong>
              <p>{props.period}</p>
            </div>
            <div className="flex items-center gap-7">
              <strong>참여도</strong>
              <p>{props.participation}</p>
            </div>
            <div className="flex items-center gap-7">
              <strong>내용</strong>
              <p>{props.content}</p>
            </div>
            <div className="flex items-center gap-7">
              <strong>기술스택</strong>
              <p>
                <ProjectSkil bg={props.skilbg1} skil={props.skil1} />
                <ProjectSkil bg={props.skilbg2} skil={props.skil2} />
                <ProjectSkil bg={props.skilbg3} skil={props.skil3} />
                <ProjectSkil bg={props.skilbg4} skil={props.skil4} />
                <ProjectSkil bg={props.skilbg5} skil={props.skil5} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
