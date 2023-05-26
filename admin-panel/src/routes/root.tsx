import { Outlet } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";

type RootProps = {};

export const Root = ({}: RootProps) => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);
