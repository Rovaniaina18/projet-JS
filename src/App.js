import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Etablissement from './Etablissement/Etablissement';
import Layout from './Layout';
import Dasbord from './Dasbord/Dasbord';
import Produit from './Produit/Produit';
import Commande from './Commande/Commande';
import Client from './Client/Client';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/*' element={
              <Layout>
                <Routes>
                    <Route path='/Etablissement' element={<Etablissement />} />
                    <Route path='/Dasbord' element={<Dasbord/>}/>
                    <Route path='/Produit' element={<Produit/>}/>
                    <Route path='/Commande' element={<Commande/>}/>
                    <Route path='/Client' element={<Client/>}/>
                </Routes>
              </Layout>
            } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
