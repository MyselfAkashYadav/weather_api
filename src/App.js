import './App.css';
import axios from "axios";
import Landing from "./components/Landing.jsx"
const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'Delhi'},
  headers: {
    'X-RapidAPI-Key': 'b00116c2f2msha3b2f1e1c665e2cp1c32b1jsnd9795651ed5b',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

 
function App() {
  return (
    <div>
      <Landing/>

      <options/>


    </div>
  );
}

export default App;
