import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavHead from './Pages/Shared/NavHead/NavHead'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login/Login'
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashborad/Dashboard";
import MakeAdmin from "./Pages/Dashborad/MakeAdmin/MakeAdmin";
import AddProduct from "./Pages/Dashborad/AddProduct/AddProduct";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavHead></NavHead>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}></Route>
          <Route path={`/dashboard/makeAdmin`} element={
            <MakeAdmin></MakeAdmin>} />

          <Route path={`/dashboard/addDoctor`} element={
            <AddProduct></AddProduct>} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/clientLogin" element={<Login />} />
            <Route path="/addFoods" element={<AddFoods />} />
            <Route path="/clientDashboard" element={<PrivateRoute> <ClientDashboard /> </PrivateRoute>} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path={`/placeOrder/:id`} element={<PrivateRoute> <PlaceOrder /> </PrivateRoute>} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
