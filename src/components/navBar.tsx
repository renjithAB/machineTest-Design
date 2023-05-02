import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "#B6A998",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: 120,
          color: "#fff",
        }}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Box
            sx={{
              pl: "20%",
              pr: "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  border: " solid  1px #DFDBD8",
                  pl: 2,
                  pr: 2,
                  pt: 1,
                  pb: 1,
                },
              }}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            >
              HOME FURNITURE
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  border: " solid  1px #DFDBD8",
                  pl: 2,
                  pr: 2,
                  pt: 1,
                  pb: 1,
                },
              }}
            >
              CORPORATE FURNITURE
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  border: " solid  1px #DFDBD8",
                  pl: 2,
                  pr: 2,
                  pt: 1,
                  pb: 1,
                },
              }}
            >
              HOSPITAL FURNITURE
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  border: " solid  1px #DFDBD8",
                  pl: 2,
                  pr: 2,
                  pt: 1,
                  pb: 1,
                },
              }}
            >
              SOUND PROOFING
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {isActive && (
        <Grid
          container
          spacing={4}
          sx={{
            position: "relative",
            mt: 0,
            backgroundColor: "#F1F0EE",
            height: 90,
            color: "#636363",
          }}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Box
              sx={{
                pl: "10%",
                pr: "10%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Chair
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Sofa
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Occational table
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Coffe Table
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Book Shelf
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Carpet
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    border: " solid  1px #DFDBD8",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  },
                }}
              >
                Curtain
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default NavBar;
