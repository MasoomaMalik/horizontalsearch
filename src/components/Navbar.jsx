import { Stack } from "@mui/material";
import NavbarSub from "./NavbarSub";
import SearchBar from "./SearchBar";

const Navbar = () => (

<>  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#fff",
      top: 0,
     
      // justifyContent: "space-between",
    }}
  >
    <img
      src={
        " https://s.alicdn.com/@img/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg"
      }
      alt="logo"
      height={20}
    />

    <SearchBar />
  </Stack>

  <Stack>
    <NavbarSub/>
  </Stack>
  </>


);

export default Navbar;
