"use client"

import axios from '@/helper/Axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { usePortfolioContext } from '@/context/PortfolioContext';
import { useCategoryContext } from '@/context/CategoryContext';
import Select from 'react-select'
import { toast } from 'react-toastify'

import Editor from "@/helper/Editor";

const AddPortfolios = () => {
    const [btnText, setBtnText] = useState('Submit')
    const [loading, setLoading] = useState(false)

    const { getPortfolios } = usePortfolioContext();
    const { categories } = useCategoryContext()

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [github, setGithub] = useState('')
    const [category, setCategory] = useState([])
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const setSelectedCategory = (item) => {
        setCategory(item)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        setBtnText('Loading...')
        setLoading(true)

        const formData = new FormData()

        formData.append('name', name)
        formData.append('link', link)
        formData.append('github', github)
        formData.append('category', JSON.stringify(category))
        formData.append('image', image)
        formData.append('description', description)

        axios.post('/addPortfolios', formData)
        .then((res) => {
            console.log(res.data)
            if(res.data.status === 1){
                setName('')
                setLink('')
                setCategory([])
                setImage('')
                setDescription('')

                
                toast.success('Project added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getPortfolios()
                
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
                Add Portfolios
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Name</Form.Label>
                    <Form.Control value={name} onChange={ (e) => setName(e.target.value) } type="text" placeholder="Enter Project Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Link</Form.Label>
                    <Form.Control value={link} onChange={ (e) => setLink(e.target.value) } type="text" placeholder="Enter Project Link" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Github Link</Form.Label>
                    <Form.Control value={github} onChange={ (e) => setGithub(e.target.value)} type="text" placeholder="Enter Github Link" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Category</Form.Label>
                    <Select
                        value={category}
                        onChange={setSelectedCategory}
                        // options={categories}
                        options={categories.filter((category) => {return category.type === 'website'})}
                        getOptionLabel={(options) => options.name}
                        getOptionValue={(options) => options.id}
                        isSearchable
                        isClearable
                        isMulti
                        noOptionsMessage={() => 'No category found'}
                        placeholder='Select Categories...'
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select Project Display Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0]) } type="file" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    
                    <Editor onChange={ (e) => setDescription(e.target.value) } />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading ? true : false}>
                    {btnText}
                </Button>
            </Form>
        </div>
    )
}

export default AddPortfolios