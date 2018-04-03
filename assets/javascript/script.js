console.log("hello")

var animals = ["dog", "cat", "moose", "gerbil", "panda", "fish", "owl", "dolphin", "orca whale", "squirrel", "tiger"]

function makeBtn(){
    $("#buttonRow").empty();
    //Attach buttons with jquery to html
 for ( i = 0; i < animals.length; i++) {
     var addButton = $("<button>");
     addButton.addClass("animalName");
     addButton.attr("data-name", animals[i]);
     addButton.text(animals[i]);
     $("#buttonRow").append(addButton);
 }
}

var animal = $(this).attr("data-name")

 //QueryURL
 var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=sGlctW6ynxLceAIPn7eix32acjVR1aGp&q=" + animal + "&limit=10&offset=0&rating=G&lang=en"

//Add to Array with Form Button


$("#submitBtn").on("click", function(event){
    event.preventDefault();
    var newAnimal = $("#topicBox").val().trim()
    animals.push(newAnimal)
    console.log(animals)
})