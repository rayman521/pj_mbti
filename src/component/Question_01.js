import { useNavigate } from "react-router-dom";

//첫번쨰 질문
function Question_01() {

    let navigate = useNavigate();

    return(   
<div className="Qs_content">
    <div className="qsList"><p>1번 질문 <input type="checkbox" name="hobby" value="movie" /></p></div>
    <div className="qsList"><p>2번 질문 <input type="checkbox" name="hobby" value="movie" /></p></div>
    <div className="qsList"><p>3번 질문 <input type="checkbox" name="hobby" value="movie" /></p></div>
    <div className="qsList"><p>4번 질문 <input type="checkbox" name="hobby" value="movie" /></p></div>
    <button onClick={()=>{navigate('/qs02')}}>다음으로</button>
</div>
    )

}

export default Question_01;