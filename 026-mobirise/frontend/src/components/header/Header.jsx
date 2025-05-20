import React, { useEffect } from "react"
import "./Header.scss"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getBasketThunk } from "../../redux/reducers/basketSlice"

const Header = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.basket.basket)
  const loading = useSelector((state) => state.basket.loading)

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [dispatch])

  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <h2>Floral Studio</h2>
          </div>
          <RxHamburgerMenu className="burger" />

          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>About us</li>
            <li>Portfolio</li>
            <li>
              <Link className="link" to="/basket">
                Basket ({loading ? "..." : data.length})
              </Link>
            </li>
            <li>
              <Link className="link" to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
