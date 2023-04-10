import { FC } from 'react'
import styles from '../styles/no-todos.module.scss'

const NoTodos: FC = () => {
	return <div className={styles.noTodos}>You don't have any todo's yet</div>
}

export default NoTodos
