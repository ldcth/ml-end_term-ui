import { Box } from "@mui/material";

import ImageDetection from "../components/ImageDetect";
import { connect } from "react-redux";
import TextDetection from "../components/TextDetect";
import BothDetect from "../components/BothDetect";

const Home = (props) => {
  const { page } = props;

  // Some lines for generate category
  // console.log(fileData);
  return (
    <Box>
      {page === "photo" ? (
        <ImageDetection />
      ) : page === "text" ? (
        <TextDetection />
      ) : (
        <BothDetect />
      )}
    </Box>
  );
};
const mapStateToProps = (state) => ({
  page: state.reducer.page,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
