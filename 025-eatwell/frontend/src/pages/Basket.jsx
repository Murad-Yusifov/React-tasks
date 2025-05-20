import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk, addToBasketAsync, removeFromBasketAsync } from '../../src/redux/reducers/basketSlice'  

const Basket = () => {
    const dispatch = useDispatch()

   
    const data = useSelector(state => state.basket.basket) 
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.error)


    useEffect(() => {
        dispatch(getBasketThunk())  
    }, [dispatch])  

 
    if (loading) return <span>Loading...</span>
    if (error) return <span>Error: {error}</span>

    return (
        <div>
            {data && data.map((item) => (
                <div className="carts" key={item._id || item.id}>
                    <div className="imgBox">
                        <img src={item.image} alt="" />
                    </div>
                    <span className="price">${item.price}</span>
                    <span>{item.title}</span>
                    <span className="desender">{item.description}</span>
                    <button className="btn" onClick={() => dispatch(removeFromBasketAsync(item._id))}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Basket
