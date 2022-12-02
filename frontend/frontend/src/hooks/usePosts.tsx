import { useEffect, useState } from "react";
import { fetchUserPosts } from "../services/apiCalls";



function usePosts(userId: String) {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
   fetch()
  }, []);

  const fetch = async () => {
    const data:any = await fetchUserPosts(userId);
    setPosts(data);
  }

  return { posts };
}

export default usePosts;
