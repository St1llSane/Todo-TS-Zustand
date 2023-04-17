import { FC } from 'react'
import DeleteAll from './DeleteAll'
import DeleteChecked from './DeleteChecked'
import styles from '../styles/control-todos.module.scss'
import { useTodoStore } from '../data/stores/useTodoStore'
import { AnimatePresence, motion } from 'framer-motion'

const ControlTodos: FC = () => {
	const [todos] = useTodoStore((state) => [state.todos])

	return todos.length >= 1 ? (
		<AnimatePresence>
			<motion.div
				className={styles.controlTodos}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{opacity: 0}}
			>
				<DeleteAll />
				<DeleteChecked />
			</motion.div>
		</AnimatePresence>
	) : null
}

export default ControlTodos
