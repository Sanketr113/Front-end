import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home/home";
import AllReviews from "./pages/allreviews/AllReviews";
import MyReviews from "./pages/myreviews/MyReviews";
import Profile from "./pages/profile/Profile";
import SharedWithMe from "./pages/sharedwithme/SharedWithMe";
import AllMovies from "./pages/allmovies/AllMovies";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/home"
                element={<Home />}>
                <Route
                    path="allreviews"
                    element={<AllReviews />}
                />
                <Route
                    path="allmovies"
                    element={<AllMovies />}
                />
                <Route
                    path="myreviews"
                    element={<MyReviews />}
                />
                <Route
                    path="profile"
                    element={<Profile />}
                />
                <Route
                    path="sharedwithme"
                    element={<SharedWithMe />}
                />
            </Route>
        </Routes>
    );
}
