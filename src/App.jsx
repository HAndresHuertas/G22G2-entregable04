import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import './App.css'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'


const BASE_URL='https://users-crud.academlo.tech/'


function App() {

  const [users, setUsers] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [isShowForm, setIsShowForm] = useState(false)

  const handleChangeShowModal = ()=>{
    setIsShowForm(!isShowForm)
  }

  const getAllUsers= ()=>{
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))
  }

  const createUser = (data)=>{
    const URL =`${BASE_URL}users/`
    axios.post(URL,data)
      .then(res=>{
        getAllUsers()
        handleChangeShowModal()
        console.log(res.data)
      })
      .catch(err=>console.log(err))
  }

  const editUser = (id,data)=>{
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL,data)
        .then(res=>{
          console.log(res.data)
          setCurrentUser()
          getAllUsers()
          handleChangeShowModal()
        })
        .catch(err=>console.log(err))
    }
  
  const deleteUser = (id)=>{
    const URL =`${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res=>{
        console.log(res.data)
        getAllUsers()
      })
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div className="App">
      <header className='header__container'>
        <h1 className='header__title'>Users</h1>
        <button className='header__btn' onClick={handleChangeShowModal}><i className='bx bx-plus'></i> Create new user</button>
      </header>
      <div className={`form__container ${isShowForm ? "disable":''}`}>
        <UsersForm 
          createUser={createUser}
          currentUser={currentUser}
          editUser ={editUser}
          handleChangeShowModal={handleChangeShowModal}
          />
      </div>
      <div className='users__container'>
        {
          users?.map(user=>(
          <UserCard 
            key={user.id} 
            user={user} 
            deleteUser={deleteUser}
            setCurrentUser={setCurrentUser}
            handleChangeShowModal={handleChangeShowModal}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
