import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ArchiveItem from "./components/ArchiveItem";
import SimpleSlider from "./components/SimpleSlider";

import annie from "./images/annie.png";
import email_client from "./images/email_client.png";
import senior_design_project from "./images/senior_design_project.png";
import portrait from "./images/portrait.png";

import resume_ss from "./images/resume_ss.png";
import { BsDownload } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';

function App() {
  return (
    <div className="App">

      <div className="about_container">
        <img src={portrait}/>
        <div>
        <h1>Pınar Haskırış</h1>
          <ul>
            <li>👩🏻‍💻 A 21 year-old computer engineering student from Istanbul. </li>
            <li>☺️ Interning at sociality.io as a front-end developer since August, 2021.</li>
            <li>🧠 Currently working on using deep learning models for hate-speech recognition for my senior design project.</li>
            <li>🎨 Interested in art and languages outside of engineering.</li>
          </ul>
        </div>
      </div>
      <Navbar />

      <div className="projects_container">
        <h1>Projects</h1>
        <div className="project_list">
        
          <Project img={ senior_design_project }
            title="Senior Design Project I"
            description={["Three machine learning algorithms (Naive Bayes, SVM, Random Forest) was used in hate-speech recognition.", 
            "90% accuracy was obtained with SVM.",
            "Steps included preparing the data, training the models and evaluating their results.",
            "Second part of the project aims to use deep learning models to achieve higher accuracy."]}
            tags={["Python", "Machine Learning", "Classification"]}
            githubLink="https://github.com/pinarhaskiris/hate-speech-recognizer"
          />

          <Project img={ annie }
            title="Annie"
            description={["A front-end Named-Entity annotation tool. Build for annotating with Person, Location and Organization tags.", 
            "Users can import the text as .txt file, annotate using the tool and export the annotations with BIO tags included."]}
            tags={["HTML", "CSS", "React.js"]}
            githubLink="https://github.com/pinarhaskiris/annie"/>

          <Project img={ email_client }
            title="Mail Client"
            description={["A front-end website for an email client that makes API calls to send and receive emails.",
            "Users can send, receive, archive and respond to emails."]}
            tags={["HTML", "CSS", "JavaScript", "API calls", "Django"]}
            githubLink="https://github.com/pinarhaskiris/mail-proj"/>

        </div>
      </div>

      <div className="resume_container">
        <h1>Resume</h1>
        <div>
          <img src={resume_ss} />
          <div className="links">
            <a href="/files/Resume.pdf" target="_blank">Open in new tab <BsBoxArrowUpRight style={{ paddingLeft: '10px' }} /></a>
            <a href="/files/Resume.pdf" target="_blank" download>Download in PDF <BsDownload style={{ paddingLeft: '10px' }} /></a>
          </div>
        </div>
      </div>

      <div className="archive_container">
        <h1>Archive</h1>
        <div className="archive_list">
          <ArchiveItem title="cute-dark" description="A dark theme for VS Code. Made purely for fun."
          githubLink="https://github.com/pinarhaskiris/cute-dark"/>

          <ArchiveItem title="Text Decryptor" 
          description="The grammar and regex rules used to generate and encrypt the text is known. The program decryptes the file by applying regex rules reversely and removing the sentences that can not be generated with the given grammar rules."
          tags={["Java", "Automata Theory and Formal Languages"]} githubLink="https://github.com/pinarhaskiris/COMP321-Assignment"/>

          <ArchiveItem title="Number Recognizer" description="This program takes an image as input, draws red rectangles around the numbers it recognizes and writes the recognized number on top of it. OpenCV was not used, calculations were done manually."
          tags={["Python", "Computer Vision"]} githubLink="https://github.com/pinarhaskiris/Programming-Studio-Project"/>

          <ArchiveItem title="Commerce" description="This is an eBay-like e-commerce auction site that allows users to post auction listings, place bids on listings, comment on those listings and add listings to a 'watchlist'. Made to practice using Django models, migrations and user authentication."
          tags={["HTML", "CSS", "Django"]} githubLink="https://github.com/pinarhaskiris/commerce-proj"/>

        </div>
      </div>

      <div className="art_container">
        <h1>Art</h1>
        <div>
          <SimpleSlider />
        </div>
        
      </div>

      <div className="contact_container">
      </div>
      
    </div>
  );
}

export default App;
