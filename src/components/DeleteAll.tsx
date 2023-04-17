import { FC, useEffect, useState } from 'react'
import { GiRecycle } from 'react-icons/gi'
import styles from '../styles/control-btn.module.scss'
import { useTodoStore } from '../data/stores/useTodoStore'

const DeleteAll: FC = () => {
	const [disabled, setDisabled] = useState(true)
	const [todos, deleteAll] = useTodoStore((state) => [
		state.todos,
		state.deleteAll,
	])

	useEffect(() => {
		if (todos.length > 0) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}, [todos])

	return (
		<button
			className={styles.controlBtn}
			disabled={disabled}
			title='Delete all'
			onClick={() => deleteAll()}
		>
			<GiRecycle />
		</button>
	)
}

export default DeleteAll
