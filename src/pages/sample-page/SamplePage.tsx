import { Container } from "@mui/material";
import ButtonSet from "./components/ButtonSet";
import ThemeColor from "./components/ThemeColor";
import InputSet from "./components/InputSet";
import SampleTable from "./components/SampleTable";
import SampleDialog from "./components/SampleDialog";

const SamplePage = () => {
  return (
    <Container component="main">
      <ThemeColor />
      <ButtonSet />
      <SampleDialog />
      <InputSet />
      <SampleTable />
    </Container>
  );
};

export default SamplePage;
