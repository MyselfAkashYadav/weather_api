import React,{useState} from 'react';


function Result() {
  // console.log('hi')
  // flags
  const [isError,setError]=useState(false);
  const [isLoading,setLoading]=useState(false);
  const [forecast,setForecast]=useState(null);

  // call the api
  const submitRequest=location=>{
     console.log({location});
  };
  return (
    // <div></div>
    [isError,isLoading,forecast,submitRequest]
  );
};


export default Result