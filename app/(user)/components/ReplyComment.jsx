import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useBlogContext } from '../../context/BlogContext';
import { toast } from 'react-toastify';

const ReplyComment = (props) => {
    const { addReply, replySuccess } = useBlogContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reply, setReply] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addReply(props.comment, name, email, reply, props.slug)
    }

    useEffect(() => {
        if(replySuccess){
            setName('')
            setEmail('')
            setReply('')

            toast.success('Reply Submitted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [replySuccess])

    return (
        <div className='reply-comment py-3'>
            <h2>Reply to {props.comment.name}'s comment</h2>

            <p>Your email address will not be published. Required fields are marked *</p>

            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Reply *</Form.Label>
                    <Form.Control value={reply} onChange={(e) => setReply(e.target.value)} as="textarea" rows={3} placeholder='Write your reply here...' />
                </Form.Group>

                <button className='py-1 px-2 colored-btn'>Post Reply</button>
            </Form>
        </div>
    )
}

export default ReplyComment