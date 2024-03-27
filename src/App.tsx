import { useQuery } from "react-query";
import { getCurrentWeather } from "./api/getCurrentWeather";
import { ICurrent } from "./types/ICurrent";
import "./App.css";


function App() {
  const {data, isLoading} = useQuery<ICurrent>('w', getCurrentWeather)

  return (
    <div>
      {isLoading && <div>Loading..</div>}
      {data?.location.name}
    </div>
  );
}

export default App;
