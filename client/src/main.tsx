import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users } from "./pages/user/Users.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";
import { ThemeToggle } from "./components/utils/ThemeToggle.tsx";
import DateTimetable from "./pages/home-page/view-calendar/DateTimetable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/users",
    element: <Users data={[]} />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/date-timetable",
    element: <DateTimetable />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeToggle defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeToggle>
  </React.StrictMode>
);
