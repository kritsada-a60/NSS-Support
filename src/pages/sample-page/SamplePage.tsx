import { Container } from "@mui/material";
import ButtonSet from "./components/ButtonSet";
import ThemeColor from "./components/ThemeColor";

const SamplePage = () => {
  return (
    <Container component="main">
      <ThemeColor />
      <ButtonSet />
    </Container>
  );
};

export default SamplePage;
