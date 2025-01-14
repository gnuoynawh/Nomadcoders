import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState();
    const { id } = useParams();

    const getMovies = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, []);
    
    return (
        <div className={styles.container}>
            <h1>The Deatil!</h1>
            {
                loading ? (
                    <div className={styles.loader}>
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className={styles.movies}>
                        <MovieDetail 
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            genres={movie.genres}
                        />
                    </div>
                )
            }    
        </div>
    );
}

export default Detail;