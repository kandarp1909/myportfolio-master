import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Home.css";
import { txt, punchLines } from "../constants";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % punchLines.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Experience data
  const experiences = [
    {
      logo: "/Globallogic.jpg",
      role: "Senior Software Engineer",
      period: "February 2025 - Present",
    },
    {
      logo: "/Globallogic.jpg",
      role: "Software Engineer",
      period: "June 2022 - February 2025",
    },
    {
      logo: "/LTIMindtree.jpg",
      role: "Associate Software Engineer",
      period: "May 2021 - May 2022",
      bgColor: "white",
    },
  ];

  return (
    <Box
      sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      {/* ✅ Fact of the Day (Desktop + Mobile handled by MUI breakpoints) */}
      <Box className="main">
        <Typography
          variant={{ xs: "h6", md: "h3" }}
          sx={{
            fontFamily: "monospace",
            fontWeight: { xs: 500, md: 700 },
            letterSpacing: ".1rem",
            color: "#FFFFFF",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="fact_container">
            <span>Fact of the day:</span>
            <p>{punchLines[index]}</p>
          </div>
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: { md: "40px", xs: "20px" },
          color: "#FFFFFF",
          marginTop: "50px",
          marginBottom: "40px",
        }}
      >
        --------Experience--------
      </Typography>
      {/* ✅ Render Experiences */}
      {experiences.map((exp, idx) => (
        <Experience key={idx} {...exp} />
      ))}
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: { md: "40px", xs: "20px" },
          color: "#FFFFFF",
          marginTop: "50px",
          marginBottom: "40px",
        }}
      >
        --------Skills--------
      </Typography>

      <Box sx={{ mt: 6, height: "1000px" }}>
        <Skills />
      </Box>
    </Box>
  );
};

export default Home;
