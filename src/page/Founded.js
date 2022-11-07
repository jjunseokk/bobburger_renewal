import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Founded = () => {

  return (
    <Container className='Founded-container'>
      <div className='Founded-first-div'>
        <table className='Founded-table'>
          <tr className='Founded-tr-style'>
            <td>분류</td>
            <td>내용</td>
            <td>비용</td>
            <td>비고</td>
          </tr>
          <tr>
            <td className='table-style'>가입비</td>
            <td>(봉구스밥버거) 상호 및 상표 사용</td>
            <td className='red-color'>면제</td>
            <td></td>
          </tr>
          <tr>
            <td className='table-style'>상표사용료(로열티)</td>
            <td>상호, 상표사용료 및 경영지원에 대한 대가</td>
            <td>100,000/월</td>
            <td>매장별 매출, 면적 무관</td>
          </tr>
          <tr>
            <td className='table-style'>교육비</td>
            <td>조리교육, 위생교육, 마인드교육</td>
            <td>1,500,000</td>
            <td></td>
          </tr>
          <tr>
            <td className='table-style'>보증금</td>
            <td>계약이행보증금(계약종료시 반환)</td>
            <td id='none-padding'>
              <tr className='second-style'>
                <td className='table-style'>8평</td>
                <td className='table-style'>10평</td>
                <td className='table-style'>15평</td>
              </tr>
              <tr>
                <td>12,000,000</td>
                <td>15,000,000</td>
                <td>22,500,000</td>
              </tr>
            </td>
            <td>부가세 없음</td>
          </tr>
          <tr>
            <td className='table-style'>인테리어</td>
            <td>매장, 천정, 바닥, 내부전기,<br />조명, 벽, 수도, 설계 감리, 기본 붙박이장</td>
            <td>12,000,000	</td>
            <td>외부공사, 전기승압, 닥트시설, <br />
              외부샷시, 가스설비, 컨셉 외 시설,<br />
              화장실, 붙박이장(추가), 철거,<br />
              간판벽면 및 기둥공사,<br />
              소방시설 비용, 야간공사,냉난방,<br />
              기본 컨셉 외 옵션, 기타별도</td>
          </tr>
          <tr>
            <td className='table-style'>주방기기(집기)</td>
            <td>작업대, 가스레인지, 전기밥솥,<br />
              싱크대, 냉장고, 온장고, 전자레인지,<br />
              주방집기, 의자, 탁자 등</td>
            <td>6,400,000</td>
            <td>기본 주방기기(집기)외 추가시,<br />
              별도 비용 발생</td>
          </tr>
          <tr>
            <td className='table-style'>홍보물</td>
            <td>간판, 인쇄물, 메뉴판, 배너 등</td>
            <td>5,900,000</td>
            <td></td>
          </tr>
          <tr>
            <td className='table-style'>기타</td>
            <td>앞치마, 유니폼, 라벨기, 라벨함</td>
            <td>1,200,000</td>
            <td></td>
          </tr>
          <tr className='bottom-color'>
            <td colSpan={2}>초기비용</td>
            <td id='none-padding'>
              <tr className='second-style'>
                <td>8평</td>
                <td>10평</td>
                <td>15평</td>
              </tr>
              <tr>
                <td>30,100,000</td>
                <td>33,100,000</td>
                <td>40,600,000</td>
              </tr>
            </td>
            <td>부과세(VAT 별도) <br />
              가입비, 교육비, 상표사용료,<br />
              보증금 포함</td>
          </tr>
        </table>
        <p></p>
      </div>
    </Container>
  )
}

export default Founded