import { FC, useEffect, useState } from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { useTodoStore } from '../data/stores/useTodoStore'
import styles from '../styles/control-btn.module.scss'

const DeleteChecked: FC = () => {
	const [disabled, setDisabled] = useState(true)
	const [todos, deleteChecked] = useTodoStore((state) => [
		state.todos,
		state.deleteChecked,
	])

	useEffect(() => {
		const completed = todos.filter((todo) => todo.completed === true)

		if (completed.length > 0) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}, [todos])

	return (
		<button
			className={styles.controlBtn}
			disabled={disabled}
			title='Delete checked'
			onClick={() => deleteChecked()}
		>
			<MdDeleteSweep className={styles.all} />
		</button>
	)
}

export default DeleteChecked
