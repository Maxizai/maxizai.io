fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data));

  //formulario

  var imput = document.getElementsByClassName('formulario');
  for (var i = 0; i < imput.length; i++)
  {
    imput[i].addEventListener('keyup', function(){
      if(this.value.length>=1){
        this.nextElementSibling.classList.add('fijar');
      }else{
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }
  //Boton
  const myButton = document.getElementById("myButton");
  const myText = document.getElementById("myText");
  
  myButton.addEventListener("click", function() {
    myText.innerHTML = "(04) 1166-1472";
    myText.style.display = "block";
  });

  const myButton1 = document.getElementById("myButton1");
  const myText1 = document.getElementById("myText1");
  
  myButton1.addEventListener("click", function() {
    myText1.innerHTML = "isabelle.carvalho@example.com";
    myText1.style.display = "block";
  });

  const myButton2 = document.getElementById("myButton2");
  const myText2 = document.getElementById("myText2");

  myButton2.addEventListener("click", function() {
    myText2.innerHTML = "Palhoça, Pará, Brazil', Rua Onze 6279";
    myText2.style.display = "block";
  });

  const myButton3 = document.getElementById("myButton3");
  const myText3 = document.getElementById("myText3");

  myButton3.addEventListener("click", function() {
    myText3.innerHTML = "isabelle-carvalho-cba";
    myText3.style.display = "block";
  });

  const myButton4 = document.getElementById("myButton4");
  const myText4 = document.getElementById("myText4");

  myButton4.addEventListener("click", function() {
    myText4.innerHTML = "@isabelle.carvalho";
    myText4.style.display = "block";
  });