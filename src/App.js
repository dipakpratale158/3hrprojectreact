import "bootstrap/dist/css/bootstrap.min.css";

import SellerPage from "./components/sellerPage";
import CartModal from "./components/cartModal";

import SellerForm from "./components/SellerForm";

function App() {
  return (
    <div className="App">
      <CartModal />
      <SellerForm />
      <SellerPage />
    </div>
  );
}

export default App;
