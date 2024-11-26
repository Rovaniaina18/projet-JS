import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IMAGE from '../Assets/img';

function Client() {
  const [etablissement, setEtablissement] = useState([])
  const [currentId, setcurrentId] = useState(null)
  useEffect(() => {
    fetchEt();
  }, [currentId])
  function fetchEt() {
    axios.get('http://localhost:8081/etablissement')
      .then(res => setEtablissement(res.data))
      .catch(err => console.log(err));
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/etablissement/${id}`)
        .then(() => {
          setcurrentId(id)
        })
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <div className="main--content">
      <div className="tabular--wrapper">
        <h3 className='main--title'>Table des clients</h3>
        <div className="table--container">

          <div class="col-lg-4 col-md-6">
            <small class="text-light fw-semibold">Vertically centered</small>
            <div class="mt-3">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalCenter"
              >
                Launch modal
              </button>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalCenterTitle">Modal title</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col mb-3">
                          <label for="nameWithTitle" class="form-label">Name</label>
                          <input
                            type="text"
                            id="nameWithTitle"
                            class="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col mb-0">
                          <label for="emailWithTitle" class="form-label">Email</label>
                          <input
                            type="text"
                            id="emailWithTitle"
                            class="form-control"
                            placeholder="xxxx@xxx.xx"
                          />
                        </div>
                        <div class="col mb-0">
                          <label for="dobWithTitle" class="form-label">DOB</label>
                          <input
                            type="text"
                            id="dobWithTitle"
                            class="form-control"
                            placeholder="DD / MM / YY"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Identification</th>
                <th>Nom et Prenom</th>
                <th>Adresse</th>
                <th>Lot</th>
                <th>Télephone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RAKOto</td>
                <td>Andrainjato</td>
                <td>0344724018</td>
                <td>0344724018</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NASANDRATRINIAINA</td>
                <td>Fianarantsoa</td>
                <td>0383078865</td>
                <td>0383078865</td>
                <td>RAKOto</td>
              </tr>
            </tbody>
            <tbody>
              {
                etablissement.map((data, i) => (
                  <tr key={i.id_cli}>
                    <td>{data.id_cli}</td>
                    <td>{data.nom_cli}</td>
                    <td>{data.add_cli}</td>
                    <td>{data.tel_cli}</td>
                    <td>
                      <Link to={'/MEtablissement'} >
                        <img src={IMAGE.imgOne} className='mod' />
                      </Link>
                      {/* <button type="button" className="btn btn-info btn-sm "  onClick={() => handleUpdate(data.code_etab)} >Modifier</button> */}
                      <button onClick={e => handleDelete(data.code_etab)}>
                        <img src={IMAGE.imgTwo} className='mod' />
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Client