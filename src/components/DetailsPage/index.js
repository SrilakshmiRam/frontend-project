import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Details = () => {
    const [itemsList, setItemsList] = useState([]);
    const { id } = useParams();
    console.log(id); // Log the ID to check

    useEffect(() => {
        const getItems = async () => {
            const url = 'https://supermarket-backend-gg7u.onrender.com/items';
            const options = {
                method: 'GET',
            };

            try {
                const serverResponse = await fetch(url, options);
                if (!serverResponse.ok) {
                    throw new Error(`HTTP error! Status: ${serverResponse.status}`);
                }
                const data = await serverResponse.json();
                const items = data.response || data;
                setItemsList(items); // Update the state with the fetched items
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        getItems();
    }, []); // Empty dependency ensures this runs only once on mount

    // Filter the items by the ID from the URL
    const filteredArray = itemsList.filter((each) => String(each.item_id) === String(id)); 
    console.log(filteredArray); // Log filtered array for debugging

    if (filteredArray.length === 0) {
        return <p>No item found with the given ID.</p>;
    }

    const item = filteredArray[0];

    return (
        <div className='item-details'>
            <h1>Item Details</h1>
            <h1 className="item-title">Name: {item.name}</h1>
            <p className="li-item-text">CategoryId: {item.category_id}</p>
            <p className="li-item-text">Price: {item.price}</p>
            <p className="li-item-text">Quantity: {item.quantity}</p>
        </div>
    );
};

export default Details;

