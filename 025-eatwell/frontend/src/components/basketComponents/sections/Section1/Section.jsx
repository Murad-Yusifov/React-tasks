import React, { useEffect } from 'react'
import './Section.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk, addToBasketAsync } from '../../../../redux/reducers/basketSlice'  // addToBasketAsync import edilməli

const Section = () => {
    const dispatch = useDispatch()

    // Basket məlumatlarını redux store-dan çəkmək
    const data = useSelector(state => state.basket.items)  // 'basket' əvəzinə 'items' olmalıdır, çünki redux slice-də 'items' saxlanır
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.error)

    // Basket məlumatlarını getmək üçün useEffect
    useEffect(() => {
        dispatch(getBasketThunk())  // getBasketThunk çağırırıq
    }, [dispatch])  // Bu yalnız component mount olduqda çağırılacaq

    // Yükləmə və xəta mesajları
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
                    <button className="btn" onClick={() => dispatch(addToBasketAsync(item))}>
                        Add to Basket
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Section
