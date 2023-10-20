import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Login = lazy(() => import("../pages/Login"));
const HomeLayout = lazy(() => import("../pages/Home"));
const Landing = lazy(() => import("../pages/Landing"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));
const Onboarding = lazy(() => import("../components/Onboarding/Onboarding"));

const Router = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomeLayout />} >
              <Route index element={<Profile />} />
              <Route path="onboarding" element={<Onboarding />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Router;
