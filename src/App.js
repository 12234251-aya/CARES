
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChooseRole from "./pages/ChooseRole";
import DonateItems from "./pages/DonateItems";
import DonorDashboard from "./pages/DonorDashboard";
import DonorRequests from "./pages/DonorRequests";
import DonorDeliveries from "./pages/DonorDeliveries";
import DonorProfile from "./pages/DonorProfile";
import Beneficiary from "./pages/Beneficiary";
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard";
import MyRequests from "./pages/MyRequests";
import VolunteerConnection from "./pages/VolunteerConnection";
import BeneficiaryProfile from "./pages/BeneficiaryProfile";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import VolunteerTasks from "./pages/VolunteerTasks";
import VolunteerDeliveries from "./pages/VolunteerDeliveries";
import VolunteerServiceArea from "./pages/VolunteerServiceArea";
import VolunteerProfile from "./pages/VolunteerProfile";

function RequireAuth({ children }) {
    const isLoggedIn = sessionStorage.getItem("caresLoggedIn") === "true";

    return isLoggedIn ? children : <Navigate to="/Login" replace />;
}

function RequireRole({ role, children }) {
    const isLoggedIn = sessionStorage.getItem("caresLoggedIn") === "true";
    const selectedRole = sessionStorage.getItem("caresRole");

    if (!isLoggedIn) {
        return <Navigate to="/Login" replace />;
    }

    if (!selectedRole) {
        return <Navigate to="/ChooseRole" replace />;
    }

    if (selectedRole !== role) {
        return <Navigate to="/ChooseRole" replace />;
    }

    return children;
}

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* Public pages */}
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />

                <Route
                    path="/Login"
                    element={
                        sessionStorage.getItem("caresLoggedIn") === "true"
                            ? <Navigate to="/ChooseRole" replace />
                            : <Login />
                    }
                />

                <Route
                    path="/SignUp"
                    element={
                        sessionStorage.getItem("caresLoggedIn") === "true"
                            ? <Navigate to="/ChooseRole" replace />
                            : <SignUp />
                    }
                />

                {/* Role selection requires login */}
                <Route
                    path="/ChooseRole"
                    element={
                        <RequireAuth>
                            <ChooseRole />
                        </RequireAuth>
                    }
                />

                {/* Donor pages */}
                <Route
                    path="/DonateItems"
                    element={<RequireRole role="Donor"><DonateItems /></RequireRole>}
                />
                <Route
                    path="/DonorDashboard"
                    element={<RequireRole role="Donor"><DonorDashboard /></RequireRole>}
                />
                <Route
                    path="/DonorRequests"
                    element={<RequireRole role="Donor"><DonorRequests /></RequireRole>}
                />
                <Route
                    path="/DonorDeliveries"
                    element={<RequireRole role="Donor"><DonorDeliveries /></RequireRole>}
                />
                <Route
                    path="/DonorProfile"
                    element={<RequireRole role="Donor"><DonorProfile /></RequireRole>}
                />

                {/* Beneficiary pages */}
                <Route
                    path="/Beneficiary"
                    element={<RequireRole role="Beneficiary"><Beneficiary /></RequireRole>}
                />
                <Route
                    path="/BeneficiaryDashboard"
                    element={<RequireRole role="Beneficiary"><BeneficiaryDashboard /></RequireRole>}
                />
                <Route
                    path="/MyRequests"
                    element={<RequireRole role="Beneficiary"><MyRequests /></RequireRole>}
                />
                <Route
                    path="/BeneficiaryProfile"
                    element={<RequireRole role="Beneficiary"><BeneficiaryProfile /></RequireRole>}
                />
                <Route
                    path="/VolunteerConnection"
                    element={<RequireRole role="Beneficiary"><VolunteerConnection /></RequireRole>}
                />

                {/* Volunteer pages */}
                <Route
                    path="/VolunteerDashboard"
                    element={<RequireRole role="Volunteer"><VolunteerDashboard /></RequireRole>}
                />
                <Route
                    path="/VolunteerTasks"
                    element={<RequireRole role="Volunteer"><VolunteerTasks /></RequireRole>}
                />
                <Route
                    path="/VolunteerDeliveries"
                    element={<RequireRole role="Volunteer"><VolunteerDeliveries /></RequireRole>}
                />
                <Route
                    path="/VolunteerServiceArea"
                    element={<RequireRole role="Volunteer"><VolunteerServiceArea /></RequireRole>}
                />
                <Route
                    path="/VolunteerProfile"
                    element={<RequireRole role="Volunteer"><VolunteerProfile /></RequireRole>}
                />

                {/* Unknown address */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
