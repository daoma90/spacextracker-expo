import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import { useLaunchContext } from "../../../../context/LaunchContext";
import CardLarge from "../../molecules/CardLarge";
import { MotiView } from "moti";
import { colors } from "../../../../theme";

const LargeCardList = () => {
  const { nextLaunch, fetchNextLaunch, previousLaunch, fetchPreviousLaunch } = useLaunchContext();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchNextLaunch();
    await fetchPreviousLaunch();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchNextLaunch();
    fetchPreviousLaunch();
  }, []);

  return nextLaunch || previousLaunch ? (
    <FlatList
      data={[nextLaunch, previousLaunch]}
      keyExtractor={(item) => `${item?.id}`}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      renderItem={({ item, index }) => {
        return (
          <MotiView
            from={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            delay={index === 0 ? 500 : 800}
            transition={{ type: "timing", duration: 500 }}
          >
            <CardLarge
              type={index === 0 ? "Next launch" : "Previous launch"}
              launchData={item}
              index={index}
            />
          </MotiView>
        );
      }}
      ListFooterComponent={() => <View style={{ height: 40 }} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor={colors.white}
        />
      }
      onRefresh={handleRefresh}
      refreshing={refreshing}
    />
  ) : null;
};

export default LargeCardList;
