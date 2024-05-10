import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #FFFFFF0D",
  "& .MuiTabs-indicator": {
    backgroundColor: "#d1fd0a",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#8E8F92",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#d1fd0a",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#d1fd0a",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1fd0a",
    },
  })
);

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

export default function HTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "870px", margin: "0px auto" }}>
      <Box sx={{ bgcolor: "#0d0d0" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <Typography
            sx={{
              color: "#8E8F92",
              marginTop: "13px",
              marginLeft: "20px",
              userSelect: "none",
            }}
          >
            Label
          </Typography>
          <LockIcon
            sx={{ color: "#d1fd0a", marginTop: "10px", marginLeft: "5px" }}
          />
        </AntTabs>

        <Box sx={{ p: 1 }} />
      </Box>
    </Box>
  );
}
