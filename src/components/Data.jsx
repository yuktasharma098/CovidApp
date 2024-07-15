/*https://disease.sh/v3/covid-19/gov/India/ */
import React, { useState, useEffect } from 'react'


function Data() {
    const [cdata, setCdata] = useState([])
    const getData = async () => {
        await fetch("https://data.covid19india.org/v4/min/data.min.json ").then((res) => res.json()).then((data) => {
            setCdata(data.states);
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getData()
    }, []);
    console.log(cdata)
    return (
        <>
            <section className="d-flex align-items-center flex-column mt-5" >
                <button type="button" className="btn  mb-2 button1">Live Status </button>
                <h1 className="abouthead">Statewise Live Data</h1>
                <h1 className="abouthead mt-0 mb-3"> Of India</h1>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Confirmed</th>
                            <th scope="col"> Recovered</th>
                            <th scope="col">Tested</th>
                            <th scope="col">vaccinated1</th>
                            <th scope="col">vaccinated2</th>
                        </tr>
                    </thead>

                    {cdata?.map((curr) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{curr.state}</td>
                                    <td>{curr.cases}</td>
                                    <td>{curr.todayActive}</td>
                                    <td>{curr.todayRecovered}</td>
                                    <td>{curr.todayDeaths}</td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            </section>
        </>
    )
}

export default Data

/* <div className="table-responsive">
     <table className="table table-bordered table-striped text-center">
         <tr>
             <td>{rr.state}</td>
             <td>{rr.todayCases}</td>
             <td>{rr.todayActive}</td>
             <td>{rr.todayRecovered}</td>
             <td>{rr.todayDeaths}</td></tr>
     </table>
 </div>
  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

 */
