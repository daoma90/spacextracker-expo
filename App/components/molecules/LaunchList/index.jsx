import React from "react";
import { FlatList, View } from "react-native";
import ListCard from "../../atoms/ListCard";

const LaunchList = ({ launches, type }) => {
  return (
    <FlatList
      data={launches}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={(item) => <ListCard type={type} launch={item.item} />}
      ListHeaderComponent={() => <View style={{ height: 20 }} />}
      ListFooterComponent={() => <View style={{ height: 20 }} />}
    />
  );
};

export default LaunchList;
