import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AllReviews from "./pages/allreviews/AllReviews";
import MyReviews from "./pages/myreviews/MyReviews";
import Profile from "./pages/profile/Profile";
import SharedWithMe from "./pages/sharedwithme/SharedWithMe";

import ProtectedRoute from "./components/ProtectedRoutes";
import AllMovies from "./pages/allmovies/AllMovies";
import Home from './pages/home/Home';


export default function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route
                path="/"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />

            {/* Protected Routes */}
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }>
                <Route
                    path="allreviews"
                    element={
                        <ProtectedRoute>
                            <AllReviews />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="allmovies"
                    element={
                        <ProtectedRoute>
                            <AllMovies />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="myreviews"
                    element={
                        <ProtectedRoute>
                            <MyReviews />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="sharedwithme"
                    element={
                        <ProtectedRoute>
                            <SharedWithMe />
                        </ProtectedRoute>
                    }
                />
            </Route>
        </Routes>
    );
}
