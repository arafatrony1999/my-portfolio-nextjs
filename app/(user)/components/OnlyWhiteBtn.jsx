import Link from 'next/link'

const OnlyWhiteBtn = (props) => {
    return (
        <Link href={props.btnLink} className='my-btn only-white-btn my-5'>
            {props.btnText}
        </Link>
    )
}

export default OnlyWhiteBtn