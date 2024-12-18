/* Import */
import { Routes, Route, useLocation } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import HeaderPreview from "./components/common/HeaderPreview";
import View from "./components/page/View";
import Main from "./components/main/Main";
import Invitation from "./components/page/Invitation";

const Routers = () => {
  const location = useLocation();

  return (
    <Routes>
      {/* Main Route */}
      <Route path="/" element={<Main />} />

      {/* Produce Route */}
      <Route
        path="/Produce"
        element={
          <>
            {/* Header Conditional Rendering */}
            {location.pathname === "/Produce/Preview" ? (
              <HeaderPreview />
            ) : (
              <Header />
            )}
            <View />
          </>
        }
      >
        {/* Preview Sub-Route */}
        <Route path="Preview" element={<></>} />
      </Route>
    </Routes>
  );
};

export default Routers;
