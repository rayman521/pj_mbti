import { useNavigate } from "react-router-dom";

function Mbti_main(){
    let navigate = useNavigate();

    return(
        <div className='Mbti_main'>
        <h1>펭귄씨와 함께하는 심리검사</h1>
        <img src={process.env.PUBLIC_URL + '/img/3384750_57854.jpg'}/> 
        <span hidden>이미지 출처 : https://kr.freepik.com/free-vector/pinguin_3384750.htm#query=%ED%8E%AD%EA%B7%84&position=6&from_view=search&track=sph / 작가 rawpixel.com 출처 Freepik</span>
        <button onClick={()=>{navigate('/qs01')}}>시작하기</button>
        </div>
    )
}

export default Mbti_main;