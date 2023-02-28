import React from 'react'

const UserCard = ({user,deleteUser,setCurrentUser,handleChangeShowModal}) => {

    return (
    <article className='user'>
        <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr />
        <ul className='user__list'>
            <li className='user__list-item'><span>Email </span>{user.email}</li>
            <li className='user__list-item'><span>Birthday </span><i className='bx bx-gift'> {user.birthday}</i></li>
        </ul>
        <hr />
        <div className='user__buttons'>
            <button className='user__btn' onClick={()=>deleteUser(user.id)}>
                <i  className='bx bx-trash'></i>
            </button>
            <button 
                className='user__btn' 
                onClick={()=>{
                    handleChangeShowModal()
                    setCurrentUser(user)
                    
            }}>
                <i  className='bx bx-pencil'></i>
            </button>            
        </div>

    </article>
    
    )
}

export default UserCard