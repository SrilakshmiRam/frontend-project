import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const DeletePage = () => {
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    const deleteItem = async () => {
      const url = `https://supermarket-backend-gg7u.onrender.com/items/${id}`;
      try {
        const response = await fetch(url, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log(`Item with ID ${id} deleted successfully.`);
        } else {
          console.error('Failed to delete the item.');
        }
      } catch (error) {
        console.error('Error occurred while deleting the item:', error);
      }
    };

    deleteItem();
  }, [id]);

  return (
    <div className="delete-page">
      <h2>Deleting item...</h2>
    </div>
  );
};

export default DeletePage;
