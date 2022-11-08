import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import FooterBox from './FooterBox'
const Footer = () => {
    const facebookUrl = "https://www.facebook.com/qkqqjrj"
    const youtubeUrl = "https://www.youtube.com/channel/UC5iFrCFDGBlz91LUXgcuS8w"

    const [closeModal, setCloseModal] = useState(false);

    const showBtn = () =>{
        setCloseModal(true);
    }
    const closeBtn =() =>{
        setCloseModal(false);
    }
  return (
    <div className='footer'>
        <Container className='footer-container'>
            <div className='first-area'>
                <div className='img-area'>
                    <img className='footerLogo' src={process.env.PUBLIC_URL + "/img/bob_logo.png"} alt=""/>
                    <img className='snsBtnStyle' onClick={()=>{window.open(facebookUrl)}} src="https://cdn-icons-png.flaticon.com/128/665/665209.png" alt="" />
                    <img className='snsBtnStyle' onClick={()=>{window.open(youtubeUrl)}} src="https://cdn-icons-png.flaticon.com/128/4628/4628711.png" alt="" />
                </div>
                <div className='text-area'>
                    <h6>(주)부자이웃</h6>
                    <p>대표 : 현광식 전화 : 1661-5094 팩스 : 02-2051-5094 메일 : bongousse1000@nate.com</p>
                    <p>서울특별시 도봉구 노해로 391 6층 1호(창동, 네네빌딩) 사업자번호 : 124-87-40615</p>
                    <p className='clickBtn' onClick={showBtn}>개인정보 처리방침</p>
                </div>
            </div>
            <div className='second-area'>
                <FooterBox img={process.env.PUBLIC_URL + "/img/footer-img08.gif"} 
                text="매일경제 주최 2015" text2="100대 프렌차이즈 선정"/>
                <FooterBox img={process.env.PUBLIC_URL + "/img/footer-img01.gif"} 
                text="2013 대한민국 대표" text2="우수기업 인증"/>
                <FooterBox img={process.env.PUBLIC_URL + "/img/footer-img02.gif"} 
                text="2014" text2="우수프랜차이즈"/>
                <FooterBox img={process.env.PUBLIC_URL + "/img/footer-img04.gif"} 
                text="소상공인진흥공단" text2="동반성장 우수기업 선정"/>
                <FooterBox img={process.env.PUBLIC_URL + "/img/footer-img07.gif"} 
                text="특허청" text2="주먹밥 배달업등 15건"/>
            </div> 
        </Container>

        {/* -----------모달--------------- */}
        <div className={closeModal? 'footer-modal-bg active':'footer-modal-bg'}>
            <div className='footer-modal'>
                <h5>개인정보취급방침</h5>
                <div className='close-button' onClick={closeBtn}>
                    <FontAwesomeIcon icon={faX} />
                </div>
                <p>개인정보수집 범위 : 이름, 연락처 <br/>
                    개인정보수집 및 이용목적 : 온라인 문의 및 상담 자료와 결과 회신<br/>
                    * 매장과 관련된 CS의 경우, 해결 과정 안내 혹은 결과 회신을 위해 매장 관리자(슈퍼바이저,매장점주), 본사 유관부서가 연락을 드릴 수 있습니다.

                    개인정보수집 및 보유기간 : 개인정보 수집 및 이용에 대한 목적이 달성되면 지체없이 파기하며 최대 보유기간은 1년을 넘기지 아니한다.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer