import classes from './CartButton.module.css';


const CartButton = () => {
  return (
        <button>
          <span className={classes.icon}>
            <img className="image" src={require('../Image/AddToCartButton.png')} alt = "Button" />
          </span>
        </button>
  );
};

export default CartButton;
