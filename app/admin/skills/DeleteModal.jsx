"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from '@/helper/Axios'

const DeleteModal = (props) => {
    const { onDeleteSuccess, onHide, deleteID, ...otherProps } = props;
    const [btnText, setBtnText] = useState('Delete')
    const [loading, setLoading] = useState(false)

    const onClick = (id) => {
        setBtnText('Loading...')
        setLoading(true)

        axios.get(`/deleteSkill?id=${id}`)
        .then((res) => {
            if(res.data === 1){
                onDeleteSuccess()
            }
            setBtnText('Delete')
            setLoading(false)
        })
        .catch((error) => {
            setBtnText('Delete')
            setLoading(false)
        })
    }

    
    return (
        <>
            <Modal
                {...otherProps}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Skill
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this skill?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                    <Button className='btn-danger' disabled={loading ? true : false} onClick={() => onClick(deleteID)}>
                        {btnText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal