import React, {useState, Fragment} from "react";

import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ArchiveItem from "./components/ArchiveItem";
import Carousel from "./components/Carousel";
import WorkExperience from "./components/WorkExperience";

import annie from "./images/annie.png";
import email_client from "./images/email_client.png";
import senior_design_project from "./images/senior_design_project.png";
import portrait from "./images/portrait.png";

import resume_ss from "./images/resume_ss.png";
import { BsDownload, BsBoxArrowUpRight, BsGithub, BsMailbox } from 'react-icons/bs';

import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const darkMode = useDarkMode(false);

  return (
    
    <div className="App">
    <div id="dark_mode_toggle_btn">

      <DarkModeToggle 
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={80}
      />

    </div>
      
      <div id="about_container">
        <img src={portrait}/>
        <div>
        <h1>P<span>ı</span>nar Hask<span>ı</span>r<span>ış</span></h1>
          <ul>
            <li>👩🏻‍💻 A 21-year-old computer engineering student from Istanbul, Turkey. </li>
            <li>🎓 Will be graduating this year.</li>
            <li>☺️ Interning as a frontend developer at <a href="https://www.artiwise.com/en/main-page/" target="_blank">Artiwise</a> since June 2022.</li>
            <li>🧠 Interested in natural language processing and web development.</li>
            <li>🎨 Drawing faces and learning Spanish as a hobby.</li>
          </ul>
        </div>
      </div>
      <Navbar />

      <div id='experience_container'>
        <h1>Experience</h1>
        <div className='experience_list'>
          <WorkExperience duration='June 2022 - present'
          title='Intern' place='Artiwise' description='Working on identifying UX problems, implementing their solutions and optimizing the performance of the application.'/>

          <WorkExperience duration='August 2021 - May 2022' title='Frontend Developer Intern' place='Sociality.io'
          description='Worked with an international team of developers, designers and marketing specialists. Implemented bug fixes and updates for existing projects while assisting in the development of new features.' />
        </div>
      </div>

      <div id="projects_container">
        <h1>Projects</h1>
        <div className="project_list">
        
          <Project img={ senior_design_project }
            title="Hate-speech Recognizer"
            description={<Fragment> <p>In Part I, implemented 3 machine learning algorithms. SVM gave the best accuracy result at approx. 90%.</p> <p>In Part II, implemented several deep learning models from the Hugging Face library. Used 4 pre-trained models, fine-tuned 2 of them and trained a text-classifier from scratch. Fine-tuned DistilBERT and trained DistilBERT Base Uncased performed the best.</p> </Fragment>}
            tags="Python, NLTK, scikit-learn, pandas, NumPy, transformers, Hugging Face"
            githubLink="https://github.com/pinarhaskiris/hate-speech-recognizer-dl"
          />

          <Project img={ annie }
            title="Annie"
            description={<Fragment> <p>A named-entity annotation tool where users can import a .txt file, annotate it with person, location or organization tags and export the annotated version with BIO tags included. </p> </Fragment>}
            tags="HTML, CSS, React.js, wink-tokenizer"
            githubLink="https://github.com/pinarhaskiris/annie"
            liveLink="https://pinarhaskiris.github.io/annie/"/>

        </div>
      </div>

        <div id="archive_container">
          <h1>Other Notable Projects</h1>
          <div className="archive_list">
            <ArchiveItem title="cute-dark" description="A dark theme for VS Code. Made purely for fun."
            tags="VS Code, Extension"
            githubLink="https://github.com/pinarhaskiris/cute-dark"
            liveLink="https://marketplace.visualstudio.com/items?itemName=pinarhaskiris.cute-dark"/>

            <ArchiveItem title="Text Decryptor" 
            description="The grammar and regex rules used to generate and encrypt the text is known. The program decrypts the file by applying regex rules reversely and removing the sentences that can not be generated with the given grammar rules."
            tags="Java, Automata Theory and Formal Languages" githubLink="https://github.com/pinarhaskiris/COMP321-Assignment"/>

            <ArchiveItem title="Number Recognizer" description="This program takes an image as input, draws red rectangles around the numbers it recognizes and writes the recognized number on top of it. OpenCV was not used, calculations were done manually."
            tags="Python, Computer Vision" githubLink="https://github.com/pinarhaskiris/Programming-Studio-Project"/>

            <ArchiveItem title="Commerce" description="This is an eBay-like e-commerce auction site that allows users to post auction listings, place bids on listings, comment on those listings and add listings to a 'watchlist'. Made to practice using Django models, migrations and user authentication."
            tags="HTML, CSS, Django" githubLink="https://github.com/pinarhaskiris/cs50w/tree/main/commerce"/>

            <ArchiveItem title="Mail Service" description="A frontend website for an email client that makes API calls to send and receive emails."
            tags="HTML, CSS, JavaScript, Django" githubLink="https://github.com/pinarhaskiris/cs50w/tree/main/mail"/>

          </div>

         <a href="https://github.com/pinarhaskiris?tab=repositories" target="_blank">more on GitHub <BsBoxArrowUpRight style={{ paddingLeft: '10px' }} /></a>

      </div>

      <div id="resume_container">
        <h1>Resume</h1>
        <div>
          <img src={resume_ss} />
          <a href="https://drive.google.com/file/d/1JimAZJ7USvAvffMD2HincmjWXCT9tCR-/view?usp=sharing" target="_blank">Open in new tab <BsBoxArrowUpRight style={{ paddingLeft: '10px' }} /></a>
        </div>
      </div>

      <div id="art_container">
        <h1>Art</h1>
        <div>
          <Carousel />
        </div>

        <a href="https://drive.google.com/file/d/1EDO9VVazz2vOgzmz1QzNl2HBkaaArls1/view?usp=sharing" target="_blank">for more <BsBoxArrowUpRight style={{ paddingLeft: '10px' }} /> </a>
        
      </div>

    <div id="contact_container">
      <h1>Contact</h1>
      <ul>
        <li><BsGithub /> <a href="https://github.com/pinarhaskiris" target="_blank">GitHub <BsBoxArrowUpRight size={35} style={{ paddingLeft: '10px' }} /></a></li>
        <li><BsMailbox /> <a href="mailto: pinarhaskiris1900@gmail.com">pinarhaskiris1900@gmail.com</a></li>
      </ul>
      </div>
      
    </div>
  );
}

export default App;
