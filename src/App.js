import NavbarHeader from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <div className="app">
      <Stack direction="row" width="100vh" height="100vh">
        <NavbarHeader />
        <Sidebar />
        <Home />
      </Stack>
    </div>
  );
};

export default App;
