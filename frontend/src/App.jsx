import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
