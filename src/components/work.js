import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Work extends Component {
  state = {}
  render() {
      return ( 
        <div>
            <h1 className='heading'>
              <Fade bottom cascade>Work</Fade>
            </h1>
            <div className='work-content'>
                {data.project.map((project) => (
                    <Project key={project.id}
                        title = {project.title}
                        service = {project.service}
                        imageSrc = {project.imageSrc}
                        url={project.url}
                    ></Project>
              ))}

            </div>

        </div>
      );
  }
}

export default Work;