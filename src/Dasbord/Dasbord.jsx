import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './dasbord.css';
import IMAGE from '../Assets/img';

function Dasbord() {
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


  return (
    <>
      <div className="main--content">
        <div class="row">
          <div class="col-lg-8 mb-4 order-0">
            <div class="card">
              <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title text-primary">Création de Projet  By Fan'ilou</h5>
                    <p class="mb-4">
                      Bonjour à tous <span class="fw-bold">72%</span> Bien venue sur l'appliacationde
                      Gestion de
                      ventes des produit Alcolique à Madagascar.
                    </p>

                  </div>
                </div>
                <div class="col-sm-5 text-center text-sm-left">
                  <div class="card-body pb-0 px-0 px-md-4">
                    <img src={IMAGE.imgDix} className='' height={140} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 order-1">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img src={IMAGE.imgNf} className='rounded' height={42} />
                      </div>
                    </div>
                    <span class="fw-semibold d-block mb-1">Produit</span>
                    <h3 class="card-title mb-2">12</h3>
                    <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> Pro en
                      %</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img src={IMAGE.imgNfe} className='rounded' height={42} />
                      </div>
                    </div>
                    <span class="fw-semibold d-block mb-1">Clients</span>
                    <h3 class="card-title text-nowrap mb-1"> <center> 12</center></h3>
                    <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>Client</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div class="card">
              <div class="row row-bordered g-0">
                <div class="col-md-8">
                  <h5 class="card-header m-0 me-2 pb-3">Commande en globale</h5>
                  <div id="totalRevenueChart" class="px-2"></div>
                </div>
                <div class="col-md-4">
                  <div class="card-body">
                    <div class="text-center">
                      <div class=" ">

                        Soa ny fiarahana eto <br />
                        Centre Alcolique

                      </div>
                    </div>
                  </div>
                  <div id="growthChart"></div>
                  <div class="text-center fw-semibold pt-3 mb-2">62% Complany Alcolique</div>

                  <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                    <div class="d-flex">
                      <div class="me-2">
                        <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
                      </div>
                      <div class="d-flex flex-column">
                        <small>Lieu</small>
                        <h6 class="mb-0">Andrainjato</h6>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="me-2">
                        <span class="badge bg-label-info p-2"><i class="bx bx-wallet text-info"></i></span>
                      </div>
                      <div class="d-flex flex-column">
                        <small>Livraison</small>
                        <h6 class="mb-0">Tous provinces</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
            <div class="row">
              <div class="col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img src={IMAGE.imgNfee} className='rounded' height={42} />
                      </div>
                    </div>
                    <span class="fw-semibold d-block mb-1">Commande</span>
                    <h3 class="card-title text-nowrap mb-2">12</h3>
                    <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> Commandes   Aprouver</small>
                  </div>
                </div>
              </div>
              <div class="col-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="card-title d-flex align-items-start justify-content-between">
                      <div class="avatar flex-shrink-0">
                        <img src={IMAGE.imgNef} className='rounded' height={42} />
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn p-0"
                          type="button"
                          id="cardOpt1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                      </div>
                    </div>
                    <span class="fw-semibold d-block mb-1">Prix mascimum</span>
                    <h3 class="card-title mb-2">1200ar</h3>
                    <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> Heut qualité</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dasbord