import React from "react";
import { useSelector } from "react-redux";
export default function AfficherRecette(){
    const rec = useSelector((state)=>state.recette)
    return (
        <div>
            <br />
            <h1>Liste Ingredient</h1><br />
            <table className="table table-striped">
                <thead>
                    <th>Id Recette</th>
                    <th>Nom Recette</th>
                </thead>
            <tbody>
              {
                rec.map((i)=>{
                    return <tr>
                        <td>{i.id}</td>
                        <td>{i.nom}</td>
                        <td><button type="button"className="btn btn-primary">Modifier</button></td>
                    </tr>
                })
            }
            </tbody>
        </table>
        </div>
    )
}