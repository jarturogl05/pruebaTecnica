import { useEffect, useState } from "react";
import { fetchUsers } from "../services/apiCalls";

function useUsers() {
  const [users, setusers] = useState<any[]>([]);

  useEffect(() => {
   fetch()
  }, []);

  const fetch = async () => {
    const data:any = await fetchUsers();
    setusers(data);
  }

  return { users };
}

export default useUsers;
