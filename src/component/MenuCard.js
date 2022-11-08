import React, { useState } from 'react'

const MenuCard = ({item}) => {

  const [showCard, setShowCard] = useState(false);

  const show = () =>{
    setShowCard(true)
  }
  const notShow = () =>{
    setShowCard(false)
  }

  return (
  
    <div>
        <div className={showCard? "card-area active" : "card-area"}onMouseOver={show} onMouseLeave={notShow}>
            <div className={showCard? "cardText active" : "cardText"}>
              <img className='imgStyle' src={process.env.PUBLIC_URL + item?.img} alt=""/>
              <div className='titleFont'>{item?.title}</div>
              <div className='subTitleFont'>{item?.subTitle}</div>
              <div>{item?.text}</div>
              <div>{item?.price.toLocaleString()}원</div>
              <div className='bestFont'>{item?.best === true? "베스트메뉴" : <br/>}</div>
            </div>
            <div className={showCard? "hover-card active" : "hover-card"}>
              <h3>칼로리 성분표</h3>
              <h6>가맹점별로 차이가 있을 수 있습니다.</h6>
              <p>칼로리(Kcal/100g) : {item?.kcal}</p>
              <p>탄수화물(g/100g) : {item?.carbohydrate}</p>
              <p>단백질(g/100g) : {item?.protein}</p>
              <p>포화지방(g/100g) : {item?.saturatedFat}</p>
              <p>나트륨(mg/100g) : {item?.salt}</p>
              <p>당류(%) : {item?.sugars}</p>
            </div>
        </div>
    </div>

  )
}

export default MenuCard