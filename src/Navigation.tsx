import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Bitcoin = lazy(() => import("./pages/Bitcoin"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
