import Modal from '../../Menu/MenuView/Modal';
import classes from './ContactModal.module.css';

const Contact = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <div className={classes.phonenumber}>
            <span>0123456789</span>
        </div>
    </Modal>
  );

};

export default Contact;
