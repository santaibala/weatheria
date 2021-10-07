//readying the document
$(document).ready(function(){
    
    
    
        //calling api
        var url = "https://api.darksky.net/forecast/a66ae347210b442609ab4673e7f872d6/-35.28346, 149.12807?units=si&callback=?";

				$.getJSON(url, function(data){
					
                        //logging the data
                        console.log(data);
                        
                        //stating variables
                        var currentTempData = data.currently.temperature;
                        var currentTempRound = Math.round(currentTempData);    
                        
                        //displaying current temperature to the body
                        $("#currentTemp").text(currentTempRound);
                    
                        //if staments that changes according to the current temperature
                        if( currentTempData > -4 && currentTempData < 0 ){ 
                        $("#comment").text("Canadian Summer");
                        } 

                        if( currentTempData > 0 && currentTempData < 4 ){ 
                            $("#comment").text("Cold but not cold enough for snow. Pffftt, weak.");
                        }    

                        if( currentTempData > 4 && currentTempData < 8 ){ 
                            $("#comment").text("You might want to layer up");
                        }

                        if( currentTempData > 8 && currentTempData < 12 ){ 
                            $("#comment").text("Let's do a 2am Maccas run and eat sundae in the car with heater on");
                        }

                        if( currentTempData > 12 && currentTempData < 16 ){ 
                            $("#comment").text("Where is my bomber jacket?");
                        }

                        if( currentTempData > 16 && currentTempData < 20 ){ 
                            $("#comment").text("South East Asian winter");
                        }

                        if( currentTempData > 20 && currentTempData < 24 ){ 
                            $("#comment").text("Ideal temperature");
                        }   

                        if( currentTempData > 24 && currentTempData < 28 ){ 
                            $("#comment").text("A long sleeve shirt would be sufficient");
                        } 

                        if( currentTempData > 28 && currentTempData < 32 ){ 
                            $("#comment").text("It's getting hot");
                        }   

                        if( currentTempData > 32 && currentTempData < 36 ){ 
                            $("#comment").text("It's getting very hot");
                        }        

                        if( currentTempData > 36 ){ 
                            $("#comment").text("Get me some water, help !!");
                        }     
                    
                        //stating variable to corelate with the weather icons
                        var iconImg = (data.currently.icon);
                        
                        //printing weather icon according to the current weather 
                        $("#currentIcon").text(iconImg);

                        if (iconImg === "clear-day"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Sun.svg' alt='sun icon'>");
                        }

                        if (iconImg === "clear-night"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Moon.svg' alt='moon icon'>" );
                        }

                        if (iconImg === "rain"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Rain.svg' alt='rain icon'>");
                        }

                        if (iconImg === "snow"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Snow-Alt.svg' alt='snow icon'>");
                        }

                        if (iconImg === "sleet"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Snow.svg' alt='sleet icon'>");
                        }

                        if (iconImg === "wind"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Wind.svg' alt='wind icon'>");
                        }

                        if (iconImg === "fog"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Fog.svg' alt='fog icon'>");
                        }   

                        if (iconImg === "cloudy"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud.svg' alt='cloudy icon'>");
                        }   

                        if (iconImg === "partly-cloudy-day"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Sun.svg' alt='partly cloudy icon'>");
                        }             

                        if (iconImg === "partly-cloudy-night"){
                            $("#currentIcon").html("<img src='Climacons/SVG/Cloud-Moon.svg' alt='cloud and moon icon'>");
                        }                     

                    
                        //stating variable and displaying today minimum temperature to the body
                        var todayMinTempData = data.daily.data[0].temperatureMin;                                        				
                        var todayMinTempRound = Math.round(todayMinTempData);    
                        $("#tempMin").text(todayMinTempRound);


                        //stating variable and displaying today maximum temperature to the body
                        var todayMaxTempData = data.daily.data[0].temperatureMax;                                        				
                        var todayMaxTempRound = Math.round(todayMaxTempData);    
                        $("#tempMax").text(todayMaxTempRound);
                                      
                        //displaying windspeed
                        $("#windspeed").text(data.currently.windSpeed);
                    
                                                });

                            });

