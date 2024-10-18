import image from '../assets/channels4_profile.jpg'
const NewsItem = ({title, description, src, url, date}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:"345px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={src?src:image} style={{height:"200px", width:"360px"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"ERROR"}</p>
        <p className="card-text"><small className="text-body-secondary">{date}</small></p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default NewsItem;
