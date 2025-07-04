
import './App.css';
import About from './Components/about';
import Navbar from './Components/Navbar';
//import TextForm from './Components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the Text to analyze"/> */}
        <About/>
      </div>
      
    </>
  );
}

export default App;
