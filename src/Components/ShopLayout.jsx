import { Outlet } from "react-router-dom";
import MenuShop from "./ReusableComponents/MenuShop";
function ShopLayout() {
  return (
    <>
      <MenuShop />
      <Outlet />
      <footer> 2023</footer>
    </>
  );
}

export default ShopLayout;
