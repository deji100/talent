import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/AboutUs/About.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import CaseStudies from "./pages/CaseStudies/CaseStudies.tsx";
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Faq from "./pages/Faq/Faq.tsx";
import Home from "./pages/Home/Home.tsx";
import JobDetails from "./pages/JobDetails/JobDetails.tsx";
import Privacy from "./pages/Privacy/Privacy.tsx";
import Roles from "./pages/Roles/Roles.tsx";
import HowWeWork from "./pages/How-We-Work/HowWeWork.tsx";
import TalentLayout from "./pages/Talent/TalentLayout.tsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.tsx";
import Thanks from "./pages/Thanks/Thanks.tsx";
import Layout from "./Layout.tsx";
import { store, persistor } from "../src/state-manager/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "faq", element: <Faq /> },
      { path: "job-details", element: <JobDetails /> },
      { path: "privacy", element: <Privacy /> },
      { path: "roles", element: <Roles /> },
      { path: "how-we-work", element: <HowWeWork /> },
      {
        path: "talents",
        element: <TalentLayout />,
      },
      { path: "terms-and-conditions", element: <TermsConditions /> },
      { path: "thank-you", element: <Thanks /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// 