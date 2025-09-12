import Link from 'next/link'

const ColoredBtn = async (props) => {
    return (
        <>
            <Link href={props.btnLink} className='my-btn colored-btn text-center'>
                {props.btnText}
            </Link>
        </>
    )
}

export default ColoredBtn