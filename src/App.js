import "./App.css";
import React, { Suspense, lazy, useEffect,useState } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from "react-router-dom";

// components for Doctor
const Login = lazy(() => import("./Doctor/Pages/Login/Login"));
const Signup = lazy(() => import("./Doctor/Pages/Signup/Signup"));
const DoctorHeader = lazy(() => import("./Doctor/Components/Navbar/Header"));
const ShopHeader = lazy(() => import("./Doctor/Components/ShopNav/ShopHeader"));

const PatientForm = lazy(() => import("./Doctor/Pages/PatientForm/PatientForm"));
const MedicineForm = lazy(() => import("./Doctor/Pages/MedicineForm/MedicineForm"));
const DoctorForm = lazy(() => import("./Doctor/Pages/DoctorForm/DoctorForm"));
const ShopDetails = lazy(() => import("./Doctor/Pages/ShopDetails/ShopDetails"));
const DoctorProfile = lazy(() => import("./Doctor/Pages/DoctorProfile/DoctorProfile"));




function App() {
    const [showSignup,setShowsignup]=useState(true)
  // Get auth tokens from local storage
    // const currentDoctor = localStorage.getItem("doctorAuthToken");
    const currentDoctor = true;

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
                {location.pathname.includes('/doctor') ? <DoctorHeader /> : <ShopHeader />}
                {location.pathname.includes('/doctor') || location.pathname.includes('/doctor-form') || location.pathname.includes('/shop-details') ? setShowsignup(false) : setShowsignup(true)}
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
                {showSignup && <Signup/>}
                </ProtectedRouteDoctor>
            ),
            children: [
                {
                    path: "/doctor/patient",
                    element: <PatientForm />,
                },
                {
                    path: "/doctor/medicine-form",
                    element: <MedicineForm />,
                },
                {
                    path: "/doctor-form",
                    element: <DoctorForm />,
                },
                {
                    path: "/doctor/profile",
                    element: <DoctorProfile />,
                },
                {
                    path: "/shop-details",
                    element: <ShopDetails />,
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

    ]);

    // Return the RouterProvider with the router
    return <RouterProvider router={router} />;
}

export default App;
