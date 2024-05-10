import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const LeftBar = () => {
  const LeftBarContainer = styled.div`
    border: solid black 1px;
    width: 103px;
    height: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(3, 3, 3, 1) 26%,
      rgba(30, 66, 8, 1) 54%,
      rgba(69, 8, 80, 1) 81%,
      rgba(0, 0, 0, 1) 100%
    );
  `;

  const ButtonMenu = styled.button`
    background: #212122;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    color: white;
  `;
  const ButtonTransparant = styled.button`
    background-color: transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    color: white;
  `;

  const LeftBottomContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `;
  const IconButton = styled.button`
    background-image: url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-3omxMWztU6YRDapvdmxeBjhif-qbFQTFMm8Kqo1kA531I_-7");
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    color: white;
    background-repeat: no-repeat;
    background-size: 50px;
  `;

  return (
    <LeftBarContainer>
      <ButtonMenu>
        <MenuIcon />
      </ButtonMenu>
      <LeftBottomContainer>
        <ButtonTransparant>
          <NotificationsIcon sx={{ color: "#8D9095" }} />
        </ButtonTransparant>
        <ButtonTransparant>
          <SettingsIcon sx={{ color: "#8D9095" }} />
        </ButtonTransparant>
        <IconButton></IconButton>
      </LeftBottomContainer>
    </LeftBarContainer>
  );
};

export default LeftBar;
