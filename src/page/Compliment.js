import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Compliment = () => {

    let navigate = useNavigate();

    const showSubmit = () =>{
        alert("접수가 완료되었습니다.");
        navigate("/Service")
    }
    return (
        <Container className='compliment-container'>
            <table>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" className='input-style' name="title" id='title' /></td>
                    </tr>
                    <tr>
                        <th>가맹점</th>
                        <td><input type="text" className='input-style' name="name" id='name' /></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea rows="10" cols="35"></textarea></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><input type="file" name=""/></td>
                    </tr>
                </tbody>
            </table>
            <button className='comliment-button' type="submit" onClick={showSubmit}>접수하기</button>
        </Container>
    )
}

export default Compliment