# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150129210740) do

  create_table "comments", force: true do |t|
    t.text     "description"
    t.integer  "user_id"
    t.integer  "list_id"
    t.integer  "todo_item_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["list_id"], name: "index_comments_on_list_id"
  add_index "comments", ["todo_item_id"], name: "index_comments_on_todo_item_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

  create_table "lists", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "lists", ["user_id"], name: "index_lists_on_user_id"

  create_table "todo_items", force: true do |t|
    t.string   "description"
    t.boolean  "checkbox"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "state",       default: 1
    t.integer  "list_id"
  end

  add_index "todo_items", ["list_id"], name: "index_todo_items_on_list_id"

  create_table "users", force: true do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
