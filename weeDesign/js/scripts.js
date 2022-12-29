
// Menu Mobile




// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";



// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


// Data Footer


//Menu

function menu(){
  document.getElementById('sliding-header-menu-outer').style.right = "0px";
}

document.getElementById("fecha").onclick = function (){
  document.getElementById('sliding-header-menu-outer').style.right = "-320px";
}


//Anchor

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for(var a = 0; a < about_tags.length; a++){

  about_tags[a].onclick = function (){
    
      for(var b = 0; b < about_tags.length; b++){
        about_tags[b].style['background-color'] = unselected_color
        about_tags[b].style["font-weight"] = "normal";
      }

      this.style['background-color'] = selected_color;
      this.style['font-weight'] = 'bold';

      if(this.innerHTML == "Visão"){
        document.getElementById('box-text').innerHTML = aboutUs['Visão'];
      }else if(this.innerHTML == "Missão"){
        document.getElementById('box-text').innerHTML = aboutUs['Missão'];
      }else if(this.innerHTML == "Valores"){
        document.getElementById('box-text').innerHTML = aboutUs['Valores'];
      }

  }

}

//Previous e Next


var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

// service-previous
// service-next
// service-title
// service-text

document.getElementById("service-previous").onclick = function() {

  var title = document.getElementById("service-title").innerHTML;
  var text = document.getElementById("service-text").innerHTML;

  if(title == our_services[0]['title']){
    document.getElementById("service-title").innerHTML = our_services[2]['title'];
    document.getElementById("service-text").innerHTML = our_services[2]['text'];
  }else if(title == our_services[1]['title']){
    document.getElementById("service-title").innerHTML = our_services[0]['title'];
    document.getElementById("service-text").innerHTML = our_services[0]['text'];
  }else if(title == our_services[2]['title']){
    document.getElementById("service-title").innerHTML = our_services[1]['title'];
    document.getElementById("service-text").innerHTML = our_services[1]['text'];
  }

}


document.getElementById("service-next").onclick = function() {

  var title = document.getElementById("service-title").innerHTML;
  var text = document.getElementById("service-text").innerHTML;

  if(title == our_services[0]['title']){
    document.getElementById("service-title").innerHTML = our_services[1]['title'];
    document.getElementById("service-text").innerHTML = our_services[1]['text'];
  }else if(title == our_services[1]['title']){
    document.getElementById("service-title").innerHTML = our_services[2]['title'];
    document.getElementById("service-text").innerHTML = our_services[2]['text'];
  }else if(title == our_services[2]['title']){
    document.getElementById("service-title").innerHTML = our_services[0]['title'];
    document.getElementById("service-text").innerHTML = our_services[0]['text'];
  }

}  
   

//Data


var Ano_Atual = new Date();

var Year_Atual = Ano_Atual.getFullYear();

document.getElementById("current_year").innerHTML = Year_Atual;



   