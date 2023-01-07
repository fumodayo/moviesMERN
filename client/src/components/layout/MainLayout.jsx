import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* login modal */}
      {/* login modal */}
      <Box display="flex" minHeight="100vh">
        {/* header */}
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>
    </>
  );
};

export default MainLayout;
