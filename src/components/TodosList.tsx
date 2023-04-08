import { FC } from 'react'
import styles from '../styles/todos-list.module.scss'
import TodoItem from './TodoItem'

const TodosList: FC = () => {
	return (
		<div className={styles.todoList}>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	)
}

export default TodosList
