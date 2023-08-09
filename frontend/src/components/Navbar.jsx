import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Button,
  useColorModeValue,
  Input,
  chakra,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import logo from "../images/Innorik news logo.png";
import { GetNewsByGenre, getNews } from "../redux/All_News/Action";

const category = [
  // ... (category data)
];

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const [genreTitle, setGenreTitle] = useState("Category");

  const { isOpen, onToggle } = useDisclosure();

  const handleGenreValue = (e) => {
    if (e.currentTarget.value === "All") {
      setGenreTitle("Category");
      dispatch(getNews());
    } else {
      setGenreTitle(e.currentTarget.value);
      dispatch(GetNewsByGenre(e.currentTarget.value));
    }
  };

  return (
    <Box>
      <Flex
        // ... (Flex properties)
      >
        {/* ... (Hamburger Icon for mobile) */}
        {/* ... (Logo and navigation) */}
        {/* ... (Saved button and navigation) */}
      </Flex>

      {/* ... (Collapsed menu for mobile) */}
    </Box>
  );
};

export default Navbar;
