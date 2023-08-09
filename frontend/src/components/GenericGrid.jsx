import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import SingleGridItem from "./SingleGridItem";
import { getNews } from "../redux/All_News/Action";

export default function GenericGrid() {
  const dispatch = useDispatch();

  // Redux state selectors
  const news = useSelector((store) =>
    store.NewsReducer.news.length > 0 ? store.NewsReducer.news : []
  );
  const { isLoading } = useSelector((store) => store.NewsReducer);

  // Local state for saved items
  const [savedItems, setSavedItems] = useState(
    JSON.parse(localStorage.getItem("savedItems")) || []
  );

  // Effect to fetch news on component mount
  useEffect(() => {
    dispatch(getNews).then((res) => {
      // console.log(res);
    });
  }, []);

  // Effect to update localStorage whenever savedItems change
  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    // console.log(savedItems);
  }, [savedItems]);

  const handleSaveForLater = (item) => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, item]);
    //console.log(savedItems)
  };

  return (
    <Box pt={30} minH={"100vh"}>
      <Heading
        py={[1, 1, 1, 2]}
        fontSize={["3xl", "3xl", "5xl"]}
        color={"#fff"}
        fontFamily={"kalam"}
      >
        All News
      </Heading>
      {isLoading ? (
        <Box padding="6" boxShadow="lg" bg="#2d2b2e">
          <SkeletonText
            mt="4"
            noOfLines={10}
            spacing="4"
            skeletonHeight="10"
            startColor="#4DCCBD"
          />
        </Box>
      ) : (
        <Grid
          margin={"auto"}
          width={"90%"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
          ]}
          gap={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {news.map((item) => (
            <SingleGridItem
              {...item}
              handleSaveForLater={handleSaveForLater}
              key={Math.random()}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}
