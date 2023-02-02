const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordlength=10
let passbtn= document.getElementById("passbtn")
let password1= document.getElementById("pass1")
let password2=document.getElementById("pass2")
function Chargenerator()
{
    let randomizer= Math.floor(Math.random()*characters.length)
    return characters[randomizer]      
}

passbtn.addEventListener("click",function()
{
    let new1=""
    let new2=""
    for(i=0;i<passwordlength;i++)
    {
        new1+=Chargenerator()
        new2+=Chargenerator()
    }
    password1.textContent=new1  
    password2.textContent=new2        
})



