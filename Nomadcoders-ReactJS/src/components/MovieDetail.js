import styles from "./Movie.module.css";

function MovieDetail({ id, coverImg, year, title, summary, genres }) {
    return  (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>{title}</h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default MovieDetail;