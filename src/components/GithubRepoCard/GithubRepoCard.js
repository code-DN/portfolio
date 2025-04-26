import React from "react";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ project, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
        key={project.id}
      >
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="20"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="repo-name">{project.name}</p>
        </div>

        <p className="repo-description">{project.description}</p>

        <div className="repo-stats">
          <div className="repo-left-stat">
            <span className="repo-button" onClick={() => openUrlInNewTab(project.githubUrl)}>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="24"
                role="img"
                viewBox="0 0 10 16"
                width="16"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M4 0l1.09 3.26H8l-2.18 1.58L6.91 8 4 6.42 1.09 8l1.09-3.16L0 3.26h2.91z"
                ></path>
              </svg>
              <p className="repo-button-text">GitHub</p>
            </span>

            <span className="repo-button" onClick={() => openUrlInNewTab(project.websiteUrl)}>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="24"
                role="img"
                viewBox="0 0 16 16"
                width="18"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM4 8a4 4 0 0 1 7.465-2.001H8.5v1h3.964a.5.5 0 0 1 .036.5H8.5v1h4.036A4 4 0 0 1 4 8z"
                ></path>
              </svg>
              <p className="repo-button-text">Website</p>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
