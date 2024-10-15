import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SchoolProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/prosjekter");
  }, [navigate]);

  return null;
}
