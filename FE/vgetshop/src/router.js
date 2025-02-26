import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";
const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
