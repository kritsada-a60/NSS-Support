import { Container } from "@mui/material";
import ButtonSet from "./components/ButtonSet";
import ThemeColor from "./components/ThemeColor";
import InputSet from "./components/InputSet";
import SampleTable from "./components/SampleTable";

const SamplePage = () => {
  return (
    <Container component="main">
      <ThemeColor />
      <ButtonSet />
      <InputSet />
      <SampleTable />
    </Container>
  );
};

export default SamplePage;
