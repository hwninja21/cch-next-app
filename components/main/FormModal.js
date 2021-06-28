import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FormModal = ({modal, toggle}) => {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <embed src="https://form.questionscout.com/6091ab92ddf4bd6b4b9cfee2" 
            width="100%"
            height="500px"
          />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormModal;