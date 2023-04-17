import { FC } from 'react'
import DeleteAll from './DeleteAll'
import DeleteChecked from './DeleteChecked'
import styles from '../styles/control-todos.module.scss'

const ControlTodos: FC = () => {
	return (
		<div className={styles.controlTodos}>
			<DeleteAll />
      <DeleteChecked />
		</div>
	)
}

export default ControlTodos
