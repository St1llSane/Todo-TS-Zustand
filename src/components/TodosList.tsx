import { FC } from 'react'
import { useTodoStore } from '../data/stores/useTodoStore'
import TodoItem from './TodoItem'
import NoTodos from './NoTodos'
import styles from '../styles/todos-list.module.scss'

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
