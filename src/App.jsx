import { useSelector, useDispatch } from 'react-redux';
import { dispatchData } from './store/inventory.js';

function App() {
    const displayedItems = useSelector((state) =>
        state.inventory.displaySTATE || []);
    const dispatch = useDispatch();

    function handleDisplay(e) {
        dispatch(dispatchData(e.target.name));
    }

    return (
        <>
            <h1>STOREFRONT</h1>
            <button onClick={handleDisplay} name='food'>Food</button>
            <button onClick={handleDisplay} name='electronics'>Electronics</button>
            <ul>
                {displayedItems.map((item) => (
                    <li key={item.id}>{item.name} </li>
                ))}
            </ul>
        </>
    )
}

export default App;
