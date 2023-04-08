import { FC } from 'react'
import styles from '../styles/add-todo.module.scss'

const AddTodo: FC = () => {
	return (
		<div className={styles.addTodo}>
			<h1 className={styles.title}>ToDo App</h1>
			<form className={styles.form}>
				<input type="text" placeholder='Text...' />
				<button>Add ToDo</button>
			</form>
		</div>
	)
}

export default AddTodo
