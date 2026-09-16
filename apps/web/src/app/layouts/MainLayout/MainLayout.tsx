import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
