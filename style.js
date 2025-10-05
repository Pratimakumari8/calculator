function generate(){
    let phy = parseInt(document.getElementById("p").value);
let chem = parseInt(document.getElementById("c").value);
let bio = parseInt(document.getElementById("b").value);
let math = parseInt(document.getElementById('m').value);
if(phy > 99 || chem > 99 || bio > 99 || math > 99 || isNaN(phy) || isNaN(chem)|| isNaN(bio) || isNaN(math)){
    document.getElementById("ans").textContent = "Invalid Input";
}
else {
    let sum = phy+chem+bio+math;
    let div = sum/4;
    document.getElementById("ans").textContent = `Percentage is ${div}%` ;

}
}
