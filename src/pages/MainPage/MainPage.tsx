import { useState } from "react"
import { UIInput } from "../../components/UI/UIInput/UIInput"
import { CiSearch } from "react-icons/ci";
import { PlaceItem } from "../../components/PlaceItem/PlaceItem";

export const MainPage = () => {
  const [value, setValue] = useState('');
  // const { data } = useQuery<ICurrent>(`${value}`, () => getCurrentWeather(value));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
  return (
    <div>
      <UIInput value={value} onChange={handleChange} icon={CiSearch} />

      <PlaceItem />
    </div>
  )
}