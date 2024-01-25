import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useLoginCheck = () => {
  const [loggedinCheck, setloggedinCheck] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {}, []);
};
