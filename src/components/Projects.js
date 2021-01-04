import React from 'react';
import './Projects.css';
import '../App.css';
import { projects } from '../Data/data';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
const Projects = () => {
  return (
    <div className='project-section'>
      <h1>Projects</h1>
      <h4>
        Here is a list of projects built during the last 4 weeks of the program
        at Fullstack Academy Grace Hopper
      </h4>
      <div id='main-container-projects'>
        <div className='project-row'>
          <div className='project-column'>
            <div className='project-text-wrapper'>
              <h2>{projects[0].title}</h2>
              <h5>Fullstack Developer | {projects[0].date} </h5>
              <p>{projects[0].descriptions[0]}</p>
              <p>{projects[0].descriptions[1]}</p>
              <p>{projects[0].descriptions[2]}</p>
            </div>
          </div>
          <div className='project-column'>
            <div className='project-right-wrapper'>
              <iframe
                src='https://player.cloudinary.com/embed/?cloud_name=demo&public_id=elephants&fluid=true&controls=true&source_types%5B0%5D=mp4'
                id='projectIframe'
                allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
                allowfullscreen
                frameborder='0'
              ></iframe>

              <div className='project-social-icon-wrap '>
                <a className='project-social-icon-link' href={projects[0].link}>
                  <AiOutlineLink />
                </a>
                <a
                  className='project-social-icon-link'
                  href='https://github.com/katwingki'
                >
                  <AiFillGithub />
                </a>
                <a
                  className='project-social-icon-link'
                  href='https://github.com/katwingki'
                >
                  <TiSocialYoutubeCircular />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
