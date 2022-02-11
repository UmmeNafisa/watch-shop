import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavHead from './Pages/Shared/NavHead/NavHead'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home'

function App() {
  return (
    <Router>
      <NavHead></NavHead>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/clientLogin" element={<Login />} />
            <Route path="/addFoods" element={<AddFoods />} />
            <Route path="/clientDashboard" element={<PrivateRoute> <ClientDashboard /> </PrivateRoute>} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path={`/placeOrder/:id`} element={<PrivateRoute> <PlaceOrder /> </PrivateRoute>} />
            <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
