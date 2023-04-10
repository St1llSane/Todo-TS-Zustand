import { FC, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useTodoStore } from '../data/stores/useTodoStore'
import styles from '../styles/todo-item.module.scss'

interface TodoItemProps {
	id: number
	title: string
}

const TodoItem: FC<TodoItemProps> = ({ id, title }) => {
	const [deleteTodo] = useTodoStore((state) => [state.deleteTodo])
	const [checked, isChecked] = useState(false)

	const checkboxHandler = () => {
		isChecked(!checked)
	}

	const deleteHandler = () => {
		deleteTodo(id)
	}

	return (
		<div className={styles.todoItem}>
			<div className={styles.checkbox}>
				<label>
					<input
						type='checkbox'
						checked={checked}
						onChange={checkboxHandler}
					/>
					<span></span>
				</label>
			</div>
			<p>{title}</p>
			<div className={styles.controls}>
				<button className={styles.edit}>
					<AiFillEdit />
				</button>
				<button className={styles.delete} onClick={deleteHandler}>
					<AiFillDelete />
				</button>
			</div>
		</div>
	)
}

export default TodoItem
