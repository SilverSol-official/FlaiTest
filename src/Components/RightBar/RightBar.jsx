import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const RightBar = () => {
  const RightTopContainer = styled.div`
    width: 340px;
    height: 110px;
    display: flex;
    flex-direction: column;
    background-color: #d1fd0a;
    padding-left: 20px;
  `;
  const MinorText = styled.p`
    display: flex;
    color: #6f8800;
    font-size: 12px;
    margin-bottom: 0px;
  `;

  const MajourText = styled.p`
    display: flex;
    color: #000000;
    font-weight: 700;
    font-size: 16px;
    margin-top: 0px;
  `;

  const BuyPremiumButton = styled.button`
    background: #000000;
    color: white;
    border: none;
    border-radius: 5px;
    width: 131px;
    height: 30px;
    font-weight: 700;
    font-size: 14px;
  `;

  const Chat = styled.div`
    display: flex;
    width: 360px;
    height: 750px;
    justify-content: flex-start;
    flex-direction: column;
    background: linear-gradient(
      125deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(12, 76, 57, 1) 18%,
      rgba(0, 0, 0, 1) 35%
    );
  `;
  const RequestBottom = styled.div`
    dmax-width: 360px;
    height: 100%;
    display: flex;
    flex-direction: raw;
    align-items: space-between;

    padding: 0px;
    align-items: flex-end;
  `;

  const RequestInput = styled.input`
    width: 300px;
    height: 60px;
    background: #212122;
    font-size q4px;
    font-weight:500;
    color:#8C8E92;
    padding:0px;
    padding-left:20px;
    border:none;
    
  `;

  const ButtonTransparant = styled.button`
    width: 50px;
    height: 60px;
    border: none;
    color: white;
    background: #212122;
  `;
  const Message = styled.div`
    width: 325px;
    margin: 20px auto;
  `;

  const UserButton = styled.button`
    background-image: url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-3omxMWztU6YRDapvdmxeBjhif-qbFQTFMm8Kqo1kA531I_-7");
    border-radius: 50%;
    width: 36px;
    height: 36px;
    border: none;
    color: white;
    background-repeat: no-repeat;
    background-size: 36px;
  `;

  const IconButton = styled.button`
    background: lime;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    border: none;
    color: white;
    background-repeat: no-repeat;
    background-size: 36px;
  `;

  const MessageHeader = styled.div`
    width: 325px;
    display: flex;
    color: white;
    flex-direction: raw;
    justify-content: space-between;
    align-items: center;
  `;

  const DateText = styled.p`
    display: flex;
    color: #56595c;
    font-size: 12px;
    margin-left: 60%;
    text-align: center;
  `;

  const ChatText = styled.p`
    margin: 0px;
    font-size: 16px;
    font-weight: 600;
    color: #e6e6ed;
  `;

  const Border = styled.div`
    border-bottom: #ffffff0d 1px solid;
    width: 325px;
    margin: 20px auto;
  `;

  return (
    <div className="rightBarContainer">
      <RightTopContainer>
        <MinorText>Free Plan</MinorText>
        <MajourText>There are 10 free requests left</MajourText>
        <BuyPremiumButton>Buy Premium</BuyPremiumButton>
      </RightTopContainer>
      <Chat>
        <Message>
          <MessageHeader>
            <UserButton></UserButton>
            <p>You</p>
            <DateText>3m ago</DateText>
          </MessageHeader>
          <ChatText>Hi GI:</ChatText>
          <ChatText>Could you analyze my account? </ChatText>
          <ChatText>https://www.tiktok.com/@im_mmxvii</ChatText>
        </Message>
        <Border></Border>
        <Message>
          <MessageHeader>
            <IconButton>
              <ElectricBoltIcon sx={{ color: "black" }} />
            </IconButton>
            <p>GE</p>
            <DateText>2m ago</DateText>
          </MessageHeader>
          <ChatText>
            Thank you for your authorization, your data is completely safe. For
            login, we use the official TikTok authorization method.
          </ChatText>
          <br />
          <ChatText>Iam analyzing your account... </ChatText>
          <br />
          <ChatText>Your account analytics is ready</ChatText>
          <br />
          <ChatText>Shall I write you a general summary?</ChatText>
        </Message>
        <RequestBottom>
          <RequestInput placeholder="Enter your request..."></RequestInput>
          <ButtonTransparant>
            <SendIcon sx={{ color: "#535457" }} />
          </ButtonTransparant>
        </RequestBottom>
      </Chat>
    </div>
  );
};

export default RightBar;
