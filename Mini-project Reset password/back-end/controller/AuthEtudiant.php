<?php

namespace App\Http\Controllers\GestionEtudiant;
use App\Http\Controllers\Controller;
use App\Models\Etudiant;
use App\Models\password_Reset_Eudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthEtudiant extends Controller
{
    public function loginEtudiant(Request $request){
        $request->validate([
            'CNE' => 'required|min:10',
            "password" => 'required|min:6|max:20',
        ]);
        if(!Auth::guard('etudiants')->attempt(['CNE'=>$request->CNE ,'password'=>$request->password])){
            return response()->json(['message'=>false],401);       
        }
        $user =  auth()->guard('etudiants')->user();
        $token = $user->createToken('token_etudiant')->plainTextToken;
        return response()->json(['message'=>true,'user'=>$user,'token'=>$token],200);
    }
    public function User_Name_Etudiant(){
        $token = request()->bearerToken();
        $user = auth()->user();
        if($user){
            return response()->json(['user'=>$user]);
        }else{
            return response()->json(['user'=>'gg']);
        }
    }
    public function Logout_Etudiant(){
        $user = auth()->user();
        Auth::logout();
        return response()->json(['message'=>"logout successfully"],200);
        
    }
    public function ForgotPassword_Etudiant(Request $request){
        $request->validate([
            'CNE' => 'required|email',
        ]);
        $etudiant = Etudiant::where('CNE',$request->CNE)->first();
        if($etudiant){
            $token = Str::random(40);
            $data['token'] = $token;
            $data['CNE']= $request->CNE;
            Mail::send('ViewsGestionEtudiants.InterfaceResetPasswordEtudiant',compact('data','etudiant'), function($etu) use($data) {
                $etu->from('no-reply@school.ma','Notre School Management');
                $etu->to($data['CNE'])->subject('Reset Password');
            });
            $time = Carbon::now()->format('Y-m-d H:i:s');
            password_Reset_Eudiant::updateOrCreate(
                ['CNE' => $request->CNE],
                [ 
                    'token' => $token,
                    'created_at' => $time,
                ]
            );
            return response()->json(['success'=>true],200);
        }else{
            return response()->json(['success' => false , 'message'=>'This CNE not Found'],400);
        }
    }
    public function resetPassword(Request $request){
        $token_bien = password_Reset_Eudiant::where('token',$request->token)->first();
        //return $token_bien;
        if(isset($request->token) && $token_bien){
            $etud = Etudiant::where('CNE',$token_bien->CNE)->first();
            //return $etud;
            return view("ViewsGestionEtudiants.resetPassword",compact('etud')); 
        }else{
            abort(404);
        }
    }
    public function Sauvegarder_Password_Etudiant(Request $request){
        $etudi = Etudiant::find($request->id_etu);
        $etudi->password = Hash::make($request->password);
        $etudi->save();
        return '<h1>Votre mot de  passe a ete bien changé<h1>';
    }
}
