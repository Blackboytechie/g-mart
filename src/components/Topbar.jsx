import React ,{useState}from 'react'

import'./side.css';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
function Topbar() {


  const [sidebar,setSidebar]=useState(false);

  const showsidebar =() => setSidebar(!sidebar);
  
  return (
    <>
    <div className='page'>
    <div className='navbar' >
      <Link to='/' className="menu-bar">
         <FaIcons.FaBars onClick={showsidebar} className='iconn' /> <h3 className='logo'>GMart</h3> 
      </Link>
    </div>
   
    <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}  >
    <div className='side-main'  >
      <div className="header">
         <div className='first'> 
            <div className=''onClick={showsidebar} ><button  className='btn first'> <img  width= '21'  height= '21' src="https://img.icons8.com/ios-filled/50/FFFFFF/back.png" alt="back"/> </button></div>
              <div className='hello'> <h3>Hello!</h3></div>
         </div>
           <div className='sign'>
           <Link to='/signup' onClick={showsidebar}> <button className='btn second'>Sign In</button></Link> 
           </div>
      </div>
        <div className='content-section'>
          <div className='nav-section'>
            <ul className='nav-section-list' onClick={showsidebar}>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/'>
                  <img className='icon jm'   src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/0078ad/external-home-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="home"/>
                  <span className='nav-section-list-title'>Home</span>
                  </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
              <Link className='d' to='/shop-by-category'>
                <img className='icon jm' width="24" height="24"src="https://img.icons8.com/sf-black/64/0078ad/bulleted-list.png" alt="bulleted-list"/>
                  <span className='nav-section-list-title'>Shop By category</span>
                  </Link>
              </li>
            </ul>
          </div>
          <div className='nav-section'>
            <div className='nav-section-title'>My Account</div>
            
            <ul className='nav-section-list' onClick={showsidebar}>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/my-order'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/external-flat-icons-inmotus-design/67/0078ad/external-box-box-flat-icons-inmotus-design-3.png" alt="external-box-box-flat-icons-inmotus-design-3"/>
                  <span className='nav-section-list-title'>My Orders</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/my-list'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/tasklist.png" alt="tasklist"/>
                  <span className='nav-section-list-title'>My List</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/wishlist'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/like--v1.png" alt="like--v1"/>
                  <span className='nav-section-list-title'>Wishlist</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/jiomart-wallet'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/0078ad/external-cash-e-commerce-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png" alt="cash"/>
                  <span className='nav-section-list-title'>JioMart Wallet</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav-section'>
            <div className='nav-section-title'>Offer & More</div>
            
            <ul className='nav-section-list' onClick={showsidebar}>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/offer-store'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/glyph-neue/64/0078ad/discount.png" alt="discount"/>
                  <span className='nav-section-list-title'>Offer Store</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/coupon-store'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/loyalty-card.png" alt="loyalty-card"/>
                  <span className='nav-section-list-title'>Coupon Store</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/gift-store'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/glyph-neue/64/0078ad/gift.png" alt="gift"/>
                  <span className='nav-section-list-title'>Gift Store</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav-section'>
            <div className='nav-section-title'>Help & Support</div>
            
            <ul className='nav-section-list' onClick={showsidebar}>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/faq'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/ask-question.png" alt="ask-question"/>
                  <span className='nav-section-list-title'>FAQs/Need Help</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/about-us'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/sf-black-filled/64/0078ad/conference-call.png" alt="conference-call"/>
                  <span className='nav-section-list-title'>About Us</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/contact-us'>
                  <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/phone-message.png" alt="phone-message"/>
                  <span className='nav-section-list-title'>Contact Us</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/guide'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/compass--v1.png" alt="compass--v1"/>
                  <span className='nav-section-list-title'>Guide</span>
                </Link>
              </li>
              <li className='nav-section-list-item divider-h'>
                <Link className='d' to='/caution-notice'>
                <img className='icon jm' width={24} height={24} src="https://img.icons8.com/ios-filled/50/0078ad/spam.png" alt="spam"/>
                  <span className='nav-section-list-title'>Caution Notice</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='bottom-section'>
          <div className='app-section divider'>
            <div className='app-section-title'>Download the App</div>
            <div className='app-section-item' >
              <a  className='jm img-1' href='https://play.google.com/store/apps/details?id=com.jpl.jiomart' aria-label='google playstore' onClick={showsidebar}>
               <img src='https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg'/>
              </a>
              <a className='jm' href='https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683' aria-label='apple store' onClick={showsidebar}>
              <img src='https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg'/>
              </a>
            </div>
          </div>
          <div className='info-section text'>
            <div className='info-section-item'>
            Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, 
            billing errors or other problems on the website, please email us on 
            <a className='text-link' href='mailto:cs@jiomart.com' onClick={showsidebar}>cd@gmart.com</a>
            </div>
          </div>
        </div>
    </div>
    </nav>
    </div>
    </>
  )
}

export default Topbar