import { useEffect, useState } from "react";
import useAxiosPrivate from "./AxiosPrivate";

const useLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosPrivate.get('/logged-in-user');
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [axiosPrivate]);

  return { user, loading };
};

export default useLoggedInUser;