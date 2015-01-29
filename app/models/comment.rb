class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :list
  belongs_to :todo_item
end
