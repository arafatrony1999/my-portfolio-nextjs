import BigText from "./BigText";
import ClientTestemonialsSection from "./ClientTestemonialsSection";

const TestimonialSection = async () => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getTestimonials', {cache: 'default'});
    const testimonials = await res.json();

    return (
        <>
            <BigText big='TESTIMONIAL' normal='WHAT CLIENT' colored='SAYS' />
            
            <ClientTestemonialsSection testimonials={testimonials} />
        </>
    )
}

export default TestimonialSection