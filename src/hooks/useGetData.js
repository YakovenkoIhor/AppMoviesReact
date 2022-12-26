import { useEffect } from "react";

const useGetData = (url, set) => {
    useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => set(data))
  },[])
}

export default useGetData
