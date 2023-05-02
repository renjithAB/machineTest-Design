import chair1 from "../im/chair1.png";
import chair2 from "../im/chair2.png";
import chair3 from "../im/chair3.png";
import chair4 from "../im/chair4.png";
import chair5 from "../im/chair5.png";
import chair6 from "../im/chair6.png";
import chair7 from "../im/chair7.png";
import chair8 from "../im/chair8.png";


import { Box, Grid, Typography } from "@mui/material";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
function MainContainer() {
  return (
    <Grid container spacing={3} sx={{ pl: 5, pr: 5 }}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair1} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            CRESENT SWIVEL CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
          <Box
            sx={{
              border: "solid",
              borderColor: "#B6A998",
              borderWidth: 1,
              m: 3,
              pt: 1,
              pb: 1,
              pl: 3,
              pr: 3,
              display: "flex",
              "&:hover": { backgroundColor: "#DFDBD8" },
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "#B6A998" }}>Get a quote</Typography>
            <CallMadeSharpIcon
              sx={{ color: "#B6A998", transform: "rotate(45deg)", ml: 1 }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair2} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            MILLIE CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair3} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            PLEATED SWIVEL CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair8} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            LEATHER ARM CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair4} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            LEATHER ARM CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair5} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            CRESENT SWIVEL CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair6} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            MILLIE CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={chair7} alt="" />
          <Typography sx={{ color: "#425250", fontWeight: 550, fontSize: 15 }}>
            CRESENT SWIVEL CHAIR
          </Typography>
          <Typography
            sx={{ color: "#CDCDCD", fontSize: 15, pt: 2, maxWidth: 300 }}
          >
            Lorium impulse common chair design, consister adipisium. adit
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={1}
      >
        <Box
          sx={{
            cursor: "pointer",
            width: 150,
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
          <Typography sx={{ color: "#B6A998" }}>Get a quote</Typography>
          <CallMadeSharpIcon
            sx={{ color: "#B6A998", transform: "rotate(45deg)", ml: 1 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainContainer;
