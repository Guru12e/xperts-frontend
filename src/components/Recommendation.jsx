import axios from "axios";
import React, { useEffect, useState } from "react";

const Recommendation = () => {
  const [users, setUsers] = useState([]);
  const [userText, setUserText] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
          const usersRes = await axios.post(
            "http://localhost:5000/auth/getRecommend",
            {
              dept: storedUser.dept,
              institution: storedUser.institution,
              areaOfIntrest: storedUser.areaOfIntrest,
            }
          );

          if (usersRes.status === 404) {
            setUserText("No recommendations found.");
          } else if (usersRes.status === 200) {
            setUsers(usersRes.data.users);
          }
        } else {
          setUserText("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setUserText("Error fetching recommendations.");
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <div>{userText}</div>
      {users.length > 0 ? (
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      ) : (
        <p>No users to display.</p>
      )}
    </div>
  );
};

export default Recommendation;
