import { Button } from "@material-ui/core";
import { Stack, TextField, Typography } from "@mui/material";
import { predictByBoth } from "../redux/action";
import { connect } from "react-redux";
import { useState } from "react";

const BothDetection = (props) => {
  const { predictByBoth, both } = props;

  const [fileData, setFileData] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [openWarning, setOpenWarning] = useState(false);

  const handleUpload = (e) => {
    if (e.target.files[0].length === 0) {
      return;
    } else {
      const file = e.target.files[0];
      // console.log(file.mozFullPath);
      file.category = file?.lastModified;
      file.url = URL.createObjectURL(file);

      setFileData((prevFileData) => [...prevFileData, file]);
    }
  };
  console.log(both);
  return (
    <Stack
      direction="row"
      //   direction="column-reverse"
      width="100%"
      height="100%"
      alignItems="center"
      p={5}
      sx={{
        backgroundColor: "#F8FAFF",
        width: "calc(100vw - 295px)",
      }}
    >
      {/* <Typography>Detection</Typography> */}
      <Stack height="40%" width="20%" justifyContent="space-around">
        <TextField
          onChange={(e) => setTitleInput(e.target.value)}
          id="title"
          label="Enter title"
          variant="standard"
        />
        <Button
          variant="contained"
          component="label"
          sx={{
            marginTop: "10px",
          }}
        >
          Upload File
          <input type="file" accept="image/*" hidden onChange={handleUpload} />
        </Button>
        {both[both.length - 1]?.category && fileData.length !== 0 && (
          <Stack>
            <Typography variant="button">Category:</Typography>

            <Typography variant="h6">
              {both[both.length - 1]?.category}
            </Typography>
          </Stack>
        )}
        <Button
          sx={{
            marginTop: "10px",
          }}
          onClick={() => {
            if (!!!titleInput || fileData.length === 0) {
              setOpenWarning(true);
            } else {
              predictByBoth(titleInput, fileData[fileData.length - 1]);
              setOpenWarning(false);
            }
          }}
          variant="contained"
          size="large"
        >
          Predict
        </Button>
        {openWarning && (
          <Typography variant="button" color="red">
            Something went wrong
          </Typography>
        )}
      </Stack>
      <Stack width="80%" alignItems="center">
        {fileData.length > 0 && (
          <img
            src={`${URL.createObjectURL(fileData[fileData.length - 1])}`}
            style={{
              maxWidth: "80%",
              maxHeight: "960px",
              objectFit: "contain",
              aspectRatio: "1 / 1",
            }}
            alt=""
          />
        )}
      </Stack>
    </Stack>
  );
};
const mapStateToProps = (state) => ({
  both: state.reducer.both,
});

const mapDispatchToProps = {
  predictByBoth,
};
export default connect(mapStateToProps, mapDispatchToProps)(BothDetection);
