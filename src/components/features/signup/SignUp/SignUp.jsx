import SignUpForm from "../SignUpForm/SignUpForm";

import bikeImg from '../../../../assets/images//bike.jpg';


export default function SignUp() {
  return (

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-zinc-800">

        <div className="hidden md:block">
          <img src={bikeImg} className="h-full w-full" />
        </div>

        <div className="flex flex-col items-center p-20">
          <h2 className="text-3xl font-bold text-orange-600 justify-center p-2 mb-4"> Sign Up </h2>
          <SignUpForm />
        </div>

      </div>

  )
}
