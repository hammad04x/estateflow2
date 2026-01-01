import { useEffect, useState, useRef } from "react";
import api from "../api/axiosInstance";

const useMe = () => {
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;

    const fetchMe = async () => {
      try {
        const res = await api.get("/me");
        setMe(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        if (err?.response?.status === 401) {
          setMe(null);
          setIsAuthenticated(false);
        } else {
          console.error("useMe error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  return { me, loading, isAuthenticated };
};

export default useMe;
