export function Card(props) {
    return (
        
            <div className="col-lg-3 col-md-6">
                <div className="card " style={{ width: 18 + 'rem', backgroundColor: "lightslategray", borderStyle: "none" }}>
                    <img src={props.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Like</a>
                    </div>
                </div>
            </div>

        
    );
}