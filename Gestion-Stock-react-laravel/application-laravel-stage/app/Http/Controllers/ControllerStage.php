<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\ModelsStage\Entrepot;
use App\Models\ModelsStage\Client;
use App\Models\ModelsStage\Vendeur;
use App\Models\ModelsStage\Responsable;
use App\Models\ModelsStage\Fornisseur;
use App\Models\ModelsStage\CategorieDepences;
use App\Models\ModelsStage\Produits;
use App\Models\ModelsStage\Depences;
use App\Models\ModelsStage\Marques;
use App\Models\ModelsStage\Categories;
use App\Models\ModelsStage\Coffres;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ControllerStage extends Controller
{
    public function AfficherListCategorieDepense(){
        $listCategorieDepense = CategorieDepences::all();
        return $listCategorieDepense;
    }
    public function AjouterCategorieDepense(Request $request){
        CategorieDepences::create([
            'code_categorie'=>$request->code_categorie,
            'nom'=>$request->nom
        ]);
        return response()->json('Votre categorie depense a été bien ajouté',201);
    }
    public function SupprimerCategorieDepences($id){
        $listCatDep = CategorieDepences::destroy($id);
        if($listCatDep){
            return response()->json('La categorie depence a été bien supprimé',200);
        }else{
            response()->json('Erreur de la suppression',400);
        }    
    }
    public function ModifierCategorieDepences(Request $request , $id){
        $listCatDep = CategorieDepences::find($id);
        $listCatDep->update([
            'code_categorie'=>$request->code_categorie,
            'nom'=>$request->nom
        ]);
        return response()->json('La categorie depence a été bien modifié',200);
    }
        public function AfficherListEntrepots(){
            $ListEntrepots = Entrepot::all();
            return $ListEntrepots;
        }
        public function AjouterEntrepot(Request $request){
            $entrepot = Entrepot::create([
                'code' => $request->code,
                'nom' => $request->nom,
                'adresse' => $request->adresse,
                'type' => $request->type,
                'entrepot_parent' => $request->entrepot_parent,
            ]);
            return response()->json(['message' => 'Votre entrepot a été ajouté avec succès','prod'=>$entrepot], 201);
        }
    public function AfficherListDepense(){
        $listDepense = Depences::all();
        return $listDepense;
    }
    public function AjouterDepense(Request $request , $id){
        $depense = Depences::create([
            'date_depense' => $request->date_depense,
            'Ref' => $request->Ref,
            'categorie' => $request->categorie,
            'Montant' => $request->Montant,
            'Note' => $request->Note,
            'idE'=>$id
        ]);
        return response()->json(['message' => 'Votre depense a été ajouté avec succès','depense'=> $depense ], 201);
    }
    public function SupprimerEntrpot ($id){
        $listEnt = Entrepot::destroy($id);
        if($listEnt){
            return response()->json(['message'=>'Votre Entrepot a ete bien supprime' , 'entrepot' => $listEnt],200);
        }else{
            return response()->json('Votre Entrepot est n\'est pas supprimé',400);
        }
    }

    public function SupprimerDepense($id){
        $listEnt = Depences::destroy($id);
        if($listEnt){
            return response()->json(['message'=>'Votre Depence a ete bien supprime' , 'entrepot' => $listEnt],200);
        }else{
            return response()->json('Votre Depence est n\'est pas supprimé',400);
        }
    }
    public function ModifierEntrepot(Request $request , $id){
        $entSpe = Entrepot::find($id);
        $code = $request->code;
        $nom = $request->nom;
        $telephone = $request->telephone;
        $email = $request->email;
        $adresse = $request->adresse;
        $type = $request->type;
        $entrepot_map = $request->entrepot_map;
        $entSpe-> update([
            'code'=> $code,
            'nom'=>$nom,
            'telephone'=>$telephone,
            'email'=>$email,
            'adresse'=>$adresse,
            'type'=>$type,
            'entrepot_map'=>$entrepot_map,
        ]);
        return response()->json('Votre entrepot a ete bien modifier',200);
    }
    public function ModifierDepense(Request $request , $id){
        $entSpe = Depences::find($id);
        $entSpe-> update([
            'code'=> $request->date_depense,
            'Ref'=>$request->Ref,
            'idCate_dep'=>$request->idCate_dep,
            'idE'=>$request->idE,
            'Montant'=>$request->Montant,
            'Note'=>$request->Note,
        ]);
        return response()->json('Votre depense a ete bien modifier',200);
    }
    public function AfficherListCategorie(){
        $ListCat= Categories::all();
        return $ListCat;
    }
    public function AjouterCategorie(Request $request){
        $entrepot = Categories::create([
            'image' => $request->file('image')->store('PicturesCategorie','public'),
            'code_cat' => $request->code_cat,
            'Nom_categorie' => $request->Nom_categorie,
            'Description' => $request->Description,
            'Categorie_parent' => $request->Categorie_parent,
        ]);
        return response()->json(['message' => 'Votre catégorie a été ajouté avec succès','prod'=>$entrepot], 201);
    }
    public function SupprimerCategorie($id){
        $listEnt = Categories::destroy($id);
        if($listEnt){
            return response()->json(['message'=>'Votre catégorie a ete bien supprime' , 'entrepot' => $listEnt],200);
        }else{
            return response()->json('Votre catégorie est n\'est pas supprimé',400);
        }
    }
    public function ModifierCategorie(Request $request, $id)
    {
        $entSpe = Categories::find($id);
        if ($request->hasFile('image')) {
            Storage::delete($entSpe->image);
            $entSpe->image = $request->file('image')->store('PicturesCategorie', 'public');
        }
        $entSpe->update([
            'code_cat' => $request->code_cat,
            'Nom_categorie' => $request->Nom_categorie,
            'Description' => $request->Description,
            'Categorie_parent' => $request->Categorie_parent,
        ]);

        return response()->json('Votre catégorie a été modifiée avec succès', 200);
    }
    public function AfficherListProduit(){
        $listProd = Produits::all();
        return $listProd;
    }
    public function AfficherListMarque(){
        $listMarque = Marques::all();
        return $listMarque;
    }
    public function AjouterProduit(Request $request){
        Produits::create([
            'nom' => $request->nom,
            'code' => $request->code,
            'unite' => $request->unite,
            'caisse' => $request->caisse,
            'tare' => $request->tare,
            'poids' => $request->poids,
            'Nombre_palette' => $request->Nombre_palette,
            'Fourchette_de' => $request->Fourchette_de,
            'Fourchette_a' => $request->Fourchette_a,
            'prix' => $request->prix,
            'Alerte_Quantité' => $request->Alerte_Quantité,
            'idMarque' => $request->idMarque,
            'idCat' => $request->idCat,
            'idE' => $request->idE,
            'qte' => $request->qte,
            'image' => $request->file('image')->store('picturesProducts','public'),
            // 'image' => $request->file('image')->store('picturesProducts','public'),
        ]);   
        return response()->json(['message' => 'Votre produit a été ajouté avec succès'], 201);
    }
    
    public function SupprimerProduit($id){
        $listEnt = Produits::destroy($id);
        if($listEnt){
            return response()->json(['message'=>'Votre produit a ete bien supprime' , 'entrepot' => $listEnt],200);
        }else{
            return response()->json('Votre produit est n\'est pas supprimé',400);
        }
    }
    public function ModifierProduit(Request $request, $id)
    {
        $entSpe = Produits::find($id);
        if ($request->hasFile('image')) {
            Storage::delete($entSpe->image);
            $entSpe->image = $request->file('image')->store('picutresProduit', 'public');
        }
        $entSpe->update([
                'nom' => $request->nom,
                'code' => $request->code,
                'email' => $request->email,
                'unite' => $request->unite,
                'caisse' => $request->caisse,
                'tare' => $request->tare,
                'poids' => $request->poids,
                'Nombre_palette' => $request->Nombre_palette,
                'Fourchette_de' => $request->Fourchette_de,
                'Fourchette_a' => $request->Fourchette_a,
                'prix' => $request->prix,
                'Alerte_Quantité' => $request->Alerte_Quantité,
                'idMarque' => $request->idMarque,
                'idCat' => $request->idCat,
            ]);
        return response()->json('Votre produit a été modifiée avec succès', 200);
    }
    public function AfficherListProduitsParEntrepot(Request $request){
        $idE = $request->input('idE');
        
        // Recherche de l'entrepôt par son ID
        $entrepot = Entrepot::find($idE);
        
        // Vérification si l'entrepôt existe
        if($entrepot){
            // Récupération de la liste des produits liés à cet entrepôt
            $listeProduits = $entrepot->produits()->get();
            // Retourner la liste des produits en réponse JSON
            return response()->json($listeProduits);
        } else {
            // Retourner une réponse indiquant que l'entrepôt n'a pas été trouvé
            return response()->json(['message' => 'Entrepôt non trouvé'], 404);
        }
    }
    public function listerClients()
    {
        $clients = Client::all();
        return $clients;
    }

    public function listerFournisseurs()
    {
        $fournisseurs = Fornisseur::all();
        return $fournisseurs;
    }

    public function listerResponsables()
    {
        $responsables = Responsable::all();
        return $responsables;
    }

    public function listerVendeurs()
    {
        $vendeurs = Vendeur::all();
        return $vendeurs;
    }

    public function AjouterClient(Request $request)
    {
        $client=Client::create([
            'nom'=>$request->nom,
            'status'=>$request->status,
            'tele'=>$request->tele,
            'solde_intial'=>$request->solde_intial,
            'login'=>$request->login,
            'password'=>$request->password,
            'idE'=>$request->idE,
        ]);
        return response()->json(['message'=>'votre Client a ete ajouter','client'=>$client],201);
    }
    public function AjouterResponsable(Request $request)
    {
        $responsable=Responsable::create([
            'nom'=>$request->nom,
            'status'=>$request->status,
            'tele'=>$request->tele,
            'login'=>$request->login,
            'password'=>$request->password,
            'idE'=>$request->idE,
        ]);
        return response()->json(['message'=>'votre responsable a ete ajouter','responsable'=>$responsable],201);
    }
    public function AjouterFornisseur(Request $request)
    {
        $fornisseur=Fornisseur::create([
            'nom'=>$request->nom,
            'status'=>$request->status,
            'tele'=>$request->tele,
            'type'=>$request->type,
            'devise'=>$request->devise,
            'idE'=>$request->idE,
        ]);
        return response()->json(['message'=>'votre Fornisseur a ete ajouter','fornisseur'=>$fornisseur],201);
    }
    public function AjouterVendeur(Request $request)
    {
        $vendeur = Vendeur::create([
            'nom' => $request->nom,
            'status' => $request->status,
            'tele' => $request->tele,
            'login' => $request->login,
            'password' => $request->password,
            'idE' => $request->idE,
        ]);
        return response()->json(['message' => 'Votre Vendeur a été ajouté', 'vendeur' => $vendeur], 201);
    }
    public function supprimerClient($id)
    {
        $client = Client::destroy($id);
        if($client) {
             return response()->json("le Client id=$id est bien supprime", 200);
        }else{
            return response()->json("Error le Client id=$id n'pas supprime", 400);
        }
    }
    public function supprimerResponsable($id)
    {
        $res = Responsable::destroy($id);
        if($res) {
             return response()->json("le Responsable id=$id est bien supprime", 200);
        }else{
            return response()->json("Error le Responbale id=$id n'pas supprime", 400);
        }
    }
    public function supprimerFornisseur($id)
    {
        $for = Fornisseur::destroy($id);
        if($for) {
             return response()->json("le Fornisseur id=$id est bien supprime", 200);
        }else{
            return response()->json("Error le Fornisseur id=$id n'pas supprime", 400);
        }
    }
    public function supprimerVendeur($id)
    {
        $ven = Vendeur::destroy($id);
        if($ven) {
             return response()->json("le Vendeur id=$id est bien supprime", 200);
        }else{
            return response()->json("Error le Vendeur id=$id n'pas supprime", 400);
        }
    }
    public function ModifierClient(Request $request, $id) {
        $client = Client::find($id);
        if (!$client) {
            return response()->json(['message' => 'Client non trouvé'], 404);
        }
        $client->nom = $request->input('nom');
        $client->status = $request->input('status');
        $client->tele = $request->input('tele');
        $client->solde_intial = $request->input('solde_intial');
        $client->login = $request->input('login');
        $client->password = $request->input('password');
        $client->idE = $request->input('idE');
        $client->save();
        return response()->json(['message' => 'Client modifié'], 200);
    }
    
    public function ModifierResponsable(Request $request, $id) {
        $Responsable = Responsable::find($id);
        if (!$Responsable) {
            return response()->json(['message' => 'Responsable non trouvé'], 404);
        }
        $Responsable->nom = $request->input('nom');
        $Responsable->status = $request->input('status');
        $Responsable->tele = $request->input('tele');
        $Responsable->login = $request->input('login');
        $Responsable->password = $request->input('password');
        $Responsable->idE = $request->input('idE');
        $Responsable->save();
        return response()->json(['message' => 'Responsable modifié'], 200);
    }
    public function ModifierFornisseur(Request $request, $id) {
        $Fornisseur = Fornisseur::find($id);
        if (!$Fornisseur) {
            return response()->json(['message' => 'Fornisseur non trouvé'], 404);
        }
        $Fornisseur->nom = $request->input('nom');
        $Fornisseur->status = $request->input('status');
        $Fornisseur->tele = $request->input('tele');
        $Fornisseur->type = $request->input('type');
        $Fornisseur->idE = $request->input('idE');
        $Fornisseur->devise = $request->input('devise');

        return response()->json(['message' => 'Fornisseur modifié'], 200);
    }
    public function ModifierVendeur(Request $request, $id)
    {
        $vendeur = Vendeur::find($id);
        if (!$vendeur) {
            return response()->json(['message' => 'Vendeur non trouvé'], 404);
        }
        $vendeur->nom = $request->input('nom');
        $vendeur->status = $request->input('status');
        $vendeur->tele = $request->input('tele');
        $vendeur->login = $request->input('login');
        $vendeur->password = $request->input('password');
        $vendeur->idE = $request->input('idE');
        $vendeur->save();
        return response()->json(['message' => 'Vendeur modifié'], 200);
    }
    public function AfficherListDep($id){
        $listDep = Depences::where('idE', $id)->get();
        return $listDep;
    }
    public function AjouterCoffre(Request $request , $id){
        $listCoffre = Coffres::create([
            'NomCoffre' => $request->NomCoffre,
            'solde' => $request->solde,
            'detailSolde' => $request->detailSolde,
            'idE' => $id,
            'Nom_de_la_part' => $request->Nom_de_la_part,
            'type_Solde_coffre' => $request->type_Solde_coffre,
            'date_echeance' => $request->date_echeance,
            'Montant_total' => $request->Montant_total,
        ]);
        return response()->json(['message'=>'votre coffre a été bien ajouté','coff'=>$listCoffre]);
    }
}