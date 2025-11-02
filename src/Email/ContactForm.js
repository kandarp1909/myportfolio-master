import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value.trim();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_54an48u",
        "template_x0s5tkd",
        form.current,
        "LjbiOeRfXt7NSi4N-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "400px" },
        margin: "auto",
        mt: 4,
        background: "rgba(255,255,255,0.1)",
        p: 3,
        borderRadius: "12px",
        color: "white",
      }}
    >
      <TextField
        label="Name"
        name="user_name"
        variant="outlined"
        fullWidth
        required
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ input: { color: "white" } }}
      />

      <TextField
        label="Email"
        name="user_email"
        type="email"
        variant="outlined"
        fullWidth
        required
        error={!!emailError}
        helperText={emailError}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{
          input: { color: "white" },
          "& .MuiFormHelperText-root": { color: "salmon" },
        }}
      />

      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        required
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ textarea: { color: "white" } }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          background: "rgba(255,255,255,0.2)",
          color: "white",
          fontWeight: "bold",
          "&:hover": { background: "rgba(255,255,255,0.3)" },
        }}
      >
        Send Message
      </Button>

      {status && (
        <Typography
          variant="body2"
          sx={{
            color: status.startsWith("✅") ? "lightgreen" : "salmon",
            textAlign: "center",
          }}
        >
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
