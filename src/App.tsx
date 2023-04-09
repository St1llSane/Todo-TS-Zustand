import styles from './styles/app.module.scss'
import { FC } from 'react'
import { useTodoStore } from './data/stores/useTodoStore'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

const App: FC = () => {
	const [todos, createTodo, updateTodo, deleteTodo] = useTodoStore(
		(state) => [
			state.todos,
			state.createTodo,
			state.updateTodo,
			state.deleteTodo,
		]
	)

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<AddTodo />
				<TodosList />
			</div>
		</div>
	)
}

export default App
