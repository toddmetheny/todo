class TodoItem < ActiveRecord::Base
	validates :state, inclusion: (1..4)
	STATE_OPTIONS=[['Backlog', 1], ['Ready', 2], ['In Progress', 3], ['Done', 4]]
	def convert_state(num)
		if num == 1
			'Backlog'
		elsif num == 2
			'Ready'
		elsif num == 3
			'In Progress'
		else 
			'Done'
		end
	end
end
