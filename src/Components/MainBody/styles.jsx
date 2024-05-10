import styled from "styled-components";

export const TopBar = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const TextLogo = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #404044;
  margin: 20px 430px 20px 20px;
`;

export const DateWindow = styled.div`
color: #37373a;
text-align: end;
display:flex:;
flex-direction:column;
font-size:10px;
font-weight:700;
`;

export const ButtonTransparant = styled.button`
  width: 70px;
  height: 20px;
  border: none;
  color: #94969c;
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 600px;
`;
export const ButtonTransparantBlue = styled.button`
  width: 70px;
  height: 20px;
  border: none;
  color: #3c6dff;
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 600px;
`;

export const MainHeader = styled.div`
  widtht: 950px;
  height: 240px;
  background: #131314;
  color: white;
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 800px;
  height: 100%;
`;

export const RightSide = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

export const RightTop = styled.div`
  width: 150px;
  height: 140px;
  background: #212122;
  align-text: center;
`;

export const VideoCounter1 = styled.p`
  color: #9e9fa4;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin: 30px 40px 0px;
`;
export const VideoCounter2 = styled.p`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0px auto;
`;
export const VideoCounter3 = styled.p`
  color: #d1fd0a;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RightBottom = styled.div`
  width: 150px;
  height: 100px;
  background: #00be6e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Grow1 = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #aaffdb;
  margin: 0px;
`;

export const Grow2 = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0px;
`;

export const LeftTop = styled.div`
  height: 150px;
  border-bottom: 1px solid #ffffff08;
  margin: 30px 40px 0px;
  display: flex;
  flex-direction: row;
`;

export const MainLogo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url("https://upload.wikimedia.org/wikipedia/ru/3/38/Square_One_-_Black_Pink.jpg");
  background-repeat: no-repeat;
  background-size: 80px;
  border-radius: 50%;
`;

export const PlayButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  background: grey;
  color: white;
  margin: 20px;
`;

export const MainName = styled.div`
  width: 142px;
  height: 133px;
  text-align: begin;
  margin-left: 10px;
`;

export const OfficialArtist = styled.p`
  color: #8e8f92;
  font-size: 12px;
  font-weight: 600;
  width: 100px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const Sound = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

export const Type = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #8e8f92;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Original = styled.div`
  background: #27459140;
  font-size: 10px;
  font-weight: 700;
  width: 85px;
  height: 24px;
  border-radius: 25px;
  color: #6993ff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px;
`;

export const GrowthLabel = styled.div`
  background: black;

  padding: 50px 100px 0px 70px;
  color: #d1fd0a;
  font-size: 20px;
  font-weight: 700;
`;

export const GrowthPins = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 50px;
  background: #000000;
`;

export const HighTrend = styled.div`
  border: 1px solid white;
  padding: 0px 10px;
  border-color: #ffffff1a;
  border-radius: 50px;
  height: 35px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 10px;
  padding-left: 0px;
`;

export const LikeGradient = styled.div`
  width: 40px;
  height: 34px;
  background: linear-gradient(180deg, #ff98fb 0%, #ffe769 100%);
  border-radius: 20px;
  margin-right: 5px;
`;
export const StarGradient = styled.div`
  width: 60px;
  height: 34px;
  background: #00ff94;
  border-radius: 20px;
  margin-right: 5px;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GeoGradient = styled.div`
  width: 83px;
  height: 34px;
  background: #ffe600;
  border-radius: 20px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 800;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Chart = styled.div`
  background: black;
  padding: 30px 40px 10px;
`;

export const ChartSettings = styled.div`
  width: 870px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0px auto;
`;
export const DateRange = styled.div`
  color: #8e8f92;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled.select`
  margin-left: 10px;
  width: 130px;
  height: 32px;
  background: #212122;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  padding: 0px 10px;
`;

export const LegendPins = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GrowthPin = styled.div`
  width: 93px;
  height: 32px;
  background: #212122;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const PinkRound = styled.div`
  width: 14px;
  height: 14px;
  background: #c704fe;
  margin-right: 5px;
  border-radius: 10px;
`;
export const PredictionPin = styled.div`
  width: 128px;
  height: 32px;
  background: #212122;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const LimeRound = styled.div`
  width: 14px;
  height: 14px;
  background: #d1fd0a;
  margin-right: 5px;
  border-radius: 10px;
`;

export const SoundAudienceLable = styled.div`
width: 874px;
color: white;
font-size: 20px;
font-weight: 700;
height: 30px;
margin: 30px auto;
display:flex;
justify-content:center:
flex-direction:row;
align-items:center;
`;

export const SoundAudiencePin = styled.div`
  width: 24px;
  height: 24px;
  background: #d1fd0a;
  color: black;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Ranges = styled.div`
  width: 875px;
  height: 211px;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
`;

export const RangeSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const RangeLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
  max-height: 20px;
  margin-top: 20px;
`;

export const RelatedSoundsNotify = styled.div`
  width: 874px;
  height: 80px;
  background: #212122;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

export const NotifyButton = styled.button`
  width: 101px;
  height: 25px;
  border-radius: 20px;
  color: black;
  font-size: 12px;
  font-weight: 700;
  background: #d1fd0a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: none;
`;

export const RecommendationHeader = styled.div`
  width: 870px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(13, 13, 14, 1) 24%,
    rgba(137, 36, 61, 1) 29%,
    rgba(13, 13, 14, 1) 34%
  );

  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const Spotify = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-image: url("https://c0.klipartz.com/pngpicture/163/564/gratis-png-spotify-logo-spotify-samsung-gear-s3-musica-streaming-multimedia-podcast-macbook-thumbnail.png");
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  margin: 4px;
`;

export const Itunes = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-image: url("https://p1.hiclipart.com/preview/740/290/368/itunes-13-el-capitan-itunes-icon.jpg");
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  margin: 4px;
`;

export const Tiktok = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-image: url("https://banner2.cleanpng.com/20231123/xjc/transparent-tiktok-logo-black-and-white-logo-tiktok-app-minima-minimalist-black-and-white-tiktok-app-1711004158896.webp");
  background-repeat: no-repeat;
  background-size: 20px;
  border: none;
  margin: 4px;
`;

export const Trending = styled.div`
  width: 116px;
  height: 79px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  margin-right: 40px;
  justify-content: flex-start;
  margin-left: 30%;
`;

export const BluredNumbers = styled.div`
  width: 66px;
  height: 20px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDou2XlyZCe6CFeON7zFJsBHD6ZGq1Ltj3F70ybCQBfA&s");
  background-repeat: no-repeat;
  background-size: 66px;
  color: #d1fd0a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountryBar = styled.div`
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;

  margin-right: 30px;

  justify-content: flex-start;
  font-size: 12px;
  font-weight: 600;
`;

export const SoundToText2 = styled.div`
  width: 135px;
  height: 20px;
  border-radius: 30px;
  background: #3f3f41;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 2px;
  text-align: center;
  margin-left: 10px;
  margin-top: 5px;
`;

export const SoundToText = styled.div`
  width: 135px;
  height: 30px;
  border-radius: 30px;
  background: #3f3f41;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 2px;
  text-align: center;
`;

export const LeftDown = styled.div`
  height: 40px;
  margin: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
