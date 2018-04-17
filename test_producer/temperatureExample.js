/**
 * Created by OscarVargas on 2/27/16.
 */
var mqtt    = require('mqtt');
var options = [{host:'localhost', port:1883}]
var client  = mqtt.connect('mqtt://localhost', options);

client.on('connect', function () {

   /** var tmplength = Math.random() * (2000 - 1) + 1*/
   var tmplength = 10

  /** for(var i=0;i<tmplength;i++)
    {
        var tmpCelsius= Math.random() * (100 - 1) + 1

        client.publish('celsius', tmpCelsius.toString() );

        console.info("celsius:"+tmpCelsius);
    }



    for(var i=0;i<tmplength;i++)
    {
        var tmpFahrenheit= Math.random() * (100 - 1) + 1
        client.publish('fahrenheit',  tmpFahrenheit.toString());
        console.info("fahrenheit:"+tmpFahrenheit);
    }*/


    for(var i=0;i<tmplength;i++)
    {
        var tmpFahrenheit= Math.random() * (100 - 1) + 1
        client.publish('temperature',  tmpFahrenheit.toString());
        console.info("temperature:"+tmpFahrenheit);
    }


    client.end();


});

