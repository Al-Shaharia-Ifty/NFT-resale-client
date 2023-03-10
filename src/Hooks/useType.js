import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useType = (role) => {
  const [done, setDone] = useState(null);
  const [data, setData] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const name = user?.displayName;
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setData(false);
          console.log(data);
        } else {
          setData(data);
          console.log(data);
        }
      });
    const userType = { role: role, verified: "false", displayName: name };
    if (!data && name) {
      const url = `http://localhost:5000/user/type/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userType),
      })
        .then((res) => res.json())
        .then((da) => {
          setDone(da);
        });
    } else {
      setDone(data);
    }
  }, [name, role, email, data]);
  return [done];
};

export default useType;
