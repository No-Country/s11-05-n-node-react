import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import AuthGuard from "./AuthGuard";

import Team from "../pages/Team";
import About from "../pages/About";

const Login = lazy(() => import("../pages/Login"));
const HomeLayout = lazy(() => import("../components/HomeLayout/HomeLayout"));
const Home = lazy(() => import("../pages/Home"));
const Landing = lazy(() => import("../pages/Landing"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));
const Matches = lazy(() => import("../pages/Matches"));
const Onboarding = lazy(() => import("../components/Onboarding/Onboarding"));

export const LoadingSplash = () => {
  return (
    <div className="text-5xl font-bold bg-black grid place-content-center h-[100dvh] text-white w-full">
      <span className="flex">
        <span>{"Let's"}</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
          Play
        </span>
      </span>
    </div>
  );
};

const Router = () => {
  return (
    <>
      <Suspense fallback={<LoadingSplash />}>
        <BrowserRouter>
          <Routes>
            <Route path="/aboutus" element={<About />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path="/home" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route
              path="/onboarding"
              element={
                <RequireAuth>
                  <Onboarding />
                </RequireAuth>
              }
            />
            <Route>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <HomeLayout />
                  </RequireAuth>
                }
              >
                <Route index={true} element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/teams" element={<Team />} />
                <Route path="/matches/:type" element={<Matches />} />
                {/* Aqui sigan poniendo las paginas  para que tomen el layout del home layout  */}
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Router;
