'use client'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = (props) => {
    const { onDeleteSuccess, onHide, deleteID, ...otherProps } = props;
    const [btnText, setBtnText] = useState('Delete')
    const [loading, setLoading] = useState(false)

    const onClick = (id) => {
        setBtnText('Loading...')
        setLoading(true)
        
        fetch(`https://portfolioapi.arafatrony.com/api/deleteAbout?id=${id}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if(data === 1){
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
                        Delete About
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this about?</p>
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