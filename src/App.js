// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';

function clicked(name){
  console.log('I am clicked'+name);
}

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Header></Header>
      <Products></Products>
      <button onClick={()=>{clicked(" jayraj") }} >hello</button>

    </div>
  );
}

export default App; 
