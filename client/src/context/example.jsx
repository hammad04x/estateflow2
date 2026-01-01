import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axiosInstance";
import useMe from "../hooks/useMe";

const ActiveUserContext = createContext(null);

const ROLE_MAP = {
  1: "Admin",
  2: "Seller",
  3: "Buyer",
  4: "Broker",
  5: "Retailer",
};

export const ActiveUserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    return sessionStorage.getItem("activeUserId");
  });

  // const [roles, setRoles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [matchedRoles, setMatchedRoles] = useState([]);

  const { me } = useMe();

  useEffect(() => {
    if (!me?.id) return;
    const fetchRoles = async () => {
      const res = await api.get(`/user-roles/${me.id}`);
      const roles = Array.isArray(res.data) ? res.data : [];
      console.log(roles)
      setMatchedRoles(
        roles.map((r) => ROLE_MAP[r.role_id]).filter(Boolean)
      );
    }
    fetchRoles()
  }, [me?.id])

  useEffect(() => {
    if (matchedRoles == ["Admin"]) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  },[])
  console.log(isAdmin)
  useEffect(() => {
    if (userId) {
      sessionStorage.setItem("activeUserId", userId);
    } else {
      sessionStorage.removeItem("activeUserId");
    }
  }, [userId]);

  return (
    <ActiveUserContext.Provider value={{ userId, setUserId }}>
      {children}
    </ActiveUserContext.Provider>
  );
};

export const useActiveUser = () => useContext(ActiveUserContext);
