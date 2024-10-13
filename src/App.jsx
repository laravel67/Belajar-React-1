
import './App.css'
import './components/Article';
// import Article from './components/Article';
// import Home from './pages/Home';
import { globalContex } from './context';
import { router } from './routes/Index';
import { RouterProvider } from 'react-router-dom';

function App() {
  // const value=true;
  const user={
    username:"murtaki"
  };

  return (
    <div>
    <globalContex.Provider value={user}>
       <RouterProvider router={router}></RouterProvider>
    </globalContex.Provider>
        {/* <Article name="Murtaki" mapels={["Bahasa Arab", 'Nahwu']}/>
        <Article name="Shihab" mapels={["Bahasa Inggris", 'MTK']}/> */}
        {/* {value ? 'benar':'salah'} */}
    </div>
  )
}

export default App
