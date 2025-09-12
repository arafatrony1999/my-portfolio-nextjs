import { FaFacebookF, FaLinkedinIn, FaCalendarAlt } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp, BsBarChartFill } from "react-icons/bs";
import DateFormat from './DateFormat'
import Link from 'next/link';
import Image from "next/image";
import formal from '@/public/images/formal.jpg'

const FullBlog = (props) => {
    if(props.blog){
        const encodedURL = encodeURIComponent(`https://arafatrony.com/blog/${props.blog.slug}`);
        const encodedTitle = encodeURIComponent(props.blog.title);

        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`;
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
        const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`;
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedURL}`
        
        return (
            <>
                <div className='w-100'>
                    <h4 className='text-uppercase'>{props.blog.categories.name}</h4>
                    <h1>{props.blog.title}</h1>
        
                    <div className="blog-details py-3 d-flex">
                        <div className="author d-flex align-items-center me-5">
                            <Image height={300} width={300} src={formal} alt="logo" />
                            <span className='px-3'>Arafat Rony</span>
                        </div>
                        <div className="blog-date d-flex align-items-center">
                            <FaCalendarAlt />
                            <span className='px-3'>
                                <DateFormat date={props.blog.created_at} />
                            </span>
                        </div>
                    </div>
        
                    <img className='img-fluid' src={props.blog.image} alt="" />
        
                    <div className="social-buttons my-4">
                        <div className="products-others-right">
                            <Link href="/" style={{background: "#0E76E6"}}><BsEnvelope /></Link>
                            <Link href={twitterShareUrl} style={{background: "#0087BA"}}><BsTwitter /></Link>
                            <Link href={facebookShareUrl} style={{background: "#2D4373"}}><FaFacebookF /></Link>
                            <Link href={linkedinShareUrl} style={{background: "#005983"}}><FaLinkedinIn /></Link>
                            <Link href={whatsappShareUrl} style={{background: "#1F7D1E"}}><BsWhatsapp /></Link>
                        </div>
                    </div>
        
                    <div className="blog-count d-flex align-items-center py-2">
                        <BsBarChartFill />
                        <span>{props.blog.views}</span>
                    </div>
        
                    <div className='full-blog'>
                        <div dangerouslySetInnerHTML={{__html: props.blog.description }}></div>
                    </div>
                </div>
            </>
        )
    }else{
        return <h1>Loading...</h1>
    }
}

export default FullBlog