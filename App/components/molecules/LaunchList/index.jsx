import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useLaunchContext } from "../../../../context/LaunchContext";
import ListCard from "../../atoms/ListCard";
import { colors } from "../../../../theme";
import * as s from "./styles";

const LaunchList = ({ type }) => {
  const [launches, setLaunches] = useState([]);
  const { fetchLaunchList } = useLaunchContext();
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(null);

  const handleFetchLaunchList = async () => {
    setIsLoadingNextPage(true);

    if (type === "Upcoming launch") {
      const results = await fetchLaunchList(true, launches.length);
      if (results) {
        setLaunches((prevState) => [...prevState, ...results.docs]);
        setHasNextPage(results.hasNextPage);
        setIsLoadingNextPage(false);
      }
    } else if (type === "Past launch") {
      const results = await fetchLaunchList(false, launches.length);
      if (results) {
        setLaunches((prevState) => [...prevState, ...results.docs]);
        setHasNextPage(results.hasNextPage);
        setIsLoadingNextPage(false);
      }
    }
  };

  const handleRefreshLaunchList = async () => {
    setRefreshing(true);
    if (type === "Upcoming launch") {
      const results = await fetchLaunchList(true, 0);
      setLaunches(results.docs);
      setRefreshing(false);
      setHasNextPage(results.hasNextPage);
    } else if (type === "Past launch") {
      const results = await fetchLaunchList(false, 0);
      setLaunches(results.docs);
      setRefreshing(false);
      setHasNextPage(results.hasNextPage);
    }
  };

  useEffect(() => {
    handleFetchLaunchList();
  }, []);
  return (
    launches.length > 0 && (
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
    )
  );
};

export default LaunchList;
