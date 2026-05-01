'use client'
import { Dosis } from "next/font/google";
import "@/public/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/header.css'
import './assets/css/admin.css'
import { AboutProvider } from '@/context/AboutContext'
import { AdminProvider } from '@/context/AdminContext';
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

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Base from "./Base";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${dosis.variable} antialiased`} >
        <ToastContainer />
        
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

                                {/* <div className='fixed'>
                                  <Header />
                                  <div className="main-body">
                                      <Sidebar />
                                      <div className="main-body-container">
                                          {children}
                                      </div>
                                  </div>
                                </div> */}

                                <Base>
                                  {children}
                                </Base>

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
