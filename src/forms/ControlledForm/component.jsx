import { useState } from 'react'

import './styles.scss'

const ControlledForm = () => {
    // const [title,setTitle] = useState('')
    // const [body,setBody] = useState('')
    // const [userId,setUserId] = useState('')

    const [fields, setFileds] = useState({
        title: '',
        body: '',
        userId: '1',
    })

    const handlChangeFields = ({target: {name, value}}) => {
        console.log(name, value);

        // if(!value){
        //     console.log('err');
        //     return
        // }
        setFileds({
            ...fields,
            [name]: value
        })
    }

    const handlFormSubmit = (e) => {
        e.preventDefault()


        if(!fields.title || !fields.body){
            console.log('err');
            return
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: fields,
        })
        .then(res => res.json())
        .then(data => console.log('data', data))
    }
    return (
        <div>
            <h1>Controlled Form</h1>
            <form action="">
                <input type='text' name='title' value={fields.title} onChange={handlChangeFields} />
                <textarea name="body" rows={10} value={fields.body} onChange={handlChangeFields} />
                <select name="userId" value={fields.userId} onChange={handlChangeFields} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="submit" onClick={handlFormSubmit} />
            </form>
        </div>
    )
}
export default ControlledForm;