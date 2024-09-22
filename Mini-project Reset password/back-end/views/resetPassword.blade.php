<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>reset password</title>
</head>
<body>
    <form action="{{ route('sauvegarderR') }}" method="post">
        @csrf
        <input type="hidden" name="id_etu" value="{{$etud->id_etu}}"/>
        <label for="">New Password :</label>
        <input type="password" name="password" /><br>
        <input type="submit" value="confirmer" />
    </form>
</body>
</html>