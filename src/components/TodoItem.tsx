import {
	FC,
	ChangeEvent,
	useState,
	useRef,
	useEffect,
	KeyboardEventHandler,
} from 'react'
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import { useTodoStore } from '../data/stores/useTodoStore'
import styles from '../styles/todo-item.module.scss'

interface TodoItemProps {
	id: number
	title: string
	completed: boolean
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
	const [updateTodo, deleteTodo, changeCompleted] = useTodoStore(
		(state) => [state.updateTodo, state.deleteTodo, state.changeCompleted]
	)
	const [editing, setEditing] = useState(false)
	const [inputValue, setInputValue] = useState(title)
	const inputRef = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		if (editing) {
			inputRef.current?.focus()
		}
	})

	const checkboxHandler = () => {
		changeCompleted(id, completed)
	}

	const inputEditingHandler = () => {
		setEditing(!editing)
		updateTodo(id, inputValue)
	}

	const editingHandler = () => {
		inputEditingHandler()
	}

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const saveEdited: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter' || e.key === 'Tab') {
			inputEditingHandler()
		}
	}

	const deleteHandler = () => {
		deleteTodo(id)
	}

	return (
		<div className={styles.todoItem}>
			<div className={styles.checkbox}>
				<label>
					<input
						type='checkbox'
						checked={completed}
						disabled={editing}
						onChange={checkboxHandler}
					/>
					<span></span>
				</label>
			</div>
			{editing ? (
				<input
					value={inputValue}
					ref={inputRef}
					onChange={inputHandler}
					onKeyDown={saveEdited}
				/>
			) : (
				<p>{title}</p>
			)}
			<div className={styles.controls}>
				<button className={styles.edit} onClick={editingHandler}>
					{editing ? <AiOutlineCheck /> : <AiFillEdit />}
				</button>
				<button className={styles.delete} onClick={deleteHandler}>
					<AiFillDelete />
				</button>
			</div>
		</div>
	)
}

export default TodoItem
