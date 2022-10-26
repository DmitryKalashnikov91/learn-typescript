import React, {  useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void,
    
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }
    const handleClick = () => {
        props.onAdd(ref.current!.value);
        ref.current!.value = ''
    }
   const deleteAll  = () => {
    const shoud = window.confirm('Вы уверены?')
    if (shoud) {
        localStorage.clear();
        window.location.reload()
    }
   }

  return (
    <div className='input-field mt2'>
        <input
            ref={ref}
            type="text"
            id="title"
            placeholder='Введите название дела'
            onKeyPress={keyPressHandler}        
        />
        
        <button className='btn' onClick={handleClick}>добавить</button>
        <button className='btn red' onClick={deleteAll}>удалить все</button>
    </div>
  )
}

export default TodoForm