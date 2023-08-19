import { createBrowserRouter, RouterProvider } from "react-router-dom";

// fonts
import "@fontsource/karla/400.css";
import "@fontsource/karla/400-italic.css";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

// Styles
import "../assets/css/setup.css";
import "../assets/css/sm-clean.css";
import "../assets/css/common.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

// routes
import routes from "./routes";

// UI Components
import Layout from "../components/Layout";

// -------------

/**
 * Making base name for the website (needed in deployment)
 */
const router = createBrowserRouter(routes, {
  basename: "/meelo-react",
});

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
