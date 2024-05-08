import PropTypes from 'prop-types';

export function PracticaPropTypes(props) {
  const { product, price } = props;
  return (
    <>
      <h1>La Fruiteria </h1>
      <p>
        Producte: <span>{product}</span> Preu: <span>{price}</span>€
      </p>
    </>
  );
}

PracticaPropTypes.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number,
};

PracticaPropTypes.defaultProps = {
  product: 'No hi han productes',
  price: 0,
  quantity: 0,
};
