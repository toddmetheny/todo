class List < ActiveRecord::Base
	has_many :todo_items
	has_many :comments, dependent: :destroy
	belongs_to :user

	accepts_nested_attributes_for :todo_items
end
