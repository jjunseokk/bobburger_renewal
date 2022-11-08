import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

const Section = () => {

  // 스크롤 이벤트
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장

    //-- 밥버거이미지--------------------------------
    if (ScrollY > 400) {
      // 400 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 400 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
    // -- 텍스트--------------------------------------
    if (ScrollY > 600) {
      // 이미지가 600이상이면 이미지가 보이게
      setImgAnimation(true);
    } else {
      setImgAnimation(false);
    }
  }
  // ---콜솔출력-----------------------------------------
  useEffect(() => {
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY])

  // ---함수-----------------------------------------
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })


  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const [ImgAnimation, setImgAnimation] = useState(false); // 이미지 상태

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    setImgAnimation(false); //ImgAnimation 값을 false => 이미지 옆으로 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  // 메뉴 더보기 버튼
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/Menu");
  }

  return (
    <div className='outer'>
      <div className='section1'>
        <div className='section1-text'>
          <h1>우리는 봉구스밥버거 입니다.</h1>
          <p>한국인의 다양한 입맛을 위해 <br/>
            든든한 한끼를 위해 <br/>
            합리적인 소비를 위해 <br/>
            우리는 봉구스밥버거 입니다.
            </p>
        </div>
        <div className='video-area'>
          <iframe width="1000" height="500" src="https://www.youtube.com/embed/X24YQWfSZn8?amp;autoplay=1&mute=1&amp;playlist=X24YQWfSZn8&amp;loop=1" title="[봉구스밥버거] 우리는 봉구스밥버거입니다." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className='section2'>
        <div className='imgArea'>
          <img className={ImgAnimation ? "img1 active" : "img1"} src="https://www.bongousse.net/img/menu/img_burger01.png" alt="" />
          <img className={ImgAnimation ? "img2 active" : "img2"} src="https://www.bongousse.net/img/menu/img_burger04.png" alt="" />
        </div>
        <div className={ImgAnimation ? "textArea active" : "textArea"}>
          <h1>바쁜 일상에 <br /> <span>베스트 메뉴 하나</span></h1>
          <p>온가족이 믿고 먹을 수 있는 <br />
            국민 봉구스밥버거</p>
          <p>바쁜 일상으로 밥먹을 시간도 부족한 학생, 직장인 <br />
            저희 봉구스 밥버거 메뉴로 든든한 하루를 시작하세요</p>

          <button className='menuBtn' onClick={navigateToMenu}>메뉴 더보기</button>
        </div>
      </div>
      <button className={BtnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}><FontAwesomeIcon icon={faChevronUp} /></button>
    </div>
  )
}

export default Section