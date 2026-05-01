"use client";

import axios from '@/helper/Axios'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAboutContext } from '@/context/AboutContext';
import { toast } from 'react-toastify'

const AddAbout = () => {
    const [btnText, setBtnText] = useState('Submit')
    const [loading, setLoading] = useState(false)

    const { getAbout } = useAboutContext();

    const [title, setTitle] = useState('')
    const [number, setNumber] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        setBtnText('Loading...')
        setLoading(true)

        const formData = new FormData()

        formData.append('title', title)
        formData.append('number', number)

        axios.post('/addAbout', formData)
        .then((res) => {
            console.log(res.data)
            if(res.data.status === 1){
                setNumber('')
                setTitle('')
                
                toast.success('About added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getAbout()
                
                setBtnText('Submit')
                setLoading(false)
            }else{
                setBtnText('Submit')
                setLoading(false)
            }
        })
        .catch((error) => {
            setBtnText('Submit')
            setLoading(false)
        })
    }

    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Add About
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter About Title Name</Form.Label>
                    <Form.Control value={title} onChange={ (e) => setTitle(e.target.value) } type="text" placeholder="Enter About Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter About Number</Form.Label>
                    <Form.Control value={number} onChange={ (e) => setNumber(e.target.value) } type="text" placeholder="Enter About Number" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading ? true : false}>
                    {btnText}
                </Button>
            </Form>
        </div>
    )
}

export default AddAbout