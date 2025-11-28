export function Card(props) {
    return (
        <div className="row">
            <div className="col-auto">
                <div className="card " style={{ width: 18 + 'rem', backgroundColor: "lightslategray" }}>
                    <img src={props.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Like</a>
                    </div>
                </div>
            </div>

        </div>
    );
}