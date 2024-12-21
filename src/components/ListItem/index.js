import { Link } from 'react-router-dom';
import './index.css';

const ListItem = props => {
  const { itemDetails } = props; 
  const { item_id, name, category_id, price, quantity } = itemDetails; // Destructure `itemDetails` to get the `id`

  console.log(itemDetails); // Ensure the data structure is as expected
  return (
    <li className='li-item'>
      <h1 className="item-title">{name}</h1>
      <p className="li-item-text">{category_id}</p>
      <p className="li-item-text">{price}</p>
      <p className="li-item-text">{quantity}</p>
      <Link to="/add-edit-item">
        <button className="buttons">Add or Edit</button>
      </Link>
      <Link to={`/details/${item_id}`}> {/* Pass the `id` in the URL */}
        <button className="buttons">Details</button>
      </Link>
      <Link to={`/delete/${item_id}`}>
        <button className="buttons">Delete</button>
      </Link>
    </li>
  );
};

export default ListItem;

