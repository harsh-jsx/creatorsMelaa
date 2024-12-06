import React from "react";
import "./Influencer-form.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form-container">
        <Box
          component="form"
          sx={{
            background: "#0C1017",
            p: { xs: 2, sm: 3 },
            border: "1px solid #242A37",
            boxShadow: "0px 0px 100px 100px #0C1017",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: '"Inter", sans-serif',
              mb: 4,
            }}
          >
            Contact Us
          </Typography>
          <TextField
            variant="outlined"
            label="Full Name"
            type="text"
            fullWidth
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ marginY: 2 }}
          >
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
              }}
            />
            <TextField
              variant="outlined"
              label="Phone"
              type="number"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
              }}
            />
          </Stack>

          <TextField
            variant="outlined"
            label="YouTube Channel Link"
            type="url"
            fullWidth
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
              marginY: 2,
            }}
          />

          <TextField
            variant="outlined"
            label="Instagram Page Link"
            type="url"
            fullWidth
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
              marginY: 2,
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ marginY: 2 }}
          >
            <TextField
              variant="outlined"
              label="YouTube Collab Price"
              type="number"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
              }}
            />
            <TextField
              variant="outlined"
              label="Instagram Collab Price"
              type="number"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
              }}
            />
          </Stack>

          <TextField
            variant="outlined"
            label="WhatsApp Contact Number"
            type="tel"
            fullWidth
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
              marginY: 2,
            }}
          />

          <TextField
            variant="outlined"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={5}
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
            }}
          />
          <Box
            component="section"
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                background: "green",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ContactForm;
