import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"

function CifModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
           <div className='Search-container'>
            <p>Send CAF course link for SAM Global University</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div className='cifModel-container'>

            <div className='short-gap'>
                <input type='radio'/>
                <label htmlFor="SAM Global University, Bhopal">SAM Global University, Bhopal</label>
            </div>

            <div className='short-gap'>
               Select At least 1 institute group
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='Search_footer'>
            <Button onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default CifModel;