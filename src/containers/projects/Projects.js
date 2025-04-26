import React, { useContext, Suspense, lazy } from "react";
import "./Project.scss";
// import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/GithubRepoCard/GithubRepoCard")
  );

  const { isDark } = useContext(StyleContext);

  const projectList = [
    {
      id: 1,
      name: "Time-to-have-more-fun",
      description: "Stack - Next.js ,Tailwind CSS ,firebase",
      githubUrl: "https://github.com/Anuj-S-Rawat/time-to-have-more-fun-main.git",
      websiteUrl: "https://time-to-have-more-fun.vercel.app/",
    },
    {
      id: 2,
      name: "Job Portal",
      description: "Stack - React.js, Tailwind CSS, Node.js, Express.js",
      githubUrl: "https://github.com/Anuj-S-Rawat/Job-Portal.git",
      websiteUrl: "https://mern-job-portal-eight.vercel.app/",
    },
    {
      id: 3,
      name: "Ecommerce-Website",
      description: "Stack - React.js, Redux, Node.js, Express.js, Mongoose",
      githubUrl: "https://github.com/Anuj-S-Rawat/Ecommerce.git",
      websiteUrl: "https://mern-store-gold.vercel.app/",
    },
    // Add more projects if you want
  ];

  return (
    <Suspense fallback={<Loading />}>
      <div className="main" id="opensource">
        <h1 className="project-title">Projects</h1>
        <div className="repo-cards-div-main">
          {projectList.map((project) => (
            <GithubRepoCard
              key={project.id}
              project={project}
              isDark={isDark}
            />
          ))}
        </div>
        
      </div>
    </Suspense>
  );
}
