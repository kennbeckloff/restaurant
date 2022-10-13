import { useState } from "react";


const initialState = {
  title: "",
  image: "",
  reviews: "",
  description: "",
  rating: "",
};
const mystyle = {
  margin: "2rem 0",
  padding: "10px",
  borderradius: "1rem",
};
function NewReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReview) => {
        setFormData(initialState);
        onAddReview(newReview);
      });
  }

  return (
    <div style={mystyle}>
      <h2>New Restaurant Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Restaurant Name: </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="reviews">Review: </label>
        <input
          type="text"
          id="reviews"
          value={formData.reviews}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
