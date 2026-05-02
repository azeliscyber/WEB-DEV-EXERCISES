// Function to calculate the total cost of petrol
function calculate() {
   // Get the values from the input fields
   var costPerLitre = Number(document.getElementById("cost-per-litre").value);
   var litres = Number(document.getElementById("litres").value);
   var resultParagraph = document.getElementById("result");


   if (isNaN(costPerLitre) || isNaN(litres)) {
      resultParagraph.style.display = "block";
      resultParagraph.style.color = "red";
      resultParagraph.style.borderColor = "red";
      resultParagraph.style.backgroundColor = "#fdecea";
      resultParagraph.textContent = "⚠ Please enter a valid cost per litre.";
      return;
   }

   var totalCost = costPerLitre * litres;
   var roundedTotal = totalCost.toFixed(2);

   resultParagraph.style.display = "block";

   resultParagraph.style.color = "#ccccff";
   resultParagraph.style.borderColor = "#ccccff";
   resultParagraph.style.backgroundColor = "#eafaf1";

   resultParagraph.textContent = "Total Cost: £ " + roundedTotal;

} 
