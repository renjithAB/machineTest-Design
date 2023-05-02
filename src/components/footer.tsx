import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Box, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      sx={{ mt: -3 }}
      style={{
        zIndex: -1,
        backgroundColor: "#324D48",
        height: 600,
        paddingTop: 60,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ height: 50 }}>
          <Typography variant="h4" sx={{ color: "#A89375", width: 550 }}>
            "Real confort, visuals and physical, is vital to every room."
          </Typography>
          <Typography variant="h5" sx={{ color: "#A89375", width: 550, pt: 3 }}>
            - Mark Hampton
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ pt: 10 }}>
        <Box sx={{ pl: 20 }}>
          <hr style={{ left: 0, border: "1px solid #A89375" }} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignContent: "space-between" }}
      >
        <Grid container sx={{ color: "#A89375", pl: 30 }} spacing={3}>
          <Grid item xs={6} md={2}>
            <Typography>Sofas</Typography>
            <Typography>Chairs</Typography>
            <Typography>Benches</Typography>
            <Typography>Coffe Tables</Typography>
            <Typography>Side Tables</Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography>Console tables</Typography>
            <Typography>TV Stands</Typography>
            <Typography>Shelvings</Typography>
            <Typography>Lether Furnitures</Typography>
            <Typography>Dining Chairs</Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography>Dining Chair</Typography>
            <Typography>Dining Benches</Typography>
            <Typography>Buffets & Bar</Typography>
            <Typography>Lether Furnitures</Typography>
            <Typography>Beds</Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography>Bedside tables</Typography>
            <Typography>Dressers</Typography>
            <Typography>Matressess</Typography>
            <Typography>Privacy Policy</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                width: 100,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
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
            float: "right",
            "&:hover": { backgroundColor: "#DFDBD8" },
            cursor: "pointer",
            width: 430,
          }}
        >
          <Typography sx={{ color: "#B6A998" }}>
            Website Terms & Conditions
          </Typography>
          <HorizontalRuleIcon
            sx={{ color: "#B6A998", transform: "rotate(90deg)", ml: 1 }}
          />
          <Typography sx={{ color: "#B6A998" }}>
            Smart Hatch Technologies
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
