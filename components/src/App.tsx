import { useState } from "react";
import PromptModal from "./lib/modals/PromptModal/PromptModal";
import AlertModal from "./lib/modals/AlertModal/AlertModal";
import ConfirmModal from "./lib/modals/ConfirmModal/ConfirmModal";

function App() {
  const [openModal, setOpenModal] = useState<
    null | "prompt" | "alert" | "confirm"
  >(null);

  const handleCloseModal = () => setOpenModal(null);

  const handleConfirm = (message: string) => () => {
    alert(message);
    setOpenModal(null);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setOpenModal("prompt")}>PromptModal</button>
        <button onClick={() => setOpenModal("alert")}>AlertModal</button>
        <button onClick={() => setOpenModal("confirm")}>ConfirmModal</button>
      </div>

      {openModal === "prompt" && (
        <PromptModal
          title="쿠폰 번호를 입력해 주세요."
          hasCloseButton={false}
          position="center"
          size="large"
          onClose={handleCloseModal}
          onConfirm={handleConfirm("PromptModal 확인")}
        />
      )}

      {openModal === "alert" && (
        <AlertModal
          title="아이디를 입력해 주세요."
          content={<p>아이디는 필수로 입력해야 합니다.</p>}
          hasCloseButton={false}
          size="large"
          position="center"
          onClose={handleCloseModal}
          onConfirm={handleConfirm("AlertModal 확인")}
        />
      )}

      {openModal === "confirm" && (
        <ConfirmModal
          title="카드를 삭제하시겠습니까?"
          content={<p>삭제하면 복구하실 수 없습니다.</p>}
          hasCloseButton={false}
          position="center"
          size="medium"
          onClose={handleCloseModal}
          onConfirm={handleConfirm("ConfirmModal 확인")}
        />
      )}
    </>
  );
}

export default App;
