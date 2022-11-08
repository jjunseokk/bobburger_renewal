import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();

  const showFounded = () =>{
    navigate("/StartUpInquiry");
  }
  const showCompliment = () =>{
    navigate("/Compliment");
  }
  return (
    <Container className='service-container'>
      <div className='service-box'>
        <h3>창업문의</h3>
        <p>
          창업문의(가맹상담)을 원하실 경우 <br />
          [접수하기]를 클릭해주세요.
        </p>
        <button onClick={showFounded}>접수하기</button>
      </div>
      <div className='service-box'>
        <h3>칭찬하기</h3>
        <p>
          칭찬하기를 원하실 경우 <br />
          [접수하기]를 클릭해주세요.
        </p>
        <button onClick={showCompliment}>접수하기</button>
      </div>
      <div className='service-box'>
        <h3>고객의 소리</h3>
        <p>
          건의사항 및 불편사항을 원하실 경우 <br />
          [접수하기]를 클릭해주세요.
        </p>
        <button>접수하기</button>
      </div>
    </Container>
  )
}

export default Service