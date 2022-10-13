class ReviewsController < ApplicationController
    # Get reviews: to return an array of reviews
    def index
        reviews = Review.all
        render json: reviews
    end
    # post a review
    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end
    def update
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review
    end
    def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: review
    end
    private
    def find_review
        review = Review.find(params[:id])
    end
    def review_params
        params.permit(:title, :image, :description, :reviews, :rating)
    end
    def render_not_found_response
        render json: {error: 'Review not found'}, status: :not_found
    end
end