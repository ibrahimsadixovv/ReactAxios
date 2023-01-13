
import './App.css';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([])



  useEffect(() => {
    axios.get("https://fakestoreapi.com/products",).then(response => {
      setData(response.data)
    })
  }, [])



  return (
    <div className="App">
      <div className='boxes' style={{display:'grid' , gridTemplateColumns : 'repeat(4,1fr)' , gap : "16px" , marginTop :"35px" }} >
      {data.map(x => <Card   key={x.id}  data={x} >  </Card>)}

      </div>
 
    </div>
  );
}



function Card(props) {
  return (
    <div className='box' style={{width:'200px' , boxShadow : '0 2px 4px rgba(0,0,0,0.1) , 0 4px 8px rgba(0,0,0,0.25)' , padding : '10px 15px' }}>
      <h2 className='title'> {props.data.title}  </h2>
      <p className='price'> {props.data.price}  </p>
      <Link to={ "/product/" + props.data.id  } class="link" href="#">Cards</Link>
    </div>
  )
}

export default App;
