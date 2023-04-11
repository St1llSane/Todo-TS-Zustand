import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Todo {
	id: number
	title: string
	createdAt: number
}

interface TodoStore {
	todos: Todo[]
	createTodo: (title: string) => void
	updateTodo: (id: number, title: string) => void
	deleteTodo: (id: number) => void
}

export const useTodoStore = create<TodoStore>()(
	devtools(
		persist(
			(set, get) => ({
				todos: [],
				createTodo: (title: string) => {
					const { todos } = get()
					const newTask = {
						id: Date.now() + (Math.random() * 100 + Math.random()),
						title,
						createdAt: Date.now(),
					}

					set({
						todos: [newTask].concat(todos),
					})
				},
				updateTodo: (id: number, title: string) => {
					const { todos } = get()

					set({
						todos: todos.map((todo) => ({
							...todo,
							title: todo.id === id ? title : todo.title,
						})),
					})
				},
				deleteTodo: (id: number) => {
					const { todos } = get()

					set({
						todos: todos.filter((todo) => todo.id !== id),
					})
				},
			}),
			{
				name: 'todos-storage',
			}
		)
	)
)
