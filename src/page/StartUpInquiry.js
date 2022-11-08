import { faBookOpenReader, faBullhorn, faCamera, faClipboard, faClock, faCubes, faDesktop, faHeadset, faHouseCircleCheck, faLocationDot, faPenToSquare, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CircleArea from '../component/CircleArea'


const StartUpInquiry = () => {

    let city = ["시/도", "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도",  "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상남도", "경상북도",  "제주특별자치도", ]
    let seoul = [
        "강동구", "송파구", "강남구", "서초구", "관악구", "동작구", "영등포구", "금천구", "구로구", "강서구", "양천구", "마포구", "서대문구", "은평구", "노원구", "도봉구", "강북구", "성북구", "중랑구", "동대문구", "광진구", "성동구", "용산구", "중구", "종로구",
    ]
    let busan = [
        "기장군", "사상구", "수영구", "연제구", "강서구", "금정구", "사하구", "해운대구", "북구", "남구", "동래구", "부산진구", "영도구", "동구", "서구", "중구",
    ]
    let deagu = [
        "달성군", "달서구", "수정구", "북구", "남구", "서구", "동구", "중구"
    ]
    let incheon = [
        "옹진군", "강화군", "서구", "계양구", "부평구", "남동구", "연수구", "미추홀구", "동구", "중구",
    ]
    let gwangjuMetropolitan = [
        "광산구", "북구", "남구", "서구", "동구",
    ]
    let deajeon = [
        "대덕구", "유성구", "서구", "중구", "동구",
    ]
    let ulsan = [
        "울주군", "북구", "동구", "남구", "중구",
    ]
    let sejong = [
        "반곡동", "소담동", "대평동", "보람동", "고운동", "종촌동", "아름동", "해밀동", "도담동", "다정동", "새롬동", "한솔동", "소정면", "전동면", "전의면", "연서면", "장군면", "금남면", "부강면", "연동면", "연기면", "조치원읍",
    ]
    let gyeonggido = [
        '고양시 덕양구', '고양시 일산구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시 소사구', '부천시 오정구', '부천시 원미구', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 장안구', '수원시 팔달구', '시흥시', '안산시 단원구', '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '하남시', '화성시', '가평군', '양주군', '양평군', '여주군', '연천군', '포천군'
    ]
    let gangwondo = [
        "양양군", "고성군", "인제군", "양구군", "화천군", "철원군", "정선군", "평창군", "영월군", "횡성군", "홍천군", "삼척시", "속초시", "태백시", "동해시", "강릉시", "원주시", "춘천시",
    ]
    let chungbuk = [
        "단양군", "음성군", "괴산군", "진천군", "증평군", "영동군", "옥천군", "보은군", "제천시", "충주시", "청주시 청원구", "청주시 흥덕구", "청주시 서원구", "청주시 상당구", "청주시",
    ]

    let chungnam = [
        "태안군", "예산군", "홍성군", "청양군", "서천군", "부여군", "금산군", "당진시", "계롱시", "논산시", "서산시", "아산시", "보령시", "공주시", "천한시 서북구", "천안시 동남구", "천안시"
    ]
    let jeonbuk = [
        "부안군", "고창군", "순창군", "임실군", "장수군", "무주군", "진안군", "완주군", "김제시", "남원시", "정읍시", "익산시", "군산시", "전주시 덕진구", "전주시 완산구", "전주시"
    ]
    let jeonnam = [
        "신안군", "진도군", "완도군", "장성군", "영광군", "함평군", "무안군", "영암군", "해남군", "강진군", "장흥군", "화순군", "보성군", "고흥군", "구례군", "곡성군", "담양군", "광양시", "나주시", "순천시", "여수시","목포시"
    ]
    let gyeongbuk = [
        "울릉군", "울진군", "봉화군", "예천군", "칠곡군", "성주군", "고령군", "청도군", "영덕군", "영양군", "청송군", "의성군", "군위군", "경산시", "문경시", "상주시", "영천시", "영주시", "구미시", "안동시", "김천시", "경주시", "포항시 북구", "포항시 남구", "포항시"
    ]
    let gyeongnam = [
        "함천군", "거창군", "함양군", "산청군", "하동군", "남해군", "고성군", "창녕군", "함안군", "의령군", "양산시", "거제시", "밀양시", "김해시", "사천시", "통영시", "진주시", "창원시 진해구", "창원시 마산회원구", "창원시 마산합포구", "창원시 성산구", "창원시 의창구", "창원시"
    ]   
    let jeju = [
        "서귀포시", "제주시"
    ]


    
    const [Selected, setSelected] = useState("시/도");
    const showSelect = (e) => {
        let add=0;
        setSelected(e.target.value);
        const Option = document.getElementById("modal");
        console.log(Selected);
        if(e.target.value === "서울특별시"){
            add = seoul;
        } else if(e.target.value === "부산광역시"){
            add = busan;
        } else if(e.target.value === "대구광역시"){
            add = deagu;
        } else if(e.target.value === "인천광역시"){
            add = incheon;
        } else if(e.target.value === "광주광역시"){
            add = gwangjuMetropolitan;
        } else if(e.target.value === "대전광역시"){
            add = deajeon;
        } else if(e.target.value === "울산광역시"){
            add = ulsan;
        } else if(e.target.value === "세종특별자치시"){
            add = sejong;
        } else if(e.target.value === "경기도"){
            add = gyeonggido;
        } else if(e.target.value === "강원도"){
            add = gangwondo;
        } else if(e.target.value === "충청북도"){
            add = chungbuk;
        } else if(e.target.value === "충청남도"){
            add = chungnam;
        } else if(e.target.value === "전라북도"){
            add = jeonbuk;
        } else if(e.target.value === "전라남도"){
            add = jeonnam;
        } else if(e.target.value === "경상북도"){
            add = gyeongbuk;
        } else if(e.target.value === "경상남도"){
            add = gyeongnam;
        } else if(e.target.value === "제주특별자치도"){
            add = jeju;
        } 
        Option.options.length = 1;

        for (let i=0; i<add.length; i++) {
            // console.log(add[select]);
            let opt = document.createElement("option");
            opt.value = add[i];
            opt.innerHTML = add[i];
            Option.append(opt);
            
        } 
    }
    const show = () =>{
        alert("문의가 완료되었습니다.")
    }

    return (
        <Container>
            <div className='img-box'>
                <div className='first-box'>
                    <CircleArea icon={faPhone}
                        text="STEP1. 가맹 상담" />
                    <CircleArea icon={faLocationDot}
                        text="STEP2. 입지선정" />
                    <CircleArea icon={faPenToSquare}
                        text="STEP3. 가맹계약" />
                    <CircleArea icon={faClipboard}
                        text="STEP4. 점포계약" />
                    <CircleArea icon={faCubes}
                        text="STEP5. 인테리어" />
                </div>
                <div className='second-box'>
                    <CircleArea icon={faBookOpenReader}
                        text="STEP6. 운영교육" />
                    <CircleArea icon={faBullhorn}
                        text="STEP7. 오픈 홍보" />
                    <CircleArea icon={faHouseCircleCheck}
                        text="STEP8. 매장 오픈!" />
                    <CircleArea icon={faCamera}
                        text="STEP9. 지속적관리" />
                    <div className='circle-area'>
                        <div className='circle-icon-black'>
                            <img src={process.env.PUBLIC_URL + "/img/img_burger01.png"} alt="" />
                        </div>
                        <p>Bongousse</p>
                    </div>
                </div>
            </div>
            <div className='text-box'>
                <div className='text-icon'>
                    <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div className='text'>
                    <p style={{ fontSiz: "30px" }}>문의 전화 안내</p>
                    <p>봉구스밥버거 창업에 관심을 가져주셔서 감사합니다.</p>
                    <p>전화 문의를 주시면 친절히 답변 드리겠습니다.</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 1661-5094</p>
                    <p><FontAwesomeIcon icon={faClock} /> 오전 09시 ~ 오후 18시 (평일)</p>
                </div>
                <div className='text-icon'>
                    <FontAwesomeIcon icon={faDesktop} />
                </div>
                <div className='text'>
                    <p style={{ fontSiz: "30px" }}>온라인 문의 안내</p>
                    <p>봉구스밥버거 창업에 관심을 가져주셔서 감사합니다.</p>
                    <p>원활한 상담을 위해 최소한의 개인정보를 수집하고 있습니다.</p>
                </div>
                <table className='StartUp-table'>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" className='input-style' name="title" id='title' /></td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td><input type="text" className='input-style' name="name" id='name' /></td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td><input type="tel"className='input-style' name="phonenumber" id="phonenumber" title="전화번호를 입력하세요." placeholder="000-0000-0000" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" maxlength="13"/></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><input type="email" className='input-style' name="email" id='email' /></td>
                        </tr>
                        <tr>
                            <th>지역</th>
                            <td>
                                <select name="h_area1" onChange={showSelect} value={Selected} className="one-select">
                                    {city.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <select name="h_area2" id='modal'>
                                    <option className='option'>시/군/구</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea rows="5" cols="35"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <button className='StartUpInquiry-button'onClick={show} type="submit">문의하기</button>
            </div>
        </Container>
    )
}

export default StartUpInquiry