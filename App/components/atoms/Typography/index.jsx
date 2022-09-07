import styled from "styled-components/native";

const CardLargeName = styled.Text`
  font-family: "Inter-Bold";
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-bottom: 6px;
`;

const CardRocketName = styled.Text`
  font-family: "Inter-Medium";
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")}px;
`;

const CardLargeDate = styled.Text`
  font-family: "Inter-Medium";
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

const CardLargeTitle = styled.Text`
  font-family: "Inter-Medium";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")}px;
`;

const CardLargeLaunchNumber = styled.Text`
  font-family: "Inter-Medium";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

const CardResult = styled.Text`
  font-family: "Inter-Medium";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.success ? props.theme.colors.success : props.theme.colors.danger)};
`;

const ListCardName = styled.Text`
  font-family: "Inter-Medium";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  max-width: 160px;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")}px;
`;

const ListCardDate = styled.Text`
  font-family: "Inter-Medium";
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

const BreadText = styled.Text`
  font-family: "Inter-Medium";
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")}px;
`;

const CountdownText = styled.Text`
  font-family: "Inter-Bold";
  font-size: 36px;
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.white)};
  text-align: center;
`;

const MainButtonText = styled.Text`
  font-family: "Inter-Medium";
  font-size: 20px;
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.white)};
`;

const TabLabel = styled.Text`
  font-family: "Inter-Medium";
  font-size: 10px;
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.white)};
`;

export {
  CardLargeName,
  CardRocketName,
  CardLargeDate,
  CardLargeTitle,
  CardLargeLaunchNumber,
  CardResult,
  ListCardName,
  ListCardDate,
  BreadText,
  CountdownText,
  MainButtonText,
  TabLabel,
};
