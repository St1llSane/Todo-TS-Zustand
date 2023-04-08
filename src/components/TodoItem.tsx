import { FC } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import styles from '../styles/todo-item.module.scss'

const TodoItem: FC = () => {
	return (
		<div className={styles.todoItem}>
			<div className={styles.checkbox}>
				<label>
					<input type='checkbox' />
					<span></span>
				</label>
			</div>
			<p>Text text text</p>
			<div className={styles.controls}>
				<button className={styles.edit}>
					<AiFillEdit />
				</button>
				<button className={styles.delete}>
					<AiFillDelete />
				</button>
			</div>
		</div>
	)
}

export default TodoItem
