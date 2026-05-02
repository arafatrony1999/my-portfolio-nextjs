"use client"

import axios from '@/helper/Axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { useSkillContext } from '@/context/SkillContext';
import { useSearchParams } from 'next/navigation';

const EditSkills = () => {
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    const [btnText, setBtnText] = useState('Submit')
    const [loading, setLoading] = useState(false)

    const { getSkills } = useSkillContext();

    const [name, setName] = useState('')
    const [percent, setPercent] = useState('')

    useEffect(() => {
        axios.get(`/getEditSkill?id=${id}`)
        .then((res) => {
            setName(res.data.name)
            setPercent(res.data.percent)
        })
        .catch((error) => {

        })
    }, [id])

    const onSubmit = (e) => {
        e.preventDefault()

        setBtnText('Loading...')
        setLoading(true)

        const formData = new FormData()

        formData.append('id', id)
        formData.append('name', name)
        formData.append('percent', percent)

        axios.post('/editSkills', formData)
        .then((res) => {
            if(res.data.status === 1){
                toast.success('Skill updated successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getSkills()

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
                Edit Skill
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Name</Form.Label>
                    <Form.Control defaultValue={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder="Enter Category Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Skill Percent(%)</Form.Label>
                    <Form.Control defaultValue={percent} onChange={ (e) => setPercent(e.target.value)} type="text" placeholder="Enter Skill Percent" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading ? true : false}>
                    {btnText}
                </Button>
            </Form>
        </div>
    )
}

export default EditSkills