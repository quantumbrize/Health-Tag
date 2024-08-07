import "./App.css";
import React, { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from "react-router-dom";

// components for Doctor
const Login = lazy(() => import("./Doctor/Pages/Login/Login"));
const Signup = lazy(() => import("./Doctor/Pages/Signup/Signup"));
const PatientForm = lazy(() => import("./Doctor/Pages/PatientForm/PatientForm"));
const DoctorHeader = lazy(() => import("./Doctor/Components/Navbar/Header"));



function App() {
  // Get auth tokens from local storage
    const currentDoctor = localStorage.getItem("doctorAuthToken");
    const currentShop = localStorage.getItem("shopAuthToken");

  // Protected route component for doctor
    const ProtectedRouteDoctor = ({ children }) => {
        return currentDoctor ? children : <Navigate to="/login" />;
    };

  // Layout component for doctor with header and outlet
    const LayoutDoctor = () => {
        const location = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
        }, [location.pathname]);

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <DoctorHeader />
                <Outlet />
            </Suspense>
        );
    };

  // Protected route component for shop
    const ProtectedRouteShop = ({ children }) => {
        return currentShop ? children : <Navigate to="/shop/login" />;
    };

  // Layout component for shop with header and outlet
    const LayoutShop = () => {
        const location = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
        }, [location.pathname]);

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <DoctorHeader />
                <Outlet />
            </Suspense>
        );
    };

  // Define routes
    const router = createBrowserRouter([
        // Doctor Routes
        {
            path: "/",
            element: (
                <ProtectedRouteDoctor>
                <LayoutDoctor />
                </ProtectedRouteDoctor>
            ),
            children: [
                {
                path: "/",
                element: <PatientForm />,
                },
            ],
        },
        {
            path: "/login",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                <Login />
                </Suspense>
            ),
        },
        {
            path: "/signup",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                <Signup />
                </Suspense>
            ),
        },

        // Shop Routes
        {
            path: "/shop",
            element: (
                <ProtectedRouteShop>
                <LayoutShop />
                </ProtectedRouteShop>
            ),
            children: [
                {
                path: "/shop",
                /*, element: <ShopHome />*/
                },
            ],
        },
        {
            path: "/shop/login",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                {/* <ShopLogin /> */}
                </Suspense>
            ),
        },
    ]);

    // Return the RouterProvider with the router
    return <RouterProvider router={router} />;
}

export default App;
