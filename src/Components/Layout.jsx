import { Outlet } from "react-router-dom";
import Menu from "../Components/ReusableComponents/Menu";
import MenuMain from "../Components/ReusableComponents/MenuMain";

function Layout() {
  return (
    <div className="App">
      <MenuMain />
      <Menu />
      <Outlet />
    </div>
  );
}

export default Layout;
