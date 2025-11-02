
import { Box } from "@mui/material";

// ✅ Import SVG logos as React Components
import { ReactComponent as ReactLogo } from "../Logos/react.svg";
import { ReactComponent as JsLogo } from "../Logos/js.svg";
import { ReactComponent as TsLogo } from "../Logos/ts.svg";
import { ReactComponent as NodeLogo } from "../Logos/node.svg";
import { ReactComponent as HtmlLogo } from "../Logos/html.svg";
import { ReactComponent as CssLogo } from "../Logos/css.svg";
import { ReactComponent as GitLogo } from "../Logos/git.svg";
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
  { Icon: ExpressLogo, name: "Express" },
  { Icon: MongoLogo, name: "MongoDB" },
];

const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // ✅ Centers the last row too
        gap: { xs: "12px", sm: "16px", md: "24px" },
        px: { xs: 2, md: 8 },
        py: 4,
      }}
    >
      {skills.map(({ Icon, name }, i) => (
        <Box
          key={i}
          className="skill-card"
          sx={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: "16px",
            width: { xs: "100px", sm: "130px", md: "150px" },
            height: { xs: "100px", sm: "130px", md: "150px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "monospace",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.3s, background 0.3s",
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
  );
};

export default Skills;
