import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from '../styles/no-todos.module.scss'

const NoTodos: FC = () => {
	return (
		<AnimatePresence mode='sync'>
			<motion.div
				className={styles.noTodos}
				initial={{ y: 25, scale: 0.6 }}
				animate={{ y: 0, scale: 1 }}
				exit={{ y: 25 }}
			>
				You don't have any todo's yet
			</motion.div>
		</AnimatePresence>
	)
}

export default NoTodos
