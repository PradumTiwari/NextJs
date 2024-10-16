import React from 'react'
import { ChangeEventHandler } from 'react'
interface LabelInputProps{
  label:string,
  PlaceHolder:string,
  type?:string,
  onChange: ChangeEventHandler<HTMLInputElement>;

}
const Labelinput = ({label,PlaceHolder,type,onChange}:LabelInputProps) => {
  return (
    <div>
      <label className='block mb-2 text-sm text-black font-semibold pt-4'>{label}</label>
      <input onChange={onChange}  type={type||"text"} placeholder={PlaceHolder} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
    </div>
  )
}

export default Labelinput