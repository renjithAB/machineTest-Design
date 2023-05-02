import { Box, Grid, Typography } from "@mui/material";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";
import img1 from "../im/img1.png";
import img2 from "../im/img2.png";

function QuoteSection() {
  return (
    <Grid container sx={{ mt: 5 }} spacing={3}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" sx={{ width: 20 }}>
            Designer Collections
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#9F9F9F", width: 400 }}>
            Coworker is an arragement in other compines share an office space
            allowing cost saving and convienient through the use
            ofinfrastructure such as equipmentutilities and receptionistand
            custodians.
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              width: 200,
              border: "solid",
              borderColor: "#B6A998",
              borderWidth: 1,
              m: 3,
              pt: 1,
              pb: 1,
              pl: 3,
              pr: 3,
              display: "flex",
              justifyContent: "space-between",
              "&:hover": { backgroundColor: "#DFDBD8" },
            }}
          >
            <ChairOutlinedIcon sx={{ color: "#B6A998", mr: 1 }} />
            <Typography sx={{ color: "#B6A998" }}>View Collections</Typography>
            <CallMadeSharpIcon
              sx={{ color: "#B6A998", transform: "rotate(45deg)", ml: 1 }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            width={300}
            src={img1}
            height={350}
            alt=""
            style={{ paddingRight: 10, zIndex: 999 }}
          />
          <img
            width={300}
            height={350}
            src={img2}
            alt=""
            style={{ zIndex: 999 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default QuoteSection;
