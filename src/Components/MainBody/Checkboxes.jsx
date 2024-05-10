import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { lime } from "@mui/material/colors";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import LockIcon from "@mui/icons-material/Lock";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 3, color: "white" }}
    >
      <FormControlLabel
        label={`Duration for segments of your sound promo`}
        control={
          <>
            <SubdirectoryArrowRightIcon sx={{ color: "grey" }} />
            <Checkbox
              checked={checked[0]}
              onChange={handleChange2}
              color="success"
              sx={{ color: "#FFFFFF1A" }}
            />
          </>
        }
      />
      <FormControlLabel
        label="Duration for segments of your sound promo"
        control={
          <>
            <SubdirectoryArrowRightIcon sx={{ color: "grey" }} />
            <Checkbox
              checked={checked[1]}
              onChange={handleChange3}
              color={"success"}
              sx={{ color: "#FFFFFF1A" }}
            />
          </>
        }
      />
    </Box>
  );

  return (
    <>
      <div
        style={{
          width: "875px",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
        }}
      >
        <FormControlLabel
          checked={true}
          label="02:15 Recommendations for your song"
          sx={{ color: "white" }}
          control={<Checkbox color={"success"} sx={{ color: "#FFFFFF1A" }} />}
        />
        <FormControlLabel
          label="Duration for segments of your sound promo"
          sx={{ color: "white" }}
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
              color={"success"}
              sx={{ color: "#FFFFFF1A" }}
            />
          }
        />
        {children}
      </div>
      <div
        style={{
          background: "#212124",
          width: "261px",
          display: "flex",
          alignItems: "center",
          marginLeft: "30px",
          paddingLeft: "10px",
        }}
      >
        <FormControlLabel
          label={`Release day `}
          sx={{ color: "#8E8F92" }}
          control={
            <Checkbox
              checked={false}
              onChange={handleChange1}
              sx={{ color: "#FFFFFF1A" }}
            />
          }
        />
        <LockIcon
          sx={{
            color: " #d1fd0a",
          }}
        />
        <span
          style={{
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "left",
            color: "#D1FD0A",
            marginLeft: "5px",
          }}
        >
          Coming Soon
        </span>
      </div>
      <FormControlLabel
        label="Promotion"
        sx={{ color: "white", marginLeft: "30px" }}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            color={"success"}
            sx={{ color: "#FFFFFF1A" }}
          />
        }
      />
      <div
        style={{
          background: "#212124",
          width: "218px",
          display: "flex",
          alignItems: "center",
          marginLeft: "30px",
          paddingLeft: "10px",
          marginBottom: "20px",
        }}
      >
        <FormControlLabel
          label={`Duet `}
          sx={{ color: "#8E8F92" }}
          control={
            <Checkbox
              checked={false}
              onChange={handleChange1}
              sx={{ color: "#FFFFFF1A" }}
            />
          }
        />
        <LockIcon
          sx={{
            color: " #d1fd0a",
          }}
        />
        <span
          style={{
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "left",
            color: "#D1FD0A",
            marginLeft: "5px",
          }}
        >
          Coming Soon
        </span>
      </div>
      <div
        style={{
          background: "#212124",
          width: "520px",
          display: "flex",
          alignItems: "center",
          marginLeft: "30px",
          paddingLeft: "10px",
        }}
      >
        <FormControlLabel
          label={`The best location for the potential of your sound`}
          sx={{ color: "#8E8F92" }}
          control={
            <Checkbox
              checked={false}
              onChange={handleChange1}
              sx={{ color: "#FFFFFF1A" }}
            />
          }
        />
        <LockIcon
          sx={{
            color: " #d1fd0a",
          }}
        />
        <span
          style={{
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "left",
            color: "#D1FD0A",
            marginLeft: "5px",
          }}
        >
          Coming Soon
        </span>
      </div>
    </>
  );
}
