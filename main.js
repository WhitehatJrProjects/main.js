x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_triangle = "";
draw_line = "";
draw_arc = "";
draw_ellipse = "";


var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();


function start(){
    document.getElementById("status").innerHTML = "System is Listening please speak...";
    recognition.start();
}


recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content == "circle"){
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing circle ";
       draw_circle = "set";
    }
      if(content == "rectangle"){
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing rectangle ";
       draw_rect = "set";
    }
      if(content == "triangle"){

       document.getElementById("status").innerHTML = "Started drawing triangle ";
       draw_triangle = "set";
    }
      if(content == "line"){
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing line ";
       draw_line = "set";
    }
      if(content == "arc"){
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing arc ";
       draw_arc = "set";
    }
      if(content == "ellipse"){
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing ellipse ";
       draw_ellipse = "set";
    }
}



function setup() {
    canvas = createCanvas(900, 600);
}



function draw() {
    if (draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = ""
    }

      if (draw_rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }

      if (draw_triangle == "set")
    {
       
        var context = canvas.getContext(2 d); 
        context.beginPath(); 
        context.moveTo(75, 75); 
        context.lineTo(10, 75); 
        context.lineTo(10, 25); 
        context.fill();
        document.getElementById("status").innerHTML = "Triangle is drawn.";
        draw_triangle = "";
    }
      if (draw_line == "set")
    {
       line(30, 20, 85, 75);
        document.getElementById("status").innerHTML = "Line is drawn.";
        draw_line = ""
    }

      if (draw_arc == "set")
    {
        arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
        document.getElementById("status").innerHTML = "An Arc is drawn.";
        draw_arc = ""
    }

      if (draw_ellipse == "set")
    {
      ellipse(x, y, 56, 46, 55, 55);
        document.getElementById("status").innerHTML = "An Ellipse is drawn.";
        draw_ellipse = ""
    }

}