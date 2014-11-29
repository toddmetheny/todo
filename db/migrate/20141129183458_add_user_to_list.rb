class AddUserToList < ActiveRecord::Migration
  def change
    add_reference :lists, :user, index: true
  end
end
