import AddIcon from "@mui/icons-material/Add";

import Fab from "@mui/material/Fab";

type Props = {
  handleAddArticle: () => void;
};

export default function AddArticle({ handleAddArticle }: Props) {
  return (
    <Fab color="secondary" aria-label="add" onClick={handleAddArticle}>
      <AddIcon />
    </Fab>
  );
}
