import { Container } from 'react-bootstrap';
import Map from '../component/Map';

const Loadmap = () => {

const NaverLoadMap = "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%85%B8%ED%95%B4%EB%A1%9C%20391%206%EC%B8%B5%201%ED%98%B8(%EC%B0%BD%EB%8F%99,%20%EB%84%A4%EB%84%A4%EB%B9%8C%EB%94%A9)/address/14143323.101145793,4530500.317214353,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%85%B8%ED%95%B4%EB%A1%9C%20391,new?c=14143296.1029454,4530498.8539059,19,0,0,0,dh&isCorrectAnswer=true"
const KakaoLoadMap = "http://kko.to/DdM9ecnamR"

  return (
    <Container className='Loadmap-container'>
      <div className='Loadmap-text'>
        <h4>봉구스밥버거 본사 오시는길</h4>
        <h1>Bongousse Head Office</h1>
        <p>서울특별시 도봉구 노해로 391 6층 1호(창동, 네네빌딩)</p>
        <h2>Tel : 1661-5094</h2>
        <h2>Fax : 02-2051-5094</h2>
        <button className='Loadmap-btn' onClick={()=>{window.open(NaverLoadMap)}}>네이버 지도</button>
        <button className='Loadmap-btn' onClick={()=>{window.open(KakaoLoadMap)}}>카카오 지도</button>
      </div>
      <div>
        <Map/>
      </div>
    </Container>
  )
}

export default Loadmap