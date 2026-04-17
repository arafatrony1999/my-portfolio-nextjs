import { FaAssistiveListeningSystems, FaBell, FaCode, FaDesktop, FaEnvelope, FaMoneyBillAlt, FaPencilAlt, FaStar, FaThList, FaUser, FaAdn, FaGlobe, FaRegIdCard } from "react-icons/fa";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { useContactContext } from '../../context/ContactContext';
import { useServiceContext } from '../../context/ServiceContext';
import { useSubscriberContext } from '../../context/SubscriberContext';
import { BsBoxArrowRight } from 'react-icons/bs';
import { useAdminContext } from '../../context/AdminContext';
import Link from 'next/link'

const Sidebar = () => {
    const { unseen } = useContactContext()
    const { unseenService } = useServiceContext()
    const { unseenSubscriber } = useSubscriberContext()
    const { logout, menuOpen, removeSidebar } = useAdminContext()

    return (
        <div className={ menuOpen ? 'side-bar active' : 'side-bar'}>
            <div className="side-menu-title">Menu</div>
            <ul>
                <li>
                    <Link href='/admin' onClick={removeSidebar}>
                        <div className='sidebar-icon'>
                            <FaUser />
                        </div>
                        <div className='sidebar-name'>Dashboard</div>
                    </Link>
                    
                    <Link href='/' onClick={removeSidebar}>
                        <div className='sidebar-icon'>
                            <FaGlobe />
                        </div>
                        <div className='sidebar-name'>Main Website</div>
                    </Link>
                </li>
            </ul>
            
            <div className="side-menu-title">Manage Data</div>
            <ul>
                <li>
                    <MDBAccordion borderless='true' >
                        <MDBAccordionItem collapseId={1}
                        headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaDesktop />
                                </div>
                                <div className='sidebar-name'>Portfolios</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <Link href='/admin/portfolios' onClick={removeSidebar}>
                                        <div className='sidebar-name'>All Portfolios</div>
                                    </Link>
                                    <Link href='/admin/portfolios/add' onClick={removeSidebar}>
                                        <div className='sidebar-name'>Add Portfolio</div>
                                    </Link>
                                </div>
                            </div>
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={2} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaThList />
                                </div>
                                <div className='sidebar-name'>Categories</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <Link href='/admin/categories' onClick={removeSidebar}>
                                        <div className='sidebar-name'>All Categories</div>
                                    </Link>
                                    <Link href='/admin/categories/add' onClick={removeSidebar}>
                                        <div className='sidebar-name'>Add Categories</div>
                                    </Link>
                                </div>
                            </div>
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={3} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaCode />
                                </div>
                                <div className='sidebar-name'>Skills</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <Link href='/admin/skills' onClick={removeSidebar}>
                                        <div className='sidebar-name'>All Skills</div>
                                    </Link>
                                    <Link href='/admin/skills/add' onClick={removeSidebar}>
                                        <div className='sidebar-name'>Add Skill</div>
                                    </Link>
                                </div>
                            </div>
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={4} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaPencilAlt />
                                </div>
                                <div className='sidebar-name'>Blogs</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <button onClick={removeSidebar} to='blogs'>
                                        <div className='sidebar-name'>All Blogs</div>
                                    </button>
                                    <button onClick={removeSidebar} to='blogs/add'>
                                        <div className='sidebar-name'>Add Blogs</div>
                                    </button>
                                </div>
                            </div>
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={5} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAssistiveListeningSystems />
                                </div>
                                <div className='sidebar-name'>Testimonials</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <button onClick={removeSidebar} to='testimonials'>
                                        <div className='sidebar-name'>All Testimonials</div>
                                    </button>
                                    <button onClick={removeSidebar} to='testimonials/add'>
                                        <div className='sidebar-name'>Add Testimonials</div>
                                    </button>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={6} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaMoneyBillAlt />
                                </div>
                                <div className='sidebar-name'>Pricing</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <button onClick={removeSidebar} to='pricing'>
                                        <div className='sidebar-name'>All Pricing list</div>
                                    </button>
                                    <button onClick={removeSidebar} to='pricing/add'>
                                        <div className='sidebar-name'>Add Pricing</div>
                                    </button>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={7} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaStar />
                                </div>
                                <div className='sidebar-name'>Experience</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <button onClick={removeSidebar} to='experience'>
                                        <div className='sidebar-name'>All Experience list</div>
                                    </button>
                                    <button onClick={removeSidebar} to='experience/add'>
                                        <div className='sidebar-name'>Add New Experience</div>
                                    </button>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem collapseId={8} headerTitle={
                            <>
                                <div className='sidebar-icon'>
                                    <FaAdn />
                                </div>
                                <div className='sidebar-name'>About</div>
                            </>
                        }>
                            <div className="btn-toggle-items">
                                <div className="btn-toggle-left"></div>
                                <div className="btn-toggle-right">
                                    <Link href='/admin/about' onClick={removeSidebar}>
                                        <div className='sidebar-name'>All About list</div>
                                    </Link>
                                    <Link href='/admin/about/add' onClick={removeSidebar}>
                                        <div className='sidebar-name'>Add New About</div>
                                    </Link>
                                </div>
                            </div>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </li>
            </ul>
            
            <div className="side-menu-title">Notifications</div>
            <ul>
                <li>
                    <Link href='/contacts' onClick={removeSidebar} to='contacts'>
                        <div className='sidebar-icon'>
                            <FaBell />
                        </div>
                        <div className='sidebar-name'>Contacts</div>
                        {
                            unseen !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                {unseen}
                            </div>
                        }
                    </Link>

                    <Link href='/service_requests' onClick={removeSidebar}>
                        <div className='sidebar-icon'>
                            <FaEnvelope />
                        </div>
                        <div className='sidebar-name'>Service Requests</div>
                        {
                            unseenService !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                { unseenService }
                            </div>
                        }
                    </Link>
                    
                    <Link href='/subscribers' onClick={removeSidebar}>
                        <div className='sidebar-icon'>
                            <FaRegIdCard />
                        </div>
                        <div className='sidebar-name'>Subscribers</div>
                        {
                            unseenSubscriber !== 0 &&
                            <div className="contact-badge" style={{marginLeft: 'auto', marginRight: '10px', background: 'red'}}>
                                { unseenSubscriber }
                            </div>
                        }
                    </Link>
                </li>
            </ul>

            <div className="side-menu-title">Account</div>
            <ul>
                <li>
                    <button onClick={logout}>
                        <div className='sidebar-icon'>
                            <BsBoxArrowRight />
                        </div>
                        <div className='sidebar-name'>Logout</div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar