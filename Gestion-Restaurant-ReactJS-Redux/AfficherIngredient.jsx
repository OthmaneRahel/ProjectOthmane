import React from "react";
import { useSelector } from "react-redux";
export default function AfficherIngredient(){
    const Recette = useSelector((state)=>state.recette)
    console.log(Recette)
    return (
        <div>
            <br />
            <h1>Liste Ingredient</h1><br />
            <table className="table table-striped">
                <thead>
                    <th>Nom Ingredient</th>
                    <th>Quantite ingredient</th>
                </thead>
            
          {Recette.map((recette) => (
             <tbody>
              {recette.ingredients.map((ingredient) => (
                <tr >
                  <td>{ingredient.nom}</td>
                  <td>{ingredient.quantite}</td>
                  <td><button type="button" className="btn btn-primary">Modifier</button></td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        </div>
      )}