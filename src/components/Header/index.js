import React from "react";
import { useStyle } from "./useStyle";
import { Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { siteLogo } from "../../assets";
import Link from "next/link";

const headerMenu = [
  { label: "SHOP", link: "/product" },
  { label: "BLOG", link: "/product" },
  { label: "SEARCH", link: "/product" },
  { label: "CART", link: "/cart" },
];

const Header = () => {
  const { main, logo, menu, header } = useStyle();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box sx={main}>
        <Stack direction={!matchMD ? "column" : "row"} sx={header}>
          <Box sx={logo}>
            <Image src={siteLogo} alt="site Logo" />
          </Box>
          <Stack sx={menu} direction="row">
            {headerMenu.map((ele, index) => (
              <Link href={ele.link} key={index}>
                {ele.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
