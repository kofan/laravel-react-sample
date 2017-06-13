<!DOCTYPE html>
<html>
    <head>
        <title>Laravel React Sample Application</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <link href="{{ elixir('css/app.css') }}" type="text/css" rel="stylesheet" />
        <link href="{{ asset('extra_components/jquery-ui/jquery-ui.min.css') }}" type="text/css" rel="stylesheet" />

    </head>
    <body>
        <div id="react-app"></div>
        <script src="{{ elixir('js/app.bundle.js') }}" type="text/javascript"></script>
    </body>
</html>
