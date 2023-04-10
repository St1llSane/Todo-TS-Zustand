import { FC } from 'react'
import styles from '../styles/todos-list.module.scss'
import TodoItem from './TodoItem'
import { useTodoStore } from '../data/stores/useTodoStore'

const TodosList: FC = () => {
	const [todos] = useTodoStore((state) => state.todos)

	return <div className={styles.todoList}>
		{/* {todos.map((todo) => {
			<TodoItem />
		})} */}
	</div>
}

export default TodosList
