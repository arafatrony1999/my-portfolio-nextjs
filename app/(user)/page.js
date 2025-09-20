import BigText from './components/BigText';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import Experience from './components/Experience';
import HomepageIntro from './components/HomepageIntro';
import Hr from './components/Hr';
import IntroBtns from './components/IntroBtns';
import IntroCarousel from './components/IntroCarousel';
import PageTitle from './components/PageTitle';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import SmallTitle from './components/SmallTitle';
import SubscriberSection from './components/SubscriberSection';
import TestimonialSection from './components/TestimonialSection';
import AboutSection from './components/AboutSection';
// import AboutCarousel from './components/AboutCarousel';
import { Suspense } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';
import SkillSkeleton from './components/SkillSkeleton';


export default function Home() {
  return (
    <div className='homepage'>
      <PageTitle />
      <HomepageIntro />
      <Suspense fallback={<LoadingSkeleton />}>
        <IntroCarousel />
        <IntroBtns />
        {/* <AboutCarousel /> */}
        <BigText big='ABOUT' normal='ABOUT' colored='ME' />
        <AboutSection />
        <Hr />
        <div className="w-100 d-flex justify-content-center px-2">
            <a target='_blank' rel='noreferrer' href="/" className="inline-block my-btn colored-btn my-5 mx-auto text-center">download resume</a>
        </div>
        <Hr />
        <SmallTitle normal='MY' colored='SKILLS' />
        <Suspense fallback={<SkillSkeleton />}>
          <SkillsSection />
        </Suspense>
        <Hr />
        <SmallTitle normal='Experience &' colored='Education' />
        <Experience />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <TestimonialSection />
        <BlogsSection />
        <SubscriberSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}
