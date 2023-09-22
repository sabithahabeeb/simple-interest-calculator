import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleValid, setisPrincipleValid] = useState(true)
  const [isRateValid, setisRateValid] = useState(true)
  const [isYearValid, setisYearValid] = useState(true)
  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form completely")
    } else {
      setInterest(principle * rate * year / 100)
    }
  }
  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisPrincipleValid(true)
    setisRateValid(true)
    setisYearValid(true)
  }

  const validateInput = (e) => {
    const { value, name } = e.target
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value)
        setisPrincipleValid(true)
      } else if (name === "rate") {
        setRate(value)
        setisRateValid(true)
      } else {
        setYear(value)
        setisYearValid(true)
      }
    }else {
      if (name === "principle") {
        setPrinciple(value)
        setisPrincipleValid(false)
      } else if (name === "rate") {
        setRate(value)
        setisRateValid(false)
      } else {
        setYear(value)
        setisYearValid(false)
      }
    }
  }
  return (
    <div style={{ height: '100vh' }} className='d-flex w-100 justify-content-center align-items-center bg-dark'>
      <div className='w-40 bg-light rounded p-5'>
        <div className="heading">
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div style={{ height: '150px' }} className="interest-card w-100 flex-column rounded d-flex justify-content-center align-items-center bg-info text-light shadow">
          <h1>₹{' '}{interest}</h1>
          <p className='fw-bold'>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="₹ Principle amount" variant="outlined" value={principle || ""} onChange={(e) => validateInput(e)} name='principle'/>
          </div>

          {
            !isPrincipleValid && <div className="mb-3 text-danger">
              * Invalid Input
            </div>
          }

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="Rate of nterest (p.a)%" variant="outlined" value={rate || ""} onChange={(e) => validateInput(e)} name='rate' />
          </div>

          {
            !isRateValid && <div className="mb-3 text-danger">
              * Invalid Input
            </div>
          }



          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="Time period (Y r)" variant="outlined" value={year || ""}
              onChange={(e) => validateInput(e)} name='year'/>
          </div>

          {
            !isYearValid && <div className="mb-3 text-danger">
              * Invalid Input
            </div>
          }


          <div>
            <Stack direction="row" spacing={2}>
              <Button style={{ width: '250px', height: '70px' }}  disabled={isPrincipleValid && isRateValid  && isYearValid?false:true} variant="contained" type='submit'>Calculate</Button>
              <Button onClick={handleReset} style={{ width: '250px', height: '70px' }} variant="outlined">Reset</Button>
            </Stack>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
