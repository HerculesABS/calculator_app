import React, { useState } from "react";

const Calculator = () => {
        //to store and change the values of thu buttons
        const [vale, setVale] = useState('');
        // to clean the input after performing an opeartion
        const backspace = () => {
            try {
                setVale(vale.slice(0, -1))
            } catch (error) {
                setVale("")
            }
        }

        //to calculate all the opearations we will perform using the predefined method eval()
        const calculate = () => {
            try {
                // eslint-disable-next-line no-eval
                setVale(eval(vale))
            } catch (error) {
                setVale("Error")
            }
        }
    return (

        <div className="container my-2 ">

            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 fw-bolder text-center text-dark">CALCULATOR</h1>
                    <hr />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div class="card border-dark mb-3 pt-3 shadow">
                        <div class="card-body text-primary">

                          
                            <input type="text"
                                    value={vale}
                                    onChange={(e)=>setVale(e.target.value)}
                                    className="form-control
                                    form-control-lg
                                    mb-4 text-center
                                    bg-light fs-4
                                    text-primary shadow" 
                            />

                            <div className="row">

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="1" onClick={(e)=>setVale(vale+e.target.value)}>1</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="2" onClick={(e)=>setVale(vale+e.target.value)}>2</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="3" onClick={(e)=>setVale(vale+e.target.value)}>3</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow px-2 py-4 fs-4"
                                        value="C/CE" onClick={()=>backspace()}>C/CE</button>
                                </div>
                                
                            </div> 

                            <div className="row mt-2">

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="4" onClick={(e)=>setVale(vale+e.target.value)}>4</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="5" onClick={(e)=>setVale(vale+e.target.value)}>5</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="6" onClick={(e)=>setVale(vale+e.target.value)}>6</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="+" onClick={(e)=>setVale(vale+e.target.value)}>+</button>
                                </div>

                            </div> 

                            <div className="row mt-2">

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="7" onClick={(e)=>setVale(vale+e.target.value)}>7</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="8" onClick={(e)=>setVale(vale+e.target.value)}>8</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="9" onClick={(e)=>setVale(vale+e.target.value)}>9</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="*" onClick={(e)=>setVale(vale+e.target.value)}>X</button>
                                </div>

                            </div>  

                            <div className="row mt-2">

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="." onClick={(e)=>setVale(vale+e.target.value)}>.</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="0" onClick={(e)=>setVale(vale+e.target.value)}>0</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="=" onClick={()=>calculate()}>=</button>
                                </div>

                                <div className="col-3">
                                    <button className="btn btn-light text-dark shadow p-4 fs-4"
                                        value="/" onClick={(e)=>setVale(vale+e.target.value)}>/</button>
                                </div>

                            </div>  

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;