import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const user = localStorage.getItem("token"); // or your auth key

//     if (!user) {
//         return (
//             <Navigate
//                 to="/"
//                 replace
//             />
//         );
//     }

    return children;
}
