import React from 'react';
import './Produit.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IMAGE from '../Assets/img';

function Produit() {
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
      <div className="tabulr--wrapp">
        {/* <div className="tabular--wrapper"> ny eo  mbony no fafana raha haverina @taloha */}
        {/* <h3 className='main--title'>Listes Produits</h3> */}
        {/* <button type="button" class="btn btn-sm btn-info float-left" data-toggle="modal" data-target="#modal-default">
          Nouveau Client
        </button> */}
        <div className="tabl--container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Designation</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GasyPloit</td>
                <td>20</td>
                <td>1200</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rhum303</td>
                <td>20</td>
                <td>30000</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>1</td>
                <td>GasyPloit</td>
                <td>20</td>
                <td>1200</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rhum303</td>
                <td>20</td>
                <td>30000</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>1</td>
                <td>GasyPloit</td>
                <td>20</td>
                <td>1200</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rhum303</td>
                <td>20</td>
                <td>30000</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>1</td>
                <td>GasyPloit</td>
                <td>20</td>
                <td>1200</td>
                <td>RAKOto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rhum303</td>
                <td>20</td>
                <td>30000</td>
                <td>RAKOto</td>
              </tr>
            </tbody>
            <tbody>
              {
                etablissement.map((data, i) => (
                  <tr key={i.id_pro}>
                    <td>{data.id_pro}</td>
                    <td>{data.nom_pro}</td>
                    <td>{data.quantite}</td>
                    <td>{data.prix}</td>
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

        <div class="">
          <div class="carde">
            <div class="card-body">
              <center><h4 class="form">Formulaire Produit</h4></center>
              <div>
                <label class="forme-label">Identification</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Identification"
                  aria-describedby="defaultFormControlHelp"
                />
                <label class="forme-label">Designation</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Designation"
                  aria-describedby="defaultFormControlHelp"
                />
                <label class="forme-label">Quantité</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Quantité"
                  aria-describedby="defaultFormControlHelp"
                />
                <label class="forme-label">Prix</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Prix"
                  aria-describedby="defaultFormControlHelp"
                />
                <div class="form-text">
                  veillez completer tous le champ!
                </div>
                <br />
                {/* <button  className='btn-primary' type='button'>Enregistrer</button> */}
                <button type="button" class="btn btn-sm btn-info " data-toggle="modal" data-target="#modal-default">
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Produit