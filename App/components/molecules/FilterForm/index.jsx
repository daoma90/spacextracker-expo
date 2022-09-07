import React, { useEffect, useState } from "react";
import Searchbar from "../../atoms/Searchbar";
import * as s from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useLaunchContext } from "../../../../context/LaunchContext";
import LaunchListRender from "../LaunchList/LaunchListRender";
import { View } from "react-native";

const FilterForm = () => {
  const [launches, setLaunches] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchbar: "",
    },
  });

  const { fetchFilteredLaunchList } = useLaunchContext();

  useEffect(() => {
    const subscription = watch(handleSubmit(onInputChange));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);
  let timer;
  const debounce = (data) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onSubmit(data);
    }, 500);
  };

  const onInputChange = (data) => {
    debounce(data);
  };

  const onSubmit = async (data) => {
    // console.log("submit", data);

    const results = await fetchFilteredLaunchList(data.searchbar, null, null, null);
    console.log("results123", results);
    setLaunches(results.docs);
  };

  return (
    <s.Container>
      <View>
        <Controller
          name="searchbar"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Searchbar onBlur={onBlur} onChange={onChange} value={value} />
          )}
        />
      </View>
      {launches.length > 0 && (
        <LaunchListRender launches={launches} type="Launch" hasNextPage={hasNextPage} />
      )}
    </s.Container>
  );
};

export default FilterForm;
