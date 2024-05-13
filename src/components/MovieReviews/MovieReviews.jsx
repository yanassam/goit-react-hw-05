import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmReviews } from "../../service/serviceAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchFilmReviews(movieId);
      setReviews(data || []);
    };
    getReviews();
  }, [movieId]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className={s.reviewItem}>
              <div className={s.author}>Author: {review.author}</div>
              <div className={s.content}>Content: {review.content}</div>
            </li>
          ))
        ) : (
          <li>No reviews available.</li>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
