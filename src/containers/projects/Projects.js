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
      name: "Secure Smart Home Accessibility System",
      description: "Stack - React.js ,Tailwind CSS ,Express.js, prisma",
      githubUrl: "https://github.com/code-DN/SecureHome",
    },
    {
      id: 2,
      name: "Job Portal",
      description: "Stack - React.js, Node.js, Express.js",
      githubUrl: "https://github.com/code-DN/hirrd-app",
    },
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
