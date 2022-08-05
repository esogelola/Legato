import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./firebase";
import AuthProvider from "./auth/AuthProvider";
import { AuthGate } from "./auth/AuthGate";
import ProductHeading from "./components/Product/ProductHeading";
import ProductHome from "./components/Product/ProductHome";
import ProductMore from "./components/Product/ProductMore";
import { SignIn } from "./auth/SignIn";
import Home from "./components/Home";
import Membership from "./components/Membership";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout/Checkout";
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/signin"
              element={
                <AuthGate notRequired>
                  <SignIn />
                </AuthGate>
              }
            />
            <Route
              path="/products/*"
              element={
                <AuthGate required>
                  <SignedIn />
                </AuthGate>
              }
            />
            <Route path="/checkout/*" element={<Checkout />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
function SignedIn() {
  return (
    <div className="flex">
      <Routes>
        <Route path=":products" element={<ProductHeading />}>
          <Route path=":home" element={<ProductHome />} />
          <Route path=":more" element={<ProductMore />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
