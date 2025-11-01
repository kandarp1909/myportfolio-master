import { Box, Link, List, ListItem } from "@mui/material";

const Blogs = () => {
  return (
    <Box sx={{ color: "white", padding: "20px", marginBottom: "50px" }}>
      <List>
        <ListItem sx={{ display: "list-item", listStyleType: "disc", ml: 3 }}>
          <Link
            href="https://medium.com/@pranavmishra1909/so-so-so-3e3768c85618"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="primary"
            fontSize={"20px"}
          >
            Blog - 1
          </Link>
        </ListItem>

        <ListItem sx={{ display: "list-item", listStyleType: "disc", ml: 3 }}>
          <Link
            href="https://medium.com/@pranavmishra1909/hello-amazing-hackers-36952c055479"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="primary"
            fontSize={"20px"}
          >
            Blog - 2
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Blogs;
