import { useRef } from 'react'

import './styles.scss'

const UncontrolledForm = () => {
    const titleRef = useRef(null)
    const bodyRef = useRef(null)
    const userIdRef = useRef(null)

    const validateFields = ({title, body}) => {
        if(!title || !body){
            console.log('required');
            return false
        }
        return true
    }

    const handlFormSubmit = (e) => {
        e.preventDefault()

        if(!validateFields ({
            title: titleRef.current.value, 
            body: bodyRef.current.value
        }))return
        

        const data = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            userId: userIdRef.current.value,
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
        })
        .then(res => res.json())
        .then(data => console.log('data', data))
  
    }
    return (
        <div>
            <h1>Uncontrolled Form</h1>
            <form action="">
                <input type='text' name='title' ref={titleRef} />
                <textarea name="body" rows={10} ref={bodyRef} />
                <select name="userId" ref={userIdRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="submit" onClick={handlFormSubmit} />
            </form>
        </div>
    )
}
export default UncontrolledForm;