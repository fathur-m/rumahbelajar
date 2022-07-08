const toggler = document.querySelector(".toggler");
const regulerprice = document.getElementById("reguler-price");
const proprice = document.getElementById("pro-price");
const premiumprice = document.getElementById("premium-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        regulerprice.innerHTML = `<sup>Rp.</sup>297.000<span>/th</span`;
        proprice.innerHTML = `<sup>Rp.</sup>513.000<span>/th</span`;
        premiumprice.innerHTML = `<sup>Rp.</sup>829.000<span>/th</span`;
    }else{
        regulerprice.innerHTML = `<sup>Rp.</sup>25.000<span>/bln</span>`;
        proprice.innerHTML = `<sup>Rp.</sup>43.000<span>/bln</span`; 
        premiumprice.innerHTML = `<sup>Rp.</sup>70.000<span>/bln</span`;
    }
})