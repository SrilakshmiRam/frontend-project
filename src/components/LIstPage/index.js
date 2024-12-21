import { useState, useEffect } from 'react';

import ListItem from '../ListItem';
import './index.css';

const ListPage = () => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const url = 'https://supermarket-backend-gg7u.onrender.com/items';
            const options = {
                method: 'GET',
            };
    
            try {
                const serverResponse = await fetch(url, options); // Await the fetch call
                if (!serverResponse.ok) {
                    throw new Error(`HTTP error! Status: ${serverResponse.status}`);
                }
                const data = await serverResponse.json(); // Parse the response as JSON
                console.log(data); // Log the actual data to inspect structure
                
                // Assuming data contains an array directly or nested as `data.response`
                const items = data.response || data; 
                setItemsList(items); // Update the state with the fetched items
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
    
        getItems();
    }, []);
    

    return (
        <div className="list-page-container">
            <ul className="list-items">
                {itemsList.map((each) => (
                    <ListItem itemDetails={each} key={each.item_id} />
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
