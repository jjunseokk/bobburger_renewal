import { faBars, faHamburger, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [mouseHover, setMouseHover] = useState(false);

  const overHandle = () => {
    setMouseHover(true);
  }
  const leaveHandle = () => {
    setMouseHover(false);
  }
  const [ShowMenu, setShowMeun] = useState(false);

  const closeMenu = () =>{
    setShowMeun(false);
  }

  const showMenu =() =>{
    setShowMeun(true);
  }
  const [OpenMenu, setOpenMenu] = useState(false);
  const [OpenMenu1, setOpenMenu1] = useState(false);

  const openMenu = () =>{
    setOpenMenu(OpenMenu => !OpenMenu);
  }
  const openMenu1 = () =>{
    setOpenMenu1(OpenMenu1=> !OpenMenu1)
  }
  const facebookUrl = "https://www.facebook.com/qkqqjrj"
  const youtubeUrl = "https://www.youtube.com/channel/UC5iFrCFDGBlz91LUXgcuS8w"

  return (
    <div className={mouseHover ? "navbar active" : "navbar"} >
      <Link to="/"><img className='logo' src={process.env.PUBLIC_URL + "/img/bob_logo.png"} alt="" /></Link>
      <nav className='topMenu'>
        <ul className="mainNav" onMouseOver={overHandle} onMouseLeave={leaveHandle}>
          <li className='link-style'><Link to="/Bongousse">회사 소개</Link>
            <ul className={mouseHover ? "subMenu active" : "subMenu"}>
              <li><Link to="/Bongousse">봉구스 밥버거</Link></li>
              <li><Link to="/Loadmap">오시는 길</Link></li>
            </ul>
          </li>
          <li className='link-style'><Link to="/Menu">메뉴 안내</Link></li>
          <li className='link-style'><Link to="/Founded">창업 안내</Link>
            <ul className={mouseHover ? "subMenu active" : "subMenu"}>
              <li><Link to="/Founded">창업 비용</Link></li>
              <li><Link to="/StartUpInquiry" >창업 문의</Link></li>
            </ul>
          </li>
          <li className='link-style'><Link to="/Service">고객 센터</Link></li>
        </ul>
      </nav>

      <div className={ShowMenu?'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-menu-ul'>
          <li className='mobile-menu-li' onClick={openMenu}>회사 소개
            <ul className={OpenMenu? 'mobile-submenu-ul active':'mobile-submenu-ul'}>
              <li><Link to="/Bongousse">봉구스 밥버거</Link></li>
              <li><Link to="/Loadmap">오시는 길</Link></li>
            </ul>
          </li>
          <li className='mobile-menu-li'><Link to="/Menu">메뉴 안내</Link></li>
          <li className='mobile-menu-li' onClick={openMenu1}>창업 안내
            <ul className={OpenMenu1? 'mobile-submenu-ul active':'mobile-submenu-ul'}>
              <li><Link to="/Founded">창업 비용</Link></li>
              <li><Link to="/StartUpInquiry" >창업 문의</Link></li>
            </ul>
          </li>
          <li className='mobile-menu-li'><Link to="/Service">고객 센터</Link></li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faX} className={ShowMenu? "faX active":"faX"} onClick={closeMenu}/>
      <div className='snsBtn'>
        <img onClick={() => { window.open(facebookUrl) }} src="https://cdn-icons-png.flaticon.com/128/665/665209.png" alt="" />
        <img onClick={() => { window.open(youtubeUrl) }} src="https://cdn-icons-png.flaticon.com/128/4628/4628711.png" alt="" />
        <FontAwesomeIcon icon={faBars} className={ShowMenu?"faBars active":"faBars"} onClick={showMenu}/>
      </div>
    </div>
  )
}

export default Navbar
