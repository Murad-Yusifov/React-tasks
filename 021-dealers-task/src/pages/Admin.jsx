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
  const [editForm, setEditForm]=useState({name:"", description:""})

  useEffect(()=>{
    dispatch(getCatagoryThunk())
  }, [dispatch])

  const handleDelete =(id)=>{
    dispatch(deleteCatagoryThunk(id))
  }

  const handlePut =(item)=>{
    setEdit(item)
    setEditForm({name:item.name, description:item.description})

  }

  const handleEditSubmit =(e)=>{
    e.preventDefault();
    dispatch(putCatagoryThunk({id:edit.id, updateData:editForm}))
    setEdit(null)
  }

  if(loading) return <span>Yuklenir</span>
  if(error) return <span>Xeta bash verdi</span>


  return (
    <>
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <Form/>
    
      <div style={{width:'100%', display:'flex', alignItems:'center',justifyContent:'center', flexWrap:'wrap', gap:"20px"
      }}>
      {data && data.map(item=>(
        <div style={{width:'200px', height:'300px', display:'flex',flexDirection:'column', justifyContent:'center', gap:'20px', alignItems:'center', border:'1px solid black', fontSize:'25px'
        }}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <button style={{width:"90%", height:"30px", cursor:"pointer",fontSize:'20px', backgroundColor:'green', color:'white'}} onClick={()=>handlePut(item)}>
            Edit
            </button>
            <button style={{width:"90%", height:"30px", cursor:"pointer",fontSize:'20px', backgroundColor:'green', color:"white"}} onClick={()=>handleDelete(item.id)}>
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