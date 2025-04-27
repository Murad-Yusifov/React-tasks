import React, { useEffect, useState } from 'react'
import Form from '../components/admin/Form'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCatagoryThunk, getCatagoryThunk, putCatagoryThunk } from '../redux/reducers/catagorySlice';

const Admin = () => {
  const dispatch =useDispatch();


  const data = useSelector(store => store.catagory.catagory); 
  const loading = useSelector(store=>store.catagory.loading)
  const error = useSelector(store=>store.catagory.error)

  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    dispatch(getCatagoryThunk())
  }, [dispatch])

  const handleDelete =(id)=>{
    dispatch(deleteCatagoryThunk(id))
  }

  const handlePut =(item)=>{
    setEdit(item)

  }

  const handleEditSubmit =(updatedData)=>{
    dispatch(putCatagoryThunk({id:edit.id,updatedData}))
    setEdit(null)
  }

  if(loading) return <span>Yuklenir</span>
  if(error) return <span>Xeta bash verdi</span>


  return (
    <>
    <div>
      <Form/>
    
      <div>
      {data && data.map(item=>(
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <button onClick={()=>handlePut(item)}>
            Edit
            </button>
            <button onClick={()=>handleDelete(item.id)}>
              Delete
            </button>
                    
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Admin