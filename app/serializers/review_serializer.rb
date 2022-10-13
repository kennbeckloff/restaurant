class ReviewSerializer < ActiveModel::Serializer
has_one :user
attributes :id, :image, :title, :description, :reviews
end
