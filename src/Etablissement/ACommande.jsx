import React from 'react'

function ACommande() {
  return (
    <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Ajout commande</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="" method="POST"  name="myForm" onsubmit="return validateForm()">
                    <div class="modal-body">

                        <div class="form-group">
                        <label for="nom">Nom client</label>
                        <select name="id_client" 
                            class="form-control select2 select2-danger" 
                            data-dropdown-css-class="select2-default" 
                            style="width: 100%;">     
                                <option></option>
                        </select>
                        </div>
                        <div class="form-group">
                            <label for="nom">Produit commandé</label>
                            <select 
                                name="id_produit" 
                                class="form-control select2 select2-danger" 
                                data-dropdown-css-class="select2-default" 
                                style="width: 100%;">    
                                    <option></option>
                            </select>
                        </div>
                        <div class="form-group">
                        <label for="qte">Quantité commandé</label>
                        <input 
                            type="text" 
                            id="qte" 
                            value="" 
                            name="qte" 
                            class="form-control"
                        />
                        <span class="text-danger"></span>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                        <button type="submit"  class="btn btn-primary">Enregistrer</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default ACommande