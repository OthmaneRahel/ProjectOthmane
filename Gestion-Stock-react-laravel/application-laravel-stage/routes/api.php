<?php
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerStage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Stage ;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/AfficherListEntrepots',[ControllerStage::class,'AfficherListEntrepots']);
Route::get('/listerResponsable',[ControllerStage::class,'listerResponsable']);
Route::get('/listerVendeur',[ControllerStage::class,'listerVendeur']);
Route::get('/listerClient',[ControllerStage::class,'listerClient']);
Route::get('/listerFornisseur',[ControllerStage::class,'listerFornisseur']);

Route::post('/Ajouter-Entrepot',[ControllerStage::class,'AjouterEntrepot']);
Route::post('/AjouterClt',[ControllerStage::class,'AddClient']);
Route::post('/listerResponsable',[ControllerStage::class,'ajouterResponsable']);
Route::post('/listerFornisseur',[ControllerStage::class,'ajouterFornisseur']);
Route::post('/listerVendeur',[ControllerStage::class,'ajouterVendeur']);

Route::delete('/AfficherListEntrepots/{id}',[ControllerStage::class,'SupprimerEntrpot']);
Route::delete('/SupprimerDepense/{id}',[ControllerStage::class,'SupprimerDepense']);
Route::delete('/supprimerFornisseur/{id}',[ControllerStage::class,'supprimerFornisseur']);
Route::delete('/supprimerResponsable/{id}',[ControllerStage::class,'supprimerResponsable']);
Route::delete('/supprimerVendeur/{id}',[ControllerStage::class,'supprimerVendeur']);

// Route::put('/AfficherListEntrepots/{id}',[ControllerStage::class,'ModifierEntrepot']);
// Route::put('/listerClient/{id}',[ControllerStage::class,'ModifierClient']);
Route::put('/listerFournisseur/{id}',[ControllerStage::class,'Modifierfournisseur']);
Route::put('/listerResponsable/{id}',[ControllerStage::class,'ModifierResponsable']);
Route::put('/listerVendeur/{id}',[ControllerStage::class,'ModifierVendeur']);

Route::get('/CategoriesDepenses',[ControllerStage::class,'AfficherListCategorieDepense']);
Route::post('/AjouterCategoriedepense',[ControllerStage::class,'AjouterCategorieDepense']);
Route::delete('/SupprimerCategoriedepense/{id}',[ControllerStage::class,'SupprimerCategorieDepences']);
Route::put('/ModifierCategoriedepense/{id}',[ControllerStage::class,'ModifierCategorieDepences']);
Route::post('/Ajouter-Entrepot',[ControllerStage::class,'AjouterEntrepot']);
Route::get('/AfficherListEntrepots',[ControllerStage::class,'AfficherListEntrepots']);
Route::get('/AfficherListDepenses',[ControllerStage::class,'AfficherListDepense']);
Route::get('/Affb',[ControllerStage::class,'getEntrepotDetails']);
Route::post('/Ajouter-depense/{id}',[ControllerStage::class,'AjouterDepense']);
Route::put('/AfficherListEntrepots/{id}',[ControllerStage::class,'ModifierEntrepot']);
Route::put('/Modifier-depense/{id}',[ControllerStage::class,'ModifierDepense']);
// Route::post('/login',[ControllerStage::class,'login']);

Route::get('/AffCategorie',[ControllerStage::class,'AfficherListCategorie']);
Route::post('/Ajouter-categorie',[ControllerStage::class,'AjouterCategorie']);
Route::delete('/Supprimer-categorie/{id}',[ControllerStage::class,'SupprimerCategorie']);
Route::put('/Modifier-categorie/{id}',[ControllerStage::class,'ModifierCategorie']);

Route::get('/AfficherListProduits',[ControllerStage::class,'AfficherListProduit']);
Route::get('/AfficherListMarque',[ControllerStage::class,'AfficherListMarque']);
Route::post('/ajouter-produit',[ControllerStage::class,'AjouterProduit']);
Route::delete('afficherproduit/{id}',[ControllerStage::class,'SupprimerProduit']);
Route::put('/Modifier-produit/{id}',[ControllerStage::class,'ModifierProduit']);

Route::get('/r', [ControllerStage::class, 'listerResponsables']);
Route::get('/v', [ControllerStage::class, 'listerVendeurs']);
Route::get('/c', [ControllerStage::class, 'listerClients']);
Route::get('/f', [ControllerStage::class, 'listerFournisseurs']); 

Route::post('/c', [ControllerStage::class, 'AjouterClient']);
Route::post('/r', [ControllerStage::class, 'AjouterResponsable']);
Route::post('/f', [ControllerStage::class, 'AjouterFornisseur']);
Route::post('/v', [ControllerStage::class, 'AjouterVendeur']);

// Delete
Route::delete('/supprimerClient/{id}', [ControllerStage::class, 'supprimerClient']);
Route::delete('/supprimerFornisseur/{id}', [ControllerStage::class, 'supprimerFornisseur']);
Route::delete('/supprimerResponsable/{id}', [ControllerStage::class, 'supprimerResponsable']);
Route::delete('/supprimerVendeur/{id}', [ControllerStage::class, 'supprimerVendeur']);

// Update
Route::put('/c/{id}', [ControllerStage::class, 'ModifierClient']);
Route::put('/f/{id}', [ControllerStage::class, 'ModifierFornisseur']);
Route::put('/r/{id}', [ControllerStage::class, 'ModifierResponsable']);
Route::put('/v/{id}', [ControllerStage::class, 'ModifierVendeur']);


Route::get('/affDep/{id}', [ControllerStage::class, 'AfficherListDep']); 
Route::get('/afficher-liste-produits-par-entrepot',[ControllerStage::class,'AfficherListProduitsParEntrepot']);
Route::post('/Ajouter-coffre/{id}',[ControllerStage::class,'AjouterCoffre']);


Route::post('/u', [Stage::class, 'AjouterUtl']);
Route::get('/es/{id}', [Stage::class, 'listerES']);
Route::post('/ue', [Stage::class, 'storeUtlEntrepot']);
Route::get('/listeE', [Stage::class, 'listerEntrepots']);