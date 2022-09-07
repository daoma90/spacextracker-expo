import React from "react";
import { colors } from "../../../../theme";
import * as s from "./styles";
import ListCard from "../../atoms/ListCard";
import { FlatList, View, ActivityIndicator } from "react-native";

const LaunchListRender = ({
  launches,
  type,
  hasNextPage,
  handleFetchLaunchList = () => {},
  handleRefreshLaunchList = () => {},
  refreshing = false,
}) => {
  return (
    <FlatList
      data={launches}
      keyExtractor={(item, index) => `${type}-${index}`}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item, index }) => (
        <ListCard type={type} launch={{ item }.item} index={index} />
      )}
      ListHeaderComponent={() => <View style={{ height: 20 }} />}
      ListFooterComponent={() => (
        <s.ListFooterContainer>
          {hasNextPage && <ActivityIndicator size="small" color={colors.white} />}
        </s.ListFooterContainer>
      )}
      onEndReached={hasNextPage ? handleFetchLaunchList : null}
      onEndReachedThreshold={0.5}
      onRefresh={handleRefreshLaunchList}
      refreshing={refreshing}
    />
  );
};

export default LaunchListRender;
