class AddStateToTodoItems < ActiveRecord::Migration
  def change
    add_column :todo_items, :state, :integer, :default => 1
  end
end
