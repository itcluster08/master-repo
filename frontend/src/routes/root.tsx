import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";

export const Root: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/auth");
    }
  }, []);

  return <MainLayout><Outlet /></MainLayout>;
};
