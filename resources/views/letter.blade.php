<!doctype html>
<html lang="{{ app()->getLocale() }}" style="background-color: #ffc9d5;">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>window.Laravel = {csrfToken: '{{csrf_token()}}'}</script>
    {{--css--}}
    <link rel="stylesheet" type="text/css" href="plugin/css/bootstrap/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="font/files/font.css">
    {{--css--}}
    <title>Vira</title>
</head>
<body style="width: 1050px !important;">
<div id="letter" class="d-flex flex-row w-100 justify-content-center ">
        <router-multi-view view-name="letter"/>
</div>
</div>
</body>
<script src="js/letter/letter.js"></script>
<script src="plugin/js/bootstrap/bootstrap.js"></script>
</html>
