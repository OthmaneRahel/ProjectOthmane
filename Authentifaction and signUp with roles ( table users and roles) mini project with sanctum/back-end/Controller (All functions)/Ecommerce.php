<?php

namespace App\Http\Controllers;
use App\Mail\SendMail;
use App\Models\Categories;
use App\Models\Contact;
use App\Models\OrderItems;
use App\Models\Orders;
use App\Models\PasswordReset;
use App\Models\Product;
use App\Models\Reviews;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class Ecommerce extends Controller
{
    public function Product(){
        $product=Product::all();
        return $product;
    }
    public function Categoey(){
        $Categories = Categories::all();
        return $Categories;
    }
    public function detailproduct($id)
    {
        $product = Product::findorFail($id);
        return $product ;
    }
    public function supprimer($id)
    {
        $product = Product::destroy($id);
        if($product) {
             return response()->json("le produit id=$id est bien supprime", 200);
        }else{
            return response()->json("Error le produit id=$id n'pas supprime", 400);
        }
    }
    public function AjouterProduct(Request $request){
        $request->validate([
            'name'=>'required|string|min:4|max:20|unique:product',
            'image'=>'required|mimes:png,jpg,jpeg',
            'description'=>'required|string|min:4|unique:product',
            'prix'=>'required|min:0'
        ]);
        Product::create([
            'name' => $request->name,
            'image' => $request->file('image')->store('picturesProduts','public'),
            'prix' => $request->prix,
            'idcat' => $request->idcat,
            'description' => $request->description,
        ]);
        return response()->json('Votre Product a ete bien ajouté',201);
    }
    public function AjouterContact(Request $request){
        Contact::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'phone' => $request->phone,
            'email' => $request->email,
            'choix' => $request->choix,
            'choixSpecialise' => $request->choixSpecialise,
            'description' => $request->description,
        ]);
        return response()->json('Votre Contact a ete bien ajouté',201);
    }
    public function Contact () {
        $contact=Contact::all();
        return $contact;
    }
    public function AjouterOrders(Request $request){
        Orders::create([
            'id' => $request->id,
            'total' => $request->total,
            'status' => $request->status,
        ]);
        return response()->json('Votre Orders a ete bien ajouté',201);
    }
    public function AjouterOrderItems(Request $request){
        OrdersItems::create([
            'idpro' => $request->idpro,
            'ido' => $request->ido,
            'quantite' => $request->quantite,
            'prix' => $request->prix,
        ]);
        return response()->json('Votre Contact a ete bien ajouté',201);
    }
    public function AjouterReview(Request $request){
        Reviews::create([
            'idpro' => $request->idpro,
            'id' => $request->id,
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);
        return response()->json('Votre Contact a ete bien ajouté',201);
    }
    public function AjouterUser(Request $request){
        $request->validate([
            'name' => 'required|min:4',
            'adresse' => 'required|min:10',
            'phone' => 'required',
            'email' => 'required|unique:users'
        ]);
        $user = User::create([
            'name' => $request->name,
            'image'=> $request->file('image')->store('picturesUser','public'),
            'adresse' => $request->adresse,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);
        return response()->json(['message'=>'Votre Compte a été bien crée','user'=>$user],201);
    }
    public function AjouterCategorie(Request $request){
        Categories::create([
            'name' => $request->name,
            'description' => $request->adresse,
        ]);
        return response()->json('Votre Categories a ete bien ajouté',201);
    }
    public function UpdateProduct(Request $request, $id) {
        $VD = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'prix' => 'required|string',
            'idcat' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);
    
        $product = Product::findOrFail($id);
        $product->name = $VD['name'];
        $product->description = $VD['description'];
        $product->prix = $VD['prix'];
        $product->idcat = $VD['idcat'];
    
        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            // Store the new image
            $path = $request->file('image')->store('picturesEco', 'public');
            $product->image = $path;
        }
    
        $product->save();
    
        return response()->json(['message' => 'Produit mis à jour', 'product' => $product], 200);
    }
    public function login(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required|min:5',
        ]);
        if(!Auth::attempt(['email'=> $request->email , 'password'=>$request->password])){
            return response()->json([
                'success'=> 0,
                'message'=>'Erreur de connexion'
            ],401);
        }
        else{
            $user = auth()->user();
            $token = $user->createToken('token_user');
            return response()->json([
                'success' => 1,
                'token' => $token->plainTextToken,
                'message'=>'connexion bien',
                'user' => $user
            ],201);
        }
    }
    public function Afficher_user(){
        $user_conn = auth()->user();
        return response()->json($user_conn);
    }
    public function LogOut_user(){
        $user_conn = auth()->user();
        if($user_conn){
            $user_conn->logout();
            return response()->json(['message'=>'logout successfuly']);
        }
    }
    public function BedelUser(Request $request, $id)
    {
            $data = [
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email,
                'adresse' => $request->adresse,
                'image' => $request->file('image'),
            ];
            $user = User::find($id);
            if (!$user) {
                return response()->json("The user not found", 400);
            }
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->adresse = $request->adresse;
            if ($request->hasFile("image")) {
                $storage = Storage::disk("public");
                if ($user->image && $storage->exists($user->image)) {
                    $storage->delete($user->image);
                }
                $imageName = $request->file("image")->store("ss", "public");
                $user->image = $imageName;
            }
            $user->save();
            Mail::send('email.name', ['data1' => $data], function ($m) use ($user) {
                $m->to($user->email)
                ->subject('Send Email')
                ->from("l3alawi@gmail.com");
            });
            return response()->json(['alfmbrok' => 'Email sent successfully','message' => 'bien modifier', 'user' => $user], 200);
    }
    public function ForgotPassword(Request $request) {
        Log::info($request->all());
        $request->validate([
            'email' => 'required|email'
        ]);
        $user = User::where('email',$request->email)->first();
        if (!$user) {
            return response()->json(["message" => "The user Not Found"], 404);
        }else{
            $token = Str::random(40);
            $domain = URL::to('/');
            $url = $domain . '/reset-password?token='. $token;
            $data['url'] = $url;
            $data['email'] = $request->email;
            $data['title'] = 'Reset Password';
            $data['body'] = "Veuillez cliquer sur le lien pour réinitialiser votre mot de passe.";
            Mail::send('email.forgotPassword', compact('data','user'), function($u) use ($data) {
                $u->to($data['email'])
                ->subject($data['title'])
                ->from('lwwkprjrf@gmail.com');
            });
            $dateTime = Carbon::now()->format('Y-m-d H:i:s');
            PasswordReset::updateOrCreate(
                ['email' => $request->email],
                [
                    'token' => $token,
                    'created_at' => $dateTime,
                ]
            );
        }
        return response()->json(["success" => true, 'msg' => 'Nous avons envoyer un lien de recuperation de votre mot de passe dans '. $request->email .' Veuillez Verifier Votre Email'],200);
    }
    public function ResetPassword(Request $request){
        $rr = PasswordReset::where('token',$request->token)->first();
        if(isset($request->token) && $rr){
            $user = User::where('email',$rr->email)->first();
            if($user){
                return view("email.resetPassword",compact('user'));
            }else{
                return response()->json(['message'=>'user makaynch']);
            }
        }else{
            abort(404);
        }
    }
    public function ResetPasswordL(Request $request){
        $user = User::find($request->id);
        if($user){
            $user->password = Hash::make($request->password);
            $user->save();
            PasswordReset::where('email',$user->email)->delete();
            return 'Votre mot de passe a ete bien changé ';
        }
    }
}