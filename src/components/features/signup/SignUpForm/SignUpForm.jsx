import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setUser } from '../../../../store/features/slice/appSlice';

import { useNavigate } from "react-router-dom";

import Button from "../../../ui/Button/Button";

import signUpForm from "../../../../constants/signUpForm";


export default function SignUpForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setUser({
      nickname: data.name,
      email: data.email,
      password: data.password
    }));
    reset();
    navigate('/profile');
  }


  return (

    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)} >

      {signUpForm.map(({ id, label, validation }) =>

        <div key={id} className="flex flex-col justify-center items-center mb-4 mt-4" >
          <label className="uppercase text-xs font-bold pb-2" > {label} </label>
          <input className="md:w-80 border-2 border-zinc-400 rounded-xl focus:border-orange-600 outline-none bg-transparent appearance-none text-s p-1 mt-1"
            {...register(id, validation)} />
          {errors[id]?.message ? <p className="text-yellow-500 text-xs mt-2" > {errors[id].message} </p> : null}
        </div>

      )}

      <Button
        type='submit'
        style='bg-orange-600 rounded-full hover:bg-orange-500 w-30 p-2 mt-10 font-semibold'
        title='Submit'
      />

    </form>

  )
}
