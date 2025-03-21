import { useSelector } from "react-redux";

import "./App.css";
import Router from "./routers/router";
import Toast from "./components/ui/Toast";
import { AuthProvide } from "./context/AuthContext";

function App() {
  // const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <>
      <AuthProvide>
        <Router />
        {/* {isOpen && <Toast />} */}
      </AuthProvide>
    </>
  );
}

export default App;
