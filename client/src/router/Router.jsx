import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import AuthGuard from "./AuthGuard";

const Login = lazy(() => import("../pages/Login"));
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
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route
              path="onboarding"
              element={
                <RequireAuth>
                  <Onboarding />
                </RequireAuth>
              }
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <HomeLayout />
                </RequireAuth>
              }
            >
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
