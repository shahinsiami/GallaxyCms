<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>window.Laravel = {csrfToken: '{{csrf_token()}}'}</script>
    <link rel="stylesheet" type="text/css" href="css/view/siteview.css">
    <link rel="stylesheet" type="text/css" href="font/files/font.css">
    <!-- <link rel="shortcut icon" href="img/favicon.ico"> -->
    <meta name="theme-color" content="#01BF81"/>
    <title>صفحه رسمی دکتر محمد قربانی </title>
</head>
<body>
<div id="siteview" style="height:100vh;overflow-x:hidden">
    <!-- <faheader></faheader> -->
    <router-multi-view view-name="home"/>
    <!-- <fafooter></fafooter> -->
</div>
</body>

<script src="js/view/webfa.js"></script>

</html>
