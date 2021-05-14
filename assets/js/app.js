const countryInput = document.getElementById('input');
 const countryName=document.getElementById('country');
 const total=document.getElementById('total');
 const active=document.getElementById('active');
 const Recovery=document.getElementById('Recovery');
 const Dates=document.getElementById('Date');
 const Death=document.getElementById('Death');
 const app=document.getElementById('app');

 app.addEventListener("click",App);



function App(){


    

   const country=document.getElementById('hide');
   const country1=document.getElementById('show');
  

   country.style.display="block";
   country1.style.display="none";







   



  
  const url = "https://api.covid19api.com/total/country/"+countryInput.value;


  fetch(url).then((response) => {
      return response.json();

  }).then((data) => {

         let len = data.length;
         let ind = len-1;

         const dat = data[ind];
         console.log(dat);

         
  countryName.
  textContent=dat.Country;

  
  total.
  textContent=dat.Confirmed;

  
  active.
  textContent=dat.Active;

  
  Recovery.
  textContent=dat.Recovered;

  
  Death.
  textContent=dat.Deaths;
     
  
  Dates.
  textContent=dat.Date;
     



  });


   

};

function track(){
    const country=document.getElementById('hide');
    const country1=document.getElementById('show');
 
    country.style.display="none";
    country1.style.display="block";

  
}



