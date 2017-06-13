# Laravel + React JS (AltJS Flux) example app

## Compile the sources

To compile the sources please run following command
```
npm run build
```

If you are in development mode you might need to watch the sources and recompile them automatically.
In that case you may use following command:
```
npm run watch
```
Besides this command will start BrowserSync session [http://localhost:3000](localhost:3000) 
which is proxying your php server. It will automatically reload the page when any asset is changed. 

## Run php local web-server

As currently this project is a simple prototype you may run it on your host with following command:
```
./artisan serve --host=127.0.0.1
```
Now your web-server is accessible via [http://localhost:8000](localhost:8000), but if you run watch command from the previous paragraph
you should access you sources via [http://localhost:3000](localhost:3000)