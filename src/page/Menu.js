import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MenuCard from '../component/MenuCard';

const Menu = () => {
  
  const [productList, setProductList] = useState([]);
  const getProducts= async() => {
    let url = `http://localhost:5001/products`;
    let respanse = await fetch(url);
    let data = await respanse.json();
    setProductList(data);
    }


  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <Container className='menu-container'>
        <div className='imgArea'>
          <img className='topigImg' src="http://www.bongousse.net/img/menu/newimg/menu_topping_guide-20220901.png" alt=""/>
        </div>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3}>
              <MenuCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Menu