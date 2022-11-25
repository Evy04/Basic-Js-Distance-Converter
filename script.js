(function () {
  "use strict";

    let convertType = 'Miles';
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');
    
    document.addEventListener('keydown', function(event){

        var key = event.code;

        if( key === 'KeyK'){
            convertType='Kilometers';                                  //change the value of the convertType variable
            heading.innerHTML='Kilometers to Miles Converter';         //change the heading
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles'; //change the intro paragraph
            
        }
        else if(key === 'KeyM'){
            convertType='Miles';                                       //change the value of the convertType variable
            heading.innerHTML='Miles to Kilometers Converter';         //change the heading
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers'; //change the intro paragraph
            
        }

    });

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const distance = parseFloat(document.getElementById("distance").value);

        if (distance){
           // convert M to K 1.609344
           // convert K to M 0.621371192
            if (convertType =='Miles'){
                const conversion = (distance * 1.609344).toFixed(3);   //toFixed will round the answer to 2 decimal points
                    
                answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers </h2>`;
            }
            else {
                const conversion = (distance * 0.621371192).toFixed(3);   //toFixed will round the answer to 2 decimal points
                    
                answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles </h2>`;
            }
        }

        else {
           answerDiv.innerHTML = `<h2> Please enter a number! </h2>`;
        }
    });
















})();
