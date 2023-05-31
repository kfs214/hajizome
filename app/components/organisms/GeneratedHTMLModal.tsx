import { Dispatch, SetStateAction } from "react";
import TextField from "@/app/components/atoms/TextField";
import Modal from "@/app/components/molecules/Modal";
import { Article } from "@/app/components/types";
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
  // TODO 長ければスクロール
  // TODO 曜日の日本語化対応
  // TODO 抜粋生成
  const generatedHTML = generateHTML(articles);
  return (
    <Modal open={showGeneratedHTMLCard} closeModal={closeModal}>
      <TextField sx={{ width: "100%" }} multiline value={generatedHTML} />
    </Modal>
  );
}

export default GeneratedHTMLModal;
