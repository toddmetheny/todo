class List < ActiveRecord::Base
	has_many :todo_items

	accepts_nested_attributes_for :todo_items
end
