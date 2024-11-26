
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './etabliissement.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IMAGE from '../Assets/img';
import { Button, Modal } from 'bootstrap';


const Etablissement = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
  // const handleUpdate = async (id) => {
  //   try {
  //     await axios.get(`http://localhost:8081/MEtablissement/${id}`)
  //       .then(res => console.log(res.data))
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log(id);

  // }

  return (
    <div className="main--content">
      <div className="tabulr--wrapper">
        <div class="col-lg-4 col-md-6">
          <div class="mt-3">
            {/* * <!-- Button trigger modal --> * */}
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalCenter"
            >
              Nouveau
            </button>

            {/* {/* <!-- Modal --> * */}
            <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
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
                    <div class="col mb-3">
                      <label for="nameWithTitle" class="form-label">Identification</label>
                      <input
                        type="text"
                        id="Identification"
                        name='Identifiacation'
                        class="form-control"
                        placeholder="Mon identification"
                      />
                    </div>
                    <div class="row g-2">
                      <div class="col mb-0">
                        <label for="emailWithTitle" class="form-label">Nom et prenom</label>
                        <input
                          type="text"
                          id="nom"
                          name='nom'
                          class="form-control"
                          placeholder="Entrer nom et Prenom"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="nameWithTitle" class="form-label">Lot</label>
                        <input
                          type="text"
                          id="Lot"
                          name='Lot'
                          class="form-control"
                          placeholder="Entre votre Lot"
                        />
                        {/* <div class="col mb-3">
                          <label for="nameWithTitle" class="form-label">Lot</label>
                          <input
                            type="text"
                            id="Lot"
                            name='Lot'
                            class="form-control"
                            placeholder="Enter Name"
                          />
                        </div> */}
                      </div>
                    </div>
                    <div class="row g-2">
                      <div class="col mb-0">
                        <label for="emailWithTitle" class="form-label">tel</label>
                        <input
                          type="text"
                          id="emailWithTitle"
                          class="form-control"
                          placeholder="Mon numero"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                      Annuler
                    </button>
                    <button type="button" class="btn btn-primary">Ajouter</button>
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
                  <tr key={i.code_etab}>
                    <td>{data.code_etab}</td>
                    <td>{data.zap}</td>
                    <td>{data.nom_etab}</td>
                    <td>{data.genr_etab}</td>
                    <td>
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
  );
}

export default Etablissement