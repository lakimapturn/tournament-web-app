import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CircularProgress } from "@mui/material";

const Loading = (props) => {
  return (
    <>
      <Modal centered isOpen={props.loading} size="sm" className="text-center">
        <ModalBody>
          <CircularProgress />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Loading;
