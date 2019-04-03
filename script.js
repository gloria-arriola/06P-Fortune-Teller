$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    var koreans = $(".koreans").val();
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = name;
    $(".answer").text(myAnswer + ", next year you will meet "+ koreans +" koreans");
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
    $(".koreans").val("");
    $(".fashion").val("");
});