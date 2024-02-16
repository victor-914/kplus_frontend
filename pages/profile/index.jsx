import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import EmptyPortfolio from "../../components/empty/EmptyPortfolio";
import TabPanel from "../../components/tab/ProfileTab";
import { useRouter } from "next/router";
import api from "../../utils/api";
function Profile() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState();
  const [landProps, setLandProps] = useState();
  const [houseProps, setHouseProps] = useState();

  const handleUserData = async () => {
    try {
      const response = await api.get(
        "/users/me?populate[lands][fields][0]=*&populate[lands][populate][image][fields][0]=url&populate[lands][populate][video][fields][0]=url&populate[houses][fields][0]=*&populate[houses][populate][image][fields][0]=url&populate[houses][populate][video][fields][0]=url",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcwNzkyMTk3OCwiZXhwIjoxNzEwNTEzOTc4fQ.P1fMIVnyyoTIIqCISehrn5RDJHghomrKpRcwIynpWU0`,
          },
        }
      );
      setUserDetails(response?.data);
      setLandProps(response?.data?.lands);
      setHouseProps(response?.data?.houses);

      return response;
    } catch (error) {}
  };

  useEffect(() => {
    try {
      handleUserData();
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }

    return () => {};
  }, []);

  return (
    <StyledProfile>
      <div className="container">
        <div className="avatarContainer">
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
            }}
            alt="Remy-Sharp"
            src=""
          />

          <div className="name">{userDetails?.username}</div>
        </div>

        <div className="buttonContainer">
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#fff",
            }}
            variant="contained"
          >
            logout
          </Button>
          <Button
            onClick={() => router.push("/profile/upload")}
            sx={{
              color: "#000",
              backgroundColor: "#fff",
            }}
            variant="contained"
          >
            upload property
          </Button>
        </div>
        <TabPanel user={userDetails} land={landProps} house={houseProps} />
      </div>
    </StyledProfile>
  );
}

export default Profile;

const StyledProfile = styled.section`
  width: 100%;
  margin: auto;

  .buttonContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 10vh;
    padding: 18px;
    border-bottom: 1px solid #000;
  }

  .profileHeader {
    width: 80%;
    padding: 4px 20px 0px 0px;
    margin: auto;
    border-bottom: 1px solid #000;
  }

  .container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
  }

  .avatarContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }

  .name {
    padding: 10px;
    text-transform: capitalize;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .container {
      width: 95%;
    }

    .buttonContainer {
      width: 90%;
    }

    .profileHeader {
      text-align: center;
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
