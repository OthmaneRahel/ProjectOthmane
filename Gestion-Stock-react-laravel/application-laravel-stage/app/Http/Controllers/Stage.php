<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ModelsStage\Utilisateurs;
use App\Models\ModelsStage\Entrepot;
use App\Models\ModelsStage\Utl_entrepot;
class Stage extends Controller
{
    public function listerUtl()
    {
        $utl = Utilisateurs::all();
        return $utl;
    }

    public function listerES($id)
    {
        $utl = Entrepot::where('entrepot_parent',$id)->get();
        return $utl;
    }

    public function AjouterUtl(Request $request)
    {
        $Utl=Utilisateurs::create([
            'nom'=>$request->nom,
            'status'=>$request->status,
            'tele'=>$request->tele,
            'fonction'=>$request->fonction,
            'login'=>$request->login,
            'password'=>$request->password,
            'type'=>$request->type,
            'devise'=>$request->devise,
        ]);
        return response()->json(['message'=>'votre Utilisateurs a ete ajouter','Utilisateurs'=>$Utl],201);
    }

    public function ModifierUtl(Request $request, $id) {
        $Utl = Utilisateurs::find($id);
        if (!$Utl) {
            return response()->json(['message' => 'Utl non trouvé'], 404);
        }
        $Utl->nom = $request->input('nom');
        $Utl->status = $request->input('status');
        $Utl->tele = $request->input('tele');
        $Utl->login = $request->input('login');
        $Utl->mdp = $request->input('password');
        $Utl->fonction = $request->input('fonction');
        $Utl->type = $request->input('type');
        $Utl->devise = $request->input('devise');
        $Utl->save();
        return response()->json(['message' => 'Utl modifié'], 200);
    }

    public function storeUtlEntrepot(Request $request)
    {
        // Validez les données de la requête
        $validatedData = $request->validate([
            'idE' => 'required|integer',
            'idU' => 'required|integer'
        ]);

        
            // Créez un nouvel enregistrement Utl_entrepot en utilisant les données validées
            $utl_entrepot = Utl_entrepot::create($validatedData);
            
            // Retournez une réponse JSON avec un code de succès et les données de l'entrepôt ajouté
            return response()->json(['message' => 'Votre Utl_entrepot a été ajouté avec succès', 'Utl_entrepot' => $utl_entrepot], 201);
        
    }
    }
    
    

