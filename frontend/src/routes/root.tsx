import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Root: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const navigate = useNavigate();
      navigate("/auth");
    }
  }, []);

  return <Outlet />;
};
