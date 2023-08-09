import {
  Box,
  Flex,
  GridItem,
  Image,
  Text,
  HStack,
  Tag,
  TagLabel,
  Button,
  Container,
  Stack,
  Heading,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SingleGridItem = (news) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [item, setItem] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("savedItems")) || [];
    setItem(arr);
  }, []);

  const handleDeleteItem = () => {
    const data = item.filter((el) => el.url !== news.url);
    localStorage.setItem("savedItems", JSON.stringify(data));
    window.location.reload();
  };

  return (
    <GridItem boxShadow="xl" color="#fff" key={Math.random()} py={2}>
      <Container maxW="9xl" px={{ base: 6, md: 3 }} py={10}>
        <Stack
          w="100%"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack
            w={{ base: "100%", md: "50%" }}
            direction="column"
            spacing={6}
          >
            {/* News Title */}
            <Heading
              as="h3"
              size="lg"
              fontWeight="bold"
              textAlign="left"
              maxW={{ base: "100%", md: "980px" }}
              color="black"
            >
              {news.title}
            </Heading>

            {/* News Description */}
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="300"
              maxW={{ base: "100%", md: "980px" }}
            >
              {news.description}
            </Text>

            {/* News Content */}
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="300"
              maxW={{ base: "100%", md: "980px" }}
            >
              {news.content}
            </Text>

            {/* Read More and Save Buttons */}
            <HStack spacing={3}>
              <Link to={news.url} target="_blank">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="md"
                  rounded="md"
                  boxShadow="md"
                >
                  Read More
                </Button>
              </Link>

              {pathname === "/save" ? (
                <Button onClick={handleDeleteItem}>
                  Mark As Completed
                </Button>
              ) : (
                <Button
                  border="1px solid"
                  borderColor="gray.300"
                  p={2}
                  px={4}
                  lineHeight={1.18}
                  rounded="md"
                  boxShadow="md"
                  as={Link}
                  onClick={() => news.handleSaveForLater(news)}
                >
                  Save this article
                </Button>
              )}
            </HStack>

            {/* Tags */}
            <HStack spacing={5}>
              {["100% Real", "Trusted News"].map((text, index) => (
                <HStack spacing={2} key={index}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* ... (SVG path for the tag icon) */}
                  </svg>
                  <Text color="black" fontSize="xs">
                    {text}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </Stack>

          {/* News Image */}
          <Box
            w={{ base: "100%", md: "50%" }}
            ml={{ base: 0, md: 5 }}
          >
            <Image
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              objectFit="cover"
              src={news.image}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
      </Container>
    </GridItem>
  );
};

export default SingleGridItem;
