// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import history from '../../../routes/history';
// import { deleteProduct } from '../../../actions/product';

// export const ProductItem = ({
//   product: { id, name, description, purchaseLink, helpLink, imageLink },
//   deleteProduct,
// }) => {
//   const onClick = () => {
//     console.log('delete');
//     deleteProduct(id);
//     history.push('/manage_products');
//   };
//   return (
//     <div className='row'>
//       {imageLink && <img src={imageLink} alt={name}></img>}
//       <div>{id}</div>
//       <div>{name}</div>
//       <div>{description}</div>
//       <div>{purchaseLink}</div>
//       <div>{helpLink}</div>
//       <div>{imageLink}</div>

//       <Link className='button__std' to={`/product_edit/${id}`}>
//         <div className='button__std'>Edit</div>
//       </Link>
//       <button className='button__std button__std--secondary' onClick={onClick}>
//         X
//       </button>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   deleteProduct: (id) => dispatch(deleteProduct(id)),
// });
// export default connect(null, mapDispatchToProps)(ProductItem);
