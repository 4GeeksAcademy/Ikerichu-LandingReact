import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
//create your first component
const Home = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4"><i><FontAwesomeIcon icon={faInstagram} /></i> Instagram</h1>
			<p className="lead">The new social web experiment for those who want to share to the world.</p>
			<hr className="my-4"/>
				<p>Share with us your feedback.</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">Contact</a>
				</p>
		</div>
	);
};

export default Home;