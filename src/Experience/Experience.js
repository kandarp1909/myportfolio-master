import { Box } from "@mui/material";

const Experience = ({ logo, role, period, bgColor }) => (
  <>
    {/* Desktop View */}
    <Box
      sx={{
        alignItems: "center",
        mt: 3,
        display: { xs: "none", md: "flex" },
        gap: "20px",
        width: "700px",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={`${role} logo`}
        sx={{
          width: { xs: "80px", md: "230px" },
          height: "auto",
          objectFit: "contain",
          borderRadius: "10px",
          backgroundColor: bgColor || "transparent",
        }}
      />
      <Box
        sx={{
          color: "white",
          fontFamily: "monospace",
          fontSize: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "left",
        }}
      >
        {role}
        <span style={{ fontSize: "15px" }}>{period}</span>
      </Box>
    </Box>

    {/* Mobile View */}
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
        display: { xs: "flex", md: "none" },
        flexDirection: "column", // 👈 stack logo and text vertically
        textAlign: "center", // 👈 center text
        gap: "10px",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={`${role} logo`}
        sx={{
          width: { xs: "100px", md: "230px" },
          height: "auto",
          objectFit: "contain",
          borderRadius: "10px",
          backgroundColor: bgColor || "transparent",
        }}
      />
      <Box
        sx={{
          color: "white",
          fontFamily: "monospace",
          fontSize: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {role}
        <span style={{ fontSize: "10px" }}>{period}</span>
      </Box>
    </Box>
  </>
);

export default Experience;
