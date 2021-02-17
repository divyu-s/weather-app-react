import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeather}) => {
    const [error,setError] = useState("");

    const handleInputChange = (event)=>{
        setCity(event.target.value);
    };
    const handleSubmit= ()=>{
        if(!city){
            setError("City field is empty");
            
        }
        else{
          setError("");
          //Make API call;
          fetchCityWeather();

        }
    };

    return (
      //<div className="container">
        <Form className="p-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" value={city} placeholder="Enter City" onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Button variant="primary" onClick = {handleSubmit}>
          Submit
        </Button>
      </Form>
     // </div> 
    
    );
};

export default CityInput;