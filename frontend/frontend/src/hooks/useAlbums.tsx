import { useEffect, useState } from "react";
import { fetchUserAlbums} from "../services/apiCalls";



function useAlbums(userId: String) {
  const [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
   fetch()
  }, []);

  const fetch = async () => {
    const data:any = await fetchUserAlbums(userId);
    setAlbums(data);
  }

  return { albums };
}

export default useAlbums;
