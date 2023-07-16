import { ReactComponent as Logo } from "./assets/images/logo.svg";
import "./App.scss";


import Login from "./components/Login/Login";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";



function App() {
  

  return (
    <>
      <Logo alt="logo" className="logo"/>
      <p className="description">
        <span className="accent">Sign Up</span> and find the best place to rest while traveling
      </p>
      <SubscribeForm/>
      <Login/>
    </>
  );
}

export default App;
