import './App.css';
import InputPost from './Components/InputPost';
import LoginForm from './Pages/LoginForm';
import PostDisplay from './Components/PostDisplay'
function App() {
  return (
    <div className="App">
       <LoginForm/>
      <InputPost/> 
    <PostDisplay/> 
    </div>
  );
}

export default App;
