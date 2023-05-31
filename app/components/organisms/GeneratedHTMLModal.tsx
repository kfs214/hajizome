import { Dispatch, SetStateAction } from "react";
import TextField from "@/app/components/atoms/TextField";
import Modal from "@/app/components/molecules/Modal";
import { Article } from "@/app/components/types";
import generateExcerpt from "@/app/utils/generateExcerpt";
import generateHTML from "@/app/utils/generateHTML";

type Props = {
  articles: Article[];
  showGeneratedHTMLCard: boolean;
  setShowGeneratedHTMLCard: Dispatch<SetStateAction<boolean>>;
};

function GeneratedHTMLModal(props: Props) {
  const { articles, showGeneratedHTMLCard, setShowGeneratedHTMLCard } = props;

  const closeModal = () => {
    setShowGeneratedHTMLCard(false);
  };

  // TODO copy to clipboard
  // TODO モーダルの幅指定要領
  const generatedHTML = generateHTML(articles);

  const generatedExcerpt = generateExcerpt(articles);

  // TODO 高さ指定を動的に
  return (
    <Modal open={showGeneratedHTMLCard} closeModal={closeModal}>
      <TextField
        margin="normal"
        sx={{ width: "100%" }}
        maxRows={30}
        multiline
        value={generatedHTML}
      />
      <TextField
        margin="normal"
        sx={{ width: "100%" }}
        multiline
        value={generatedExcerpt}
      />
    </Modal>
  );
}

export default GeneratedHTMLModal;
