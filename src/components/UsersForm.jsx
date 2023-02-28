import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues ={
    first_name: '',
    last_name: '',
    email:'',
    password: '',
    birthday: ''
}
const UsersForm = ({createUser,currentUser,editUser,handleChangeShowModal}) => {

    const {register,handleSubmit,reset}=useForm()
    const submit = data=>{
        if (currentUser){
            editUser(currentUser.id,data)
        }else{
            createUser(data)
        }
        reset(defaultValues)
    }

    const titleForm = currentUser? 'Edit User': 'New User'
    const buttonName = currentUser? 'Upload User':'Add User'

    useEffect(() => {
        if(currentUser){
            reset(currentUser)
            
        }else{
            reset(defaultValues)
            
        }


    }, [currentUser])
    

    return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i className='form__x bx bx-x'onClick={handleChangeShowModal} ></i>
        <h2 className='form__title'>{titleForm}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor="">First Name</label>
            <input className='form__input' type="text" placeholder='Enter your first name' {...register('first_name')} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="">Last Name</label>
            <input className='form__input' type="text" placeholder='Enter your last name' {...register('last_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="">Email</label>
            <input className='form__input' type='email' placeholder='Enter your email' {...register('email')} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="">Password</label>
            <input className='form__input' type="password" placeholder='Enter your password'{...register('password')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="">Birthday</label>
            <input className='form__input' type="date" placeholder='Birthday' {...register('birthday')}/>
        </div>
        <button className='form__btn'>{buttonName}</button>
    </form>
    )
}

export default UsersForm