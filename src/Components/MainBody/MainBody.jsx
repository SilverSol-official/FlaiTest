import CachedIcon from "@mui/icons-material/Cached";
import DownloadIcon from "@mui/icons-material/Download";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BarChart from "./Chart";
import GroupIcon from "@mui/icons-material/Group";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import SpeakerIcon from "@mui/icons-material/Speaker";
import ForestIcon from "@mui/icons-material/Forest";
import SpeedIcon from "@mui/icons-material/Speed";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LinkIcon from "@mui/icons-material/Link";
import HTabs from "./Tabs";
import Checkboxes from "./Checkboxes";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import CA from "country-flag-icons/react/3x2/CA";
import {
  ButtonTransparant,
  ButtonTransparantBlue,
  ChartSettings,
  Chart,
  DateRange,
  DateWindow,
  GeoGradient,
  Grow1,
  Grow2,
  GrowthLabel,
  GrowthPin,
  GrowthPins,
  HighTrend,
  LeftSide,
  LeftTop,
  LegendPins,
  LikeGradient,
  LimeRound,
  MainHeader,
  MainLogo,
  MainName,
  Name,
  OfficialArtist,
  Original,
  PinkRound,
  PlayButton,
  PredictionPin,
  RangeLabel,
  Ranges,
  RecommendationHeader,
  RelatedSoundsNotify,
  RightBottom,
  RightSide,
  RightTop,
  SoundAudienceLable,
  SoundAudiencePin,
  StarGradient,
  TextLogo,
  TopBar,
  Type,
  VideoCounter1,
  VideoCounter2,
  VideoCounter3,
  Sound,
  RangeSide,
  NotifyButton,
  Select,
  Spotify,
  Itunes,
  Tiktok,
  Trending,
  BluredNumbers,
  CountryBar,
  SoundToText,
  LeftDown,
  SoundToText2,
} from "./styles";

//
const MainBody = () => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="mainBodyContainer">
      <TopBar>
        <TextLogo>AI Prediction</TextLogo>
        <DateWindow>
          <p>Last update: 13.03.2024</p>
          <p>Date added to the platform: 17.12.2023</p>
        </DateWindow>
        <ButtonTransparant>
          <CachedIcon />
          Upgrade
        </ButtonTransparant>
        <ButtonTransparantBlue>
          <DownloadIcon />
          Download
        </ButtonTransparantBlue>
      </TopBar>
      <MainHeader>
        <LeftSide>
          <LeftTop>
            <MainLogo>
              <PlayButton>
                <PlayArrowIcon />
              </PlayButton>
            </MainLogo>
            <MainName>
              <OfficialArtist>
                Official Artist <InfoIcon />
              </OfficialArtist>
              <Name>Khabane Lame</Name>
              <Sound>Melodic sound</Sound>
              <Type>
                Type:<Original>ORIGINAL</Original>
              </Type>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Spotify></Spotify>
                <Itunes></Itunes>
                <Tiktok></Tiktok>
              </div>
            </MainName>
            <Trending>
              <p
                style={{
                  textAlign: "end",
                  width: "116px",
                  paddingRight: "20px",
                }}
              >
                Trending
              </p>
              <p>
                <span style={{ color: "#8E8F92" }}>Duration:</span> 00:45
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#8E8F92" }}>Bitrate:</span>{" "}
                <BluredNumbers>
                  <LockIcon style={{ filter: "blur(0)" }} />
                </BluredNumbers>
              </p>
            </Trending>
            <CountryBar>
              <p style={{ width: "130px" }}>
                <span style={{ color: "#8E8F92" }}>Country:</span> Canada{" "}
                <span> </span>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/ca.png 2x`}
                  src={`https://flagcdn.com/w20/ca.png`}
                  alt=""
                />
              </p>
              <p>
                <span style={{ color: "#8E8F92" }}>Place in the country:</span>{" "}
                05
              </p>
              <p>
                <span style={{ color: "#8E8F92" }}>Place in the world:</span> 43
              </p>
              <SoundToText>A Sound to text</SoundToText>
            </CountryBar>
          </LeftTop>
          <LeftDown>
            <div
              style={{
                color: "#8E8F92",
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Keywords:
            </div>
            <SoundToText2>Whispering breeze</SoundToText2>
            <SoundToText2>Wandering soul</SoundToText2>
            <SoundToText2>Crimson dawn</SoundToText2>
            <SoundToText2>Echoes of silence</SoundToText2>
          </LeftDown>
        </LeftSide>

        <RightSide>
          <RightTop>
            <VideoCounter1>🙋‍♂️ Videos</VideoCounter1>
            <VideoCounter2>1,8 M</VideoCounter2>
            <VideoCounter3>
              <PlayArrowIcon />
              Watch Videos
            </VideoCounter3>
          </RightTop>
          <RightBottom>
            <Grow1>Daily Growth</Grow1>
            <Grow2>+100K</Grow2>
          </RightBottom>
        </RightSide>
      </MainHeader>
      <GrowthLabel>
        <ShowChartIcon
          sx={{
            background: "#d1fd0a",
            color: "black",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            marginRight: "5px",
          }}
        />
        Growth
      </GrowthLabel>
      <GrowthPins>
        <HighTrend>
          <LikeGradient>
            <ThumbUpIcon
              sx={{
                color: "black",
                height: "34px",
                fontSize: "medium",
              }}
            />
          </LikeGradient>
          High Trending Chance
        </HighTrend>
        <HighTrend>
          <StarGradient>
            <AutoAwesomeIcon sx={{ height: "20px" }} />8
          </StarGradient>
          Sound assessment from our AI
        </HighTrend>
        <HighTrend>
          <GeoGradient>
            <FmdGoodIcon />
            25%
          </GeoGradient>
          Geo Popularity
        </HighTrend>
      </GrowthPins>
      <Chart>
        <BarChart />
      </Chart>
      <ChartSettings>
        <DateRange>
          Date Range
          <Select name="Date Range" sx={{}}>
            <option value="value1">This Month</option>
            <option value="value2" selected>
              Last Month
            </option>
            <option value="value3">Next Month</option>
          </Select>
        </DateRange>
        <LegendPins>
          <GrowthPin>
            <PinkRound />
            Growth
          </GrowthPin>
          <PredictionPin>
            <LimeRound />
            AI Prediction
          </PredictionPin>
        </LegendPins>
      </ChartSettings>
      <SoundAudienceLable>
        <SoundAudiencePin>
          <GroupIcon />
        </SoundAudiencePin>
        Sound Audience
      </SoundAudienceLable>
      <Ranges>
        <RangeSide>
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <LocalFloristIcon sx={{ height: "20px" }} />
              <span>Beauty</span>
            </div>
            40%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SpeakerIcon sx={{ height: "20px" }} />
              <span>Music</span>
            </div>
            31%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ForestIcon sx={{ height: "20px" }} />
              <span>Travel</span>
            </div>
            22%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />
        </RangeSide>
        <RangeSide>
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SpeedIcon sx={{ height: "20px" }} />
              <span>Show</span>
            </div>
            14%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SportsHandballIcon sx={{ height: "20px" }} />
              <span>Sport</span>
            </div>
            12%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />{" "}
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon sx={{ height: "20px" }} />
              <span>Health</span>
            </div>
            9%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />{" "}
          <RangeLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MoreHorizIcon sx={{ height: "20px" }} />
              <span>Other</span>
            </div>
            6%
          </RangeLabel>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            disabled
          />
        </RangeSide>
      </Ranges>
      <SoundAudienceLable>
        <SoundAudiencePin>
          <LinkIcon sx={{ height: "20px" }} />
        </SoundAudiencePin>
        <span style={{ color: "#d1fd0a", marginRight: "5px" }}>Related </span>
        Sounds
      </SoundAudienceLable>
      <RelatedSoundsNotify>
        <NotificationsIcon sx={{ color: "gold" }} />
        <p>Notify me when these features start working</p>
        <NotifyButton>Notify Me</NotifyButton>
      </RelatedSoundsNotify>
      <SoundAudienceLable>
        <SoundAudiencePin>
          <AutoAwesomeIcon sx={{ height: "20px" }} />
        </SoundAudiencePin>
        <span style={{ color: "#d1fd0a", marginRight: "5px" }}>
          Recommendations{" "}
        </span>
        from AI
      </SoundAudienceLable>
      <HTabs />
      <RecommendationHeader>
        you followed <span style={{ color: "#d1fd0a" }}>2/10</span>
        recommendations
      </RecommendationHeader>
      <Checkboxes
        label="initial"
        onChange={handleChange}
        checked={isChecked}
        indeterminate
      />
    </div>
  );
};

export default MainBody;
