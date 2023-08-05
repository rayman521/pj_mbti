import './App.css';
import { Routes,Route} from 'react-router-dom'; // 라우터
import  Qs01 from './component/Question_01'
import  Qs02 from './component/Question_02'
import Main from './component/Mbti_Main'

function App() {

  return (
        <div className="App">
            {/* 라우터 */}
          <Routes>
            <Route path='/' element={<><Main/></>}></Route>
            <Route path='/qs01' element={<><Qs01/></>}></Route>
            <Route path='/qs02' element={<><Qs02/></>}></Route>
            <Route path='/*' element={<><div>없는 페이지</div></>}></Route>
          </Routes>
          </div>
  );
}

export default App;
