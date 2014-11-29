class List < ActiveRecord::Base
	has_many :todo_items
	belongs_to :user

	accepts_nested_attributes_for :todo_items
end
