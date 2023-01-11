document.getElementById("get-color-scheme-btn").addEventListener("click",function(){
    
    let color = document.getElementById("color")
    let style = document.getElementById("style")
    let hex = color.value.slice(1)
    let url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${style.value}&count=5`
    
    fetch(url)
  .then(response => response.json())
  .then(data => {
    let html = ``;
    let colorSchemeContainer = document.getElementById("color-scheme");
    data.colors.forEach((color,index) => {
        let generatedColor = document.getElementsByClassName("generated-color")[index]
        generatedColor.style.background = color.hex.value;
        console.log(color.hex.value)
        html += `
        <div class="generated-hex-code">${color.hex.value}</div>`
    });
    document.getElementById("hex-codes").innerHTML = html
  })

})
