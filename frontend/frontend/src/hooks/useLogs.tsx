import { useEffect, useState } from "react";
import { fetchLogs } from "../services/apiCalls";

function useLogs() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
   fetch()
  }, []);

  const fetch = async () => {
    const data:any = await fetchLogs();
    setLogs(data);
  }

  return { logs};
}

export default useLogs;
