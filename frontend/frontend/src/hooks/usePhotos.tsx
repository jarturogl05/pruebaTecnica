import { useEffect, useState } from "react";
import { fetchAlbumPhotos} from "../services/apiCalls";



function usePhotos(albumId: String) {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
   fetch()
  }, []);

  const fetch = async () => {
    const data:any = await fetchAlbumPhotos(albumId);
    setPhotos(data);
  }

  return { photos };
}

export default usePhotos;
