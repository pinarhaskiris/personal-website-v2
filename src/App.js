import Navbar from "./components/Navbar";
import Project from "./components/Project";

import annie from "./images/annie.png";
import email_client from "./images/email_client.png";
import senior_design_project from "./images/senior_design_project.png";
import portrait from "./images/portrait.png";

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
            description="Three machine learning algorithms (Naive Bayes, SVM, Random Forest) was used in hate-speech recognition. 
            90% accuracy was obtained with SVM. 
            Steps included preparing the data, training the models and evaluating their results.
            Second part of the project aims to use deep learning models to achieve higher accuracy."
            tags={["Python", "Machine Learning", "Classification"]}
            githubLink="https://github.com/pinarhaskiris/hate-speech-recognizer"
          />

          <Project img={ annie }
            title="Annie"
            description="A front-end Named-Entity annotation tool. Build for annotating with Person, Location and Organization tags. 
            Users can import the text as .txt file, annotate using the tool and export the annotations with BIO tags included."
            tags={["HTML", "CSS", "React.js"]}
            githubLink="https://github.com/pinarhaskiris/annie"/>

          <Project img={ email_client }
            title="Mail Client"
            description="A front-end website for an email client that makes API calls to send and receive emails. Users can send, receive, archive and respond to emails."
            tags={["HTML", "CSS", "JavaScript", "API calls", "Django"]}
            githubLink="https://github.com/pinarhaskiris/mail-proj"/>

        </div>
      </div>
      
    </div>
  );
}

export default App;
