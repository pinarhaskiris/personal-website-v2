const ArtItem = ({ img, title, description, date }) => {
  return (
    <div className="art_item">
        <img src={ img } />
        <div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <p>{ date }</p>
        </div>
    </div>
  )
}

export default ArtItem