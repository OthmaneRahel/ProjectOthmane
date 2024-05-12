<?php

namespace App\Http\Controllers\TpCrudAPI;
use App\Models\CrudClient\Produit;
use App\Models\CrudClient\Categorie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ControllerApi extends Controller
{
    //Produits :
        //Affichage des listes des produits :
            public function AfficherListProduit(){
                $listprod = Produit::all();
                return $listprod;
            }
        //La suppression produits :
            public function DeleteProduit($id){
                $prodSupp = Produit::destroy($id);
                if($prodSupp){
                    return response()->json('Votre Produit a été supprimé avec success',200);
                }else{
                    return response()->json('Votre Produit est n\'est pas supprimé',400);
                }
            }
        // ajouter produit :
            public function AjouterProduit(Request $request){
                $produits = Produit::create([
                    'idCategorie' => $request->idCategorie,
                    'NomProduit' => $request->NomProduit,
                    'prix' => $request->prix,
                    'quantite' => $request->quantite,
                ]);
                return response()->json(['message'=>'Votre produit a été ajouté' ,'produit'=>$produits],201);
            }
        //modifier produit :
            public function ModifierProduit(Request $request , $id) {
                $prod = Produit::find($id);
                $prod->update([
                    'idCategorie' => $request->idCategorie,
                    'NomProduit' => $request->NomProduit,
                    'prix' => $request->prix,
                    'quantite' => $request->quantite,
                ]);
                return response()->json(['message'=>'Votre produit a été modifié avec success','prodMod'=>$prod],200);
            }

        //categorie :
            //Afficher list categories :
                public function AfficherListCategories(){
                    $listcate = Categorie::all();
                    return $listcate;
                }
            //la suppression d'un categorie :
                public function DeleteCategorie($id){
                    $cateSupp = Categorie::destroy($id);
                    if($cateSupp){
                        return response()->json('Votre Categorie a été supprimé avec success',200);
                    }else{
                        return response()->json('Votre Categorie est n\'est pas supprimé',400);
                    }
                }
            //ajouter categorie :
                public function AjouterCategorie(Request $request){
                    // $request->validate([
                    //     'idCategorie' => 'required',
                    // ]);
                    $categories = Categorie::create([
                        'nom' => $request->nom,
                        'description' => $request->description,
                    ]);
                    return response()->json(['message'=>'Votre categorie a été ajouté' ,'categorie'=>$categories],201);
                }
            //modifier categorie :
                public function ModifierCategorie(Request $request , $id) {
                    $cat = Categorie::find($id);
                    $cat->update([
                        'nom' => $request->nom,
                        'description' => $request->description,
                    ]);
                    return response()->json(['message'=>'Votre categorie a été modifié avec success','prodMod'=>$cat],200);
                }

        
}
