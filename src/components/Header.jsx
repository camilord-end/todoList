import { TodoTextInput } from './TodoTextInput'
import { useTodo } from '../useTodo'
import { motion } from 'framer-motion'

const Header = () => {
  const [, dispatch] = useTodo()

  return (
    <header className='header'>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.2
        }}
      >
        To Do List
      </motion.h1>
      <TodoTextInput
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            dispatch({
              type: 'ADD_TODO',
              payload: { text }
            })
          }
        }}
        placeholder='What do you need to do?'
      />
    </header>
  )
}

export default Header
