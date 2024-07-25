import React, { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
import { auth } from "./Utility/firebase.js";
import { Type } from "./Utility/action.type.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";

function App() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  // *******

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged((authUser) => {
//     if (authUser) {
//       const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//       dispatch({
//         type: Type.ADD_TO_BASKET,
//         basket: storedCart,
//       });
//     } else {
//       localStorage.removeItem("cart");
//       dispatch({
//         type: Type.ADD_TO_BASKET,
//         basket: [],
//       });
//     }
//   });
//   return () => unsubscribe();
// }, []);

  // *****

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
