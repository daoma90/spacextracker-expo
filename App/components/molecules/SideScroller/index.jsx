import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import SideScrollerItem from "../../atoms/SideScrollerItem";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import Divider from "../../atoms/Divider";
import ImageView from "react-native-image-viewing";

const SideScroller = ({ items }) => {
  const [showImagesFullscreen, setShowImagesFullscreen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = items.map((item) => {
    return { uri: item };
  });

  const onPress = (index) => {
    setShowImagesFullscreen(true);
    setSelectedIndex(index);
  };

  const onCloseImageViewer = () => {
    setShowImagesFullscreen(false);
    setSelectedIndex(null);
  };
  return (
    <>
      <s.Container>
        <t.ListCardName>Images</t.ListCardName>
        <Divider direction="vertical" space="20" />
      </s.Container>
      <FlatList
        horizontal={true}
        data={images}
        keyExtractor={(item, index) => `imageSlide-${index}`}
        renderItem={({ item, index }) => (
          <SideScrollerItem item={item.uri} index={index} onPress={onPress} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <View style={{ width: 20 }} />}
        ListFooterComponent={() => <View style={{ width: 20 }} />}
      />
      <ImageView
        images={images}
        visible={showImagesFullscreen}
        onRequestClose={onCloseImageViewer}
        imageIndex={selectedIndex}
        presentationStyle="overFullScreen"
        keyExtractor={(item, index) => `imageViewer-${index}`}
        FooterComponent={({ imageIndex }) => (
          <s.ImageIndicator>
            <t.ListCardName>
              {imageIndex + 1}/{images.length}
            </t.ListCardName>
          </s.ImageIndicator>
        )}
      />
    </>
  );
};

export default SideScroller;
