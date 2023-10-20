import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));
const Layout = lazy(() => import("../components/layout/Layout"));
const HomeLayout = lazy(() => import("../components/HomeLayout/HomeLayout"));
const Home = lazy(() => import("../pages/Home"));
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
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="/home" element={<HomeLayout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Router;
