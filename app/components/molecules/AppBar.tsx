import MUIAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  showGeneratedHTMLCard: boolean;
  setShowGeneratedHTMLCard: Dispatch<SetStateAction<boolean>>;
};

export default function HAjizomeAppBar(props: Props) {
  const { showGeneratedHTMLCard, setShowGeneratedHTMLCard } = props;
  const toggleShowGeneratedHTMLCard = () => {
    setShowGeneratedHTMLCard((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <Image src="/images/funchan.svg" width={32} height={32} alt="logo" />
          <Typography
            variant="h6"
            component="div"
            ml={1}
            sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
          >
            HAjizome2
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={showGeneratedHTMLCard}
                onChange={toggleShowGeneratedHTMLCard}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="👀"
          />
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}
