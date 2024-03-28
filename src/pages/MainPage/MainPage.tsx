import { useState } from "react"
import { UIInput } from "../../components/UI/UIInput/UIInput"
import { CiSearch } from "react-icons/ci";


export const MainPage = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
  return (
      <UIInput value={value} onChange={handleChange} icon={CiSearch} />
  )
}