import React, { useEffect } from "react";
import "./Section4.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMeatThunk } from "../../../redux/reducers/meatSlice";

const Section4 = () => {

  const dispatch = useDispatch()

  const data = useSelector(state=>state.meat.meat)
  const loading = useSelector(state=>state.meat.loading)
  const error = useSelector(state=>state.meat.error)

  useEffect(()=>{
    dispatch(getMeatThunk())
  },[dispatch])

  if(loading) return <span>Yukleniyor...</span>
  if(error) return <span>Hata</span>
  return (
    <>
      <div className="wrapper4">
        <div className="text">
          <h1>Gallery</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

        </div>

       <div className="wrapped">
       {data && data.map(item=>(
          <div className="imgBox">
            <img src={item.image} alt="" />
          </div>
        ))}
       </div>
      </div>
    </>
  );
};

export default Section4;
