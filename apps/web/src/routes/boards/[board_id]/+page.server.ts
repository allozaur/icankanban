export function load() {
	return {
		board: {
			id: 1,
			name: 'Board 1',
			columns: [
				{ id: 1, name: 'To do' },
				{ id: 2, name: 'In progress' },
				{ id: 3, name: 'Done' }
			]
		},
		tasks: [
			{ id: 1, title: 'Task 1', description: 'Description for Task 1', columnId: 1 },
			{ id: 2, title: 'Task 2', description: 'Description for Task 2', columnId: 1 },
			{ id: 3, title: 'Task 3', description: 'Description for Task 3', columnId: 2 },
			{ id: 4, title: 'Task 4', description: 'Description for Task 4', columnId: 3 }
		]
	};
}
