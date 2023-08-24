import Main from "../Main/Main";
import { Route, Routes, useNavigate} from 'react-router-dom';
import Formula from "../Formula/Formula";

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route
      path="/"
      element={<Main />}
      />
      <Route
      path="/ttk"
      element={<Formula />}
      />
      </Routes>
      
    </div>  
  );
}

export default App;
