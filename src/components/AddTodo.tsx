import { ChangeEvent, FormEvent, FC, useState, useRef } from 'react'
import { useTodoStore } from '../data/stores/useTodoStore'
import styles from '../styles/add-todo.module.scss'

const AddTodo: FC = () => {
	const [createTodo] = useTodoStore((state) => [state.createTodo])
	const [inputValue, setInputValue] = useState('')
	const [isValid, setIsValid] = useState(true)
	const inputRef = useRef<HTMLInputElement | null>(null)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)

		if (isValid === false && e.target.value.length >= 5) {
			setIsValid(true)
		}
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (inputRef.current && inputRef.current?.value.length >= 5) {
			createTodo(inputValue)
			setIsValid(true)
			setInputValue('')
			inputRef.current?.focus()
		} else {
			setIsValid(false)
		}
	}

	return (
		<div className={styles.addTodo}>
			<h1 className={styles.title}>ToDo App</h1>
			<form className={styles.form} onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='Enter at least 5 characters...'
					value={inputValue}
					ref={inputRef}
					onChange={changeHandler}
				/>
				<button className={isValid ? '' : styles.invalid}>Add ToDo</button>
			</form>
		</div>
	)
}

export default AddTodo
