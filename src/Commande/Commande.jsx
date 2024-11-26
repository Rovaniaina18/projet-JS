
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IMAGE from '../Assets/img';

function Commande() {
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
      <div className="tabulr--wrapper">
        <div class="row gy-3">
          <div class="col-lg-4 col-md-6">
            <div class="mt-3">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalCenter"
              >
                Nouveau
              </button>
              <div class="modal fade"
                id="modalCenter"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
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
                          <label for="nameWithTitle" class="form-label">Nom et Prenom</label>
                          <input
                            type="text"
                            id="nom"
                            name='nom'
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col mb-3">
                          <label for="nameWithTitle" class="form-label">Produit</label>
                          <input
                            type="text"
                            id="designation"
                            name='designation'
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col mb-3">
                          <label for="nameWithTitle" class="form-label">Date</label>
                          <input
                            type="date"
                            id="date"
                            name='date'
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col mb-0">
                          <label for="emailWithTitle" class="form-label">Quantité acheter</label>
                          <input
                            type="text"
                            id="QCommander"
                            name='QCommander'
                            class="form-control"
                            placeholder="Nombre pro commander"
                          />
                        </div>
                        <div class="col mb-0">
                          <label for="dobWithTitle" class="form-label">Prix total</label>
                          <input
                            type="numl"
                            id="dobWithTitle"
                            class="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">Ajouter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table--container">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix total</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RAKOTA</td>
                <td>GasyPloit</td>
                <td>20</td>
                <td>12000</td>
                <td>10/12/2023</td>
                <td>mod et sup et imp</td>
              </tr>
              <tr>
                <td>NASADRATRINIAINA</td>
                <td>Rhum303</td>
                <td>2</td>
                <td>30000</td>
                <td>20/10/2023</td>
                <td>
                  mod
                  {/* <div class="col-4 col-sm-5 text-end">
                    <button type="button" 
                        class="btn btn-icon btn-outline-secondary">
                        <i class="bx bx-link-alt">
                        <img src={IMAGE.imgOne} className='mod'/>
                        </i>
                    </button>
                </div>
                <div class="col-4 col-sm-5 text-end">
                    <button type="button" 
                        class="btn btn-icon btn-outline-danger">
                        <i class="bx bx-trash-alt">
                        <img src={IMAGE.imgTwo} className='mod'/>
                        </i>
                    </button>
                </div> */}
                </td>
              </tr>
            </tbody>
            <tbody>
              {
                etablissement.map((data, i) => (
                  <tr key={i.code_etab}>
                    <td>{data.code_etab}</td>
                    <td>{data.zap}</td>
                    <td>{data.nom_etab}</td>
                    <td>{data.genr_etab}</td>
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

export default Commande