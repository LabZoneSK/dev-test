import { Col, Input, Row } from "antd";
import fetchJsonp from "fetch-jsonp";
import { useCallback, useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";
import FlickrCard from "../../../components/FlickrCard/FlickrCard";
import style from "./Gallery.module.less";

const { Search } = Input;

const Gallery = () => {
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef("NOT-CHANGED");

  const updatePictures = (items) => {
    const cardsData = items.map((item) => {
      const description = item.description
        .replace(/<[^>]+>/g, "")
        .split("posted a photo:")[1];
      return {
        title: item.title,
        description,
        imageSource: item.media.m,
        link: item.link,
      };
    });
    if (searchRef.current === "CHANGED") {
      searchRef.current = "NOT-CHANGED";
      setPictures(cardsData);
    }
    setPictures((prevState) => [...prevState, ...cardsData]);
  };

  const fetchImagesFromFlicker = useCallback(() => {
    fetchJsonp(
      `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${searchTerm}`,
      { jsonpCallback: "jsoncallback" }
    )
      .then((res) => res.json())
      .then(({ items }) => updatePictures(items))
      .catch(() => console.log("SEARCH_FAILURE"));
  }, [searchTerm]);

  const search = (value) => {
    searchRef.current = "CHANGED";
    setSearchTerm(value);
  };

  const handleScroll = useCallback(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      fetchImagesFromFlicker();
    }
  }, [fetchImagesFromFlicker]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    fetchImagesFromFlicker();
  }, [fetchImagesFromFlicker]);

  return (
    <>
      <Row align={"middle"} justify={"center"}>
        <Col span={24}>
          <Row align={"middle"} justify={"center"} gutter={[24, 24]}>
            <Search
              className={style.search}
              placeholder="search pictures"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={search}
            />
          </Row>
          <Row align={"top"} justify={"center"} gutter={[24, 24]}>
            {pictures.map((picture, index) => {
              return (
                <Col key={index}>
                  <FlickrCard
                    title={picture.title}
                    description={picture.description}
                    cover={picture.imageSource}
                    flickrLink={picture.link}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
