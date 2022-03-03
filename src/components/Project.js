const Project = ({ title, description, tags, githubLink, img }) => {
  
  return (
    <div className="project">
        <img src={ img }/>
        <div>
            <h2>{ title }</h2>
            <p> { description }</p>
            <ul>
                { tags.map((tag, index) => {
                    <li key={index}>{tag}</li>
                })}
            </ul>
            <a href={ githubLink }>github</a>
        </div>
        
    </div>
  )
}

export default Project


