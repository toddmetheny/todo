class AddListToTodoItem < ActiveRecord::Migration
  def change
    add_reference :todo_items, :list, index: true
  end
end
