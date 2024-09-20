import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => (
    <Suspense
        fallback={
            <div
                className="d-flex justify-center align-center"
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    width: "100%",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress size="3rem" />
            </div>
        }
    >
        <Component {...props} />
    </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout")));
const LandingPage = Loadable(lazy(() => import("./pages/home-page")));
const RecipeDetails = Loadable(lazy(() => import("./pages/details-page")));




export const routes: any = [
    { path: "/", element: <Navigate to="home" /> },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: <LandingPage />,
            },
            {
                path: "/home/recipe-details/:id",
                element: <RecipeDetails />,
            },
        ],
    },
];
