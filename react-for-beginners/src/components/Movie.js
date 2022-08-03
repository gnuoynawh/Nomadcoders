import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
    return  (
        <div >
            <img src={medium_cover_image} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}
/*


function Movie(props) {
    return  (
        <div >
            <img src={props.coverImg} />
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}</Link>
            </h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, 
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
*/

export default Movie;