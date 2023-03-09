function stock()
{
   let message="";
let titre=document.getElementById('titre').value;
let quantite=document.getElementById('quantite').value;
message +=`le produit: ${titre} et de quantite: ${quantite} est de stock:`;
if(quantite<10)
message+=" faible";
else if(quantite<=50)
message+=" modéré";
else
message+=" monopole";

document.getElementById("msg").innerHTML=message;

}