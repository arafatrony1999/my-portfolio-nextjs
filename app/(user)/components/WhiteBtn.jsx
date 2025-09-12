import Link from 'next/link'

const WhiteBtn = (props) => {
    return (
        <Link href={props.btnLink} className='my-btn white-btn'>
            {props.btnText}
        </Link>
    )
}

export default WhiteBtn