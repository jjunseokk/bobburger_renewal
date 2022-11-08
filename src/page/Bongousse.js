import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import GalleryBox from '../component/GalleryBox';

const Bongousse = () => {



  return (
    <Container className='bongousse-container'>
      <div className='introduce-area'>
        <h3>시간 없는 일상! 든든한 한끼</h3>

        <h1>BONGOUSSE BOBBURGER</h1>
        <p>남녀노소, 학생, 어른 모두가 좋아하는 밥 <br />
          모든 사람들에게 사랑받는 봉구스 밥버거 입니다.</p>
        <div className='gallery_list'>
          <ul>
            <GalleryBox title="REASSURANCE" subTitle="든든하다" 
            text="밥 한 공기 반을 넣고 속 재료를 아낌없이 넣어 든든한 밥버거"/>
            <GalleryBox title="DELICIOUS" subTitle="맛있다"
            text="다양한 재료로 다양한 밥버거를 골라 먹을 수 있어 질리지 않는 맛"/>
            <GalleryBox title="RATIONAL" subTitle="합리적"
            text="유통과정을 최소화하여 최대한 저렴하고"
            text2="합리적인 가격에 제공"/>
            <GalleryBox title="FRIENDLY" subTitle="친숙하다"
            text="밥버거라는 이름으로 한국과 세계에서도"
            text2="친숙한로 친숙함 제공"/>
          </ul>
        </div>
      </div>
      <div className='bongousse-area'>
        <img src="http://www.bongousse.net/img/company/bongousse_img01.gif" alt="" />
        <p><strong>봉구스(Bongousse)</strong>는 맛있는 한입거리라는 뜻의 프랑스어입니다. <br /><br />
          봉구스밥버거는 어머니의 정성과 신세대의 입맛에 어우러진 '신개념 주먹밥'입니다<br />
          '영양'과 '맛'뿐만 아니라 '저렴한 가격'과 '든든함'으로 맛있는 한 끼를 제공하고자 합니다.</p>
      </div>
      <div className='bongousse-area'>
        <img src="http://www.bongousse.net/img/company/bongousse_img02.gif" alt="" />
        <p><strong>‘밥버거’</strong>라는 명칭은 글로벌화를 위해 만들어졌습니다. <br /><br />
          봉구스에서 만든 ‘밥버거’라는 명칭은 한국의 주먹밥에 국한되지 않고, 세계로 나아가기 위해 만들어진 단어입니다. 처음 밥버거라는 명칭을<br />
          사용하기 시작했을 때는 ‘햄버거에 밥이?’ 혹은 ‘밥으로 햄버거를?’ 이라며 의아해 하거나 헷갈려 하시는 손님들이 많았습니다.</p>
      </div>
      <div className='bongousse-area'>
        <img src="http://www.bongousse.net/img/company/bongousse_img03.gif" alt="" />
        <p><strong>밥버거</strong>는 주먹밥입니다. <br /><br />
          봉구스 밥버거는 정확한 정량으로는 밥 한 공기 반이 넘는 양으로 하나만 드셔도 충분히 배가 부릅니다.</p>
      </div>
      <div className='bongousse-area'>
        <img src="http://www.bongousse.net/img/company/bongousse_img04.gif" alt="" />
        <p><strong>많은 시행착오 끝에</strong> 만들어진 건강하고 맛좋은 밥버거입니다. <br /><br />
          봉구스밥버거는 처음에 시작하였을 때부터 가게를 내고 안정적으로 정착하기 까지 많은 시행착오를 거치며 맛이 더욱더 향상되었습니다.<br />
          그 이유는 차별화된 봉구네만의 요리법과 매일매일 공수하는 신선한 재료로 그날그날의 밥버거를 만들기 때문입니다. <br />
          이러한 건강하고 맛좋은 밥버거를 위한 정성스러운 신념이 젊은 세대를 넘어 어머님들께도 사랑받는 봉구스만의 비결입니다.</p>
      </div>

    </Container>
  )
}

export default Bongousse