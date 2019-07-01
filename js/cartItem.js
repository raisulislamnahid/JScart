var countShirt=[];
var priceShirt = [];
var countPant=[];
var pricePant = [];
var subTotal= [];

function shirt() {
  var quantity,totalPrice;
  countShirt.push(1);
  priceShirt.push(500);
  quantity = countShirt.reduce(getSum);
  totalPrice= priceShirt.reduce(getSum);
  subTotal = priceShirt.concat(pricePant);
  document.getElementById('cart').style.display="block";
  document.getElementById('subTotal').innerHTML="<td colspan='3'>Sub Total</td><td>"+subTotal.reduce(getSum)+"</td>";
  document.getElementById("productShirt").innerHTML = "<td><img src='img/shirt.jpg' alt='itemShirt' height='30'></td><td>"+quantity+"</td><td>"+priceShirt[0]+"</td><td>"+totalPrice+"</td>";
}
function pant() {
  var quantity,totalPrice;
  countPant.push(1);
  pricePant.push(600);
  quantity = countPant.reduce(getSum);
  totalPrice= pricePant.reduce(getSum);
  subTotal = priceShirt.concat(pricePant);
  document.getElementById('cart').style.display="block";
  document.getElementById('subTotal').innerHTML="<td colspan='3'>Sub Total</td><td>"+subTotal.reduce(getSum)+"</td>";
  document.getElementById("productPant").innerHTML = "<td><img src='img/pant.jpg' alt='itemShirt' height='30'></td><td>"+quantity+"</td><td>"+pricePant[0]+"</td><td>"+totalPrice+"</td>"
}
function getSum(total, num){
  return total+num;
}
