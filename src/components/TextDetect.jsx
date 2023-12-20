import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import { predictByTitle } from "../redux/action";

const TextDetection = (props) => {
  const { predictByTitle, title } = props;
  const [titleInput, setTitleInput] = useState("");

  console.log(title);
  return (
    <Stack
      // direction="row"
      //   direction="column-reverse"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      p={5}
      sx={{
        backgroundColor: "#F8FAFF",
        width: "calc(100vw - 295px)",
      }}
    >
      <TextField
        onChange={(e) => setTitleInput(e.target.value)}
        id="title"
        label="Enter title"
        variant="standard"
      />
      <Button
        sx={{
          marginTop: "10px",
        }}
        onClick={() => {
          predictByTitle(titleInput);
          //   predictTitle(title);
        }}
        variant="contained"
        size="large"
      >
        Predict
      </Button>
      <Stack marginTop="10px">
        <Typography variant="button">Category:</Typography>

        <Typography variant="h6">
          {title[title.length - 1]?.category}
        </Typography>
      </Stack>
    </Stack>
  );
};
const mapStateToProps = (state) => ({
  title: state.reducer.title,
});

const mapDispatchToProps = {
  predictByTitle,
};
export default connect(mapStateToProps, mapDispatchToProps)(TextDetection);
