const ArchiveItem = ({ title, description, tags = [], githubLink }) => {

    const tag_list = tags.map((tag, index) =>
        <li key={index}>{tag}</li>
    );

    return (
        <div className="archive_item">
            <h3>{ title }</h3>
            <p>{ description }</p>
            <ul className="tag_list">
                { tag_list }
            </ul>
            <a href={ githubLink }>github</a>
        </div>
    )
}

export default ArchiveItem