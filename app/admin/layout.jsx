'use client'
import { Dosis } from "next/font/google";
import "@/public/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/header.css'
import './assets/css/admin.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './components/Login';
import { AboutProvider } from '@/context/AboutContext'
import { AdminProvider, useAdminContext } from '@/context/AdminContext';
import { PortfolioProvider } from '@/context/PortfolioContext';
import { CategoryProvider } from '@/context/CategoryContext';
import { SkillProvider } from '@/context/SkillContext';
import { BlogProvider } from '@/context/BlogContext';
import { TestimonialProvider } from '@/context/TestimonialContext';
import { ContactProvider } from '@/context/ContactContext';
import { ServiceProvider } from '@/context/ServiceContext';
import { PricingProvider } from '@/context/PricingContext';
import { ExperienceProvider } from '@/context/ExperienceContext';
import { SubscriberProvider } from '@/context/SubscriberContext';

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
    // const { authentication, loading } = useAdminContext()
    // const loading = false;
    // const authentication = true;

    // if(loading){
    //     return <h1>Loading...</h1>
    // }

  return (
    <html lang="en">
      <body className={`${dosis.variable} antialiased`} >
        <AdminProvider>
          <PortfolioProvider>
            <CategoryProvider>
              <SkillProvider>
                <BlogProvider>
                  <TestimonialProvider>
                    <ContactProvider>
                      <ServiceProvider>
                        <PricingProvider>
                          <ExperienceProvider>
                            <AboutProvider>
                              <SubscriberProvider>
                                {/* {authentication ? <div className='fixed'>
                                    <Header />
                                    <div className="main-body">
                                        <Sidebar />
                                        {children}
                                    </div>
                                </div> : <Login />} */}
                                <div className='fixed'>
                                    <Header />
                                    <div className="main-body">
                                        <Sidebar />
                                        {children}
                                    </div>
                                </div> 
                              </SubscriberProvider>
                            </AboutProvider>
                          </ExperienceProvider>
                        </PricingProvider>
                      </ServiceProvider>
                    </ContactProvider>
                  </TestimonialProvider>
                </BlogProvider>
              </SkillProvider>
            </CategoryProvider>
          </PortfolioProvider>
        </AdminProvider>

      </body>
    </html>
  )
}
