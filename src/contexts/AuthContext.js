import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();
// const auth = getAuth();
export const UserContext = ({ children }) => {
//   const createUser = () => {
//     createUserWithEmailAndPassword(auth)
//       .then((res) => {
//         const user = res.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  const authInfo = {
    // createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
