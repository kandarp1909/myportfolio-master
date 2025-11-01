import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// ✅ Import SVG logos as React Components
import { ReactComponent as ReactLogo } from "../Logos/react.svg";
import { ReactComponent as JsLogo } from "../Logos/js.svg";
import { ReactComponent as TsLogo } from "../Logos/ts.svg";
import { ReactComponent as NodeLogo } from "../Logos/node.svg";
import { ReactComponent as HtmlLogo } from "../Logos/html.svg";
import { ReactComponent as CssLogo } from "../Logos/css.svg";
import { ReactComponent as GitLogo } from "../Logos/git.svg";
// import { ReactComponent as MuiLogo } from "../Logos/materialui.svg";
import { ReactComponent as ExpressLogo } from "../Logos/express.svg";
import { ReactComponent as MongoLogo } from "../Logos/mongo.svg";

const skills = [
  { Icon: ReactLogo, name: "React" },
  { Icon: JsLogo, name: "JavaScript" },
  { Icon: TsLogo, name: "TypeScript" },
  { Icon: NodeLogo, name: "Node.js" },
  { Icon: HtmlLogo, name: "HTML5" },
  { Icon: CssLogo, name: "CSS3" },
  { Icon: GitLogo, name: "Git" },
  //   { Icon: MuiLogo, name: "Material UI" },
  { Icon: ExpressLogo, name: "Express" },
  { Icon: MongoLogo, name: "MongoDB" },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const autoSlideInterval = useRef(null);
  let startX = 0;

  // ✅ Auto slide every 2 seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % skills.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + skills.length) % skills.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const childWidth = containerRef.current.firstChild.offsetWidth + 20;
      containerRef.current.scrollTo({
        left: index * childWidth,
        behavior: "smooth",
      });
    }
  };

  // ✅ Mobile swipe handlers
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) handleNext();
    if (endX - startX > 50) handlePrev();
    startAutoSlide();
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: {sm: "400px", xs: "200px", md: "800px" },
        overflow: "hidden",
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Arrow (Desktop only) */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: -9999, md: -60 }, // hide on mobile, outside cards
          color: "white",
          zIndex: 2,
          "&:hover": { background: "rgba(255,255,255,0.1)" },
        }}
      >
        <ChevronLeft size={40} />
      </IconButton>

      {/* Skills container */}
      <Box
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "20px",
          px: { xs: 2, md: 8 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          width: { xs: "90%", md: "80%" },
        }}
      >
        {skills.map(({ Icon, name }, i) => (
          <Box
            key={i}
            className="skill-card"
            sx={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              minWidth: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontFamily: "monospace",
              fontSize: "18px",
              padding: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                background: "rgba(255,255,255,0.15)",
              },
            }}
          >
            <Icon
              style={{
                width: "40px",
                height: "40px",
                marginBottom: "10px",
                fill: "white",
              }}
            />
            {name}
          </Box>
        ))}
      </Box>

      {/* Right Arrow (Desktop only) */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: -9999, md: -60 }, // hide on mobile, outside cards
          color: "white",
          zIndex: 2,
          "&:hover": { background: "rgba(255,255,255,0.1)" },
        }}
      >
        <ChevronRight size={40} />
      </IconButton>
    </Box>
  );
};

export default Skills;
