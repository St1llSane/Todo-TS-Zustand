import styles from './styles/app.module.scss'
import { FC } from 'react'
import AddTodo from './components/AddTodo'
import ControlTodos from './components/ControlTodos'
import TodosList from './components/TodosList'

const App: FC = () => {
	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<AddTodo />
				<ControlTodos />
				<TodosList />
			</div>
		</div>
	)
}

export default App
