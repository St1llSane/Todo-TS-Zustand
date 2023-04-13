import { FC } from 'react'
import styles from '../styles/todos-list.module.scss'
import TodoItem from './TodoItem'
import { useTodoStore } from '../data/stores/useTodoStore'
import NoTodos from './NoTodos'

const TodosList: FC = () => {
	const [todos] = useTodoStore((state) => [state.todos])

	return (
		<div className={styles.todoList}>
			{todos.length >= 1 ? (
				todos.map((todo) => (
					<TodoItem
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						key={todo.id}
					/>
				))
			) : (
				<NoTodos />
			)}
		</div>
	)
}

export default TodosList
