<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password</title>
</head>
<body>
    <h5>Bonjour {{ $etudiant->nom }} {{ $etudiant->prenom }}</h5>
    <p>Veuillez cliquer sur le lien pour réinitialiser votre mot de passe.</p>
    <a href="{{ url('reset-password?token='.$data['token']) }}">Click pour reinaliser le mot de passe </a>
</body>
</html>