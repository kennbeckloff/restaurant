import StarRating from "./StarRating";

function ReviewItem({ review, onUpdateReview, onDeleteReview }) {
  const { id, image, title, description, reviews, rating } = review;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateReview);
  }

  function handleDeleteReview() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    });
  }

  return (
    <div className="review-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Reviews: <em>{reviews}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteReview}>Delete Review</button>
        </p>
      </div>
    </div>
  );
}

export default ReviewItem;
