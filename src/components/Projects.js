import React from 'react';
import './Projects.css';
import '../App.css';
import { projects } from '../Data/data';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
const Projects = () => {
  console.log('projects', projects);
  return (
    <div className='project-section'>
      <h1>Projects</h1>
      <h4>
        Here is a list of projects built during the last 4 weeks of the program
        at Fullstack Academy Grace Hopper
      </h4>

      {projects.map((project, i) => (
        <div id='main-container-projects'>
          <div className='project-row'>
            <div className='project-column'>
              <div className='project-text-wrapper'>
                <h2>{project.title}</h2>
                <h5>Fullstack Developer | {project.date} </h5>
                <p>{project.descriptions[0]}</p>
                <p>{project.descriptions[1]}</p>
                <p>{project.descriptions[2]}</p>
              </div>
            </div>
            <div className='project-column'>
              <div className='project-right-wrapper'>
                <iframe
                  src={project.iframelink}
                  id='projectIframe'
                  allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
                  allowfullscreen
                  frameborder='0'
                ></iframe>
              </div>
            </div>

            <div className='project-social-icon-wrap '>
              <a className='project-social-icon-link' href={project.link}>
                <AiOutlineLink />
              </a>
              <a className='project-social-icon-link' href={project.github}>
                <AiFillGithub />
              </a>
              <a className='project-social-icon-link' href={project.youtube}>
                <TiSocialYoutubeCircular />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
