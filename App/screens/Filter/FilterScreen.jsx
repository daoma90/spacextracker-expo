import React from "react";
import Background from "../../components/atoms/Background";
import FilterForm from "../../components/molecules/FilterForm";
import LaunchList from "../../components/molecules/LaunchList";

const FilterScreen = () => {
  return (
    <Background paddingTop="80px">
      <FilterForm />
      {/* <LaunchList /> */}
    </Background>
  );
};

export default FilterScreen;
