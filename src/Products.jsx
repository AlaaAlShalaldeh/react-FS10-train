

export default function Products(props) {
    
  return (
    <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">{props.price}</a>
  </div>
</div>
  )
}
