function _lib (selected)
{
    this.selektor = selected;
    this.el = document.querySelectorAll(selected)
}

_lib.prototype.ubaciElement = function (nazivElementa, klasa, identifikator, tekst)
{
    if (nazivElementa != "")
    {
        var ubaci = document.createElement(nazivElementa);
        if (klasa != "")
        {
            ubaci.setAttribute("class", klasa);    
        }  
        if (identifikator != "")
        {
            ubaci.setAttribute("id", identifikator); 
        }
        if (tekst != "")
        {
            ubaci.innerHTML = tekst;
        }

        this.el.forEach(function(element) {
            element.appendChild(ubaci);
        });
    }
    else {
        console.log("Atribut za naziv elementa nedostaje.");
    }
}

_lib.prototype.dodajKlasu = function (klasa)
{
    this.el.forEach(function(element) {
        element.setAttribute("class", klasa);
    })
}

_lib.prototype.dodajAtribut = function (naziv, vrijednost)
{
    this.el.forEach(function(element) {
        element.setAttribute(naziv, vrijednost);
    })
}

_lib.prototype.prikazi = function ()
{
    this.el.forEach(function(element) {
        element.style.visibility = "visible";
    })
}

_lib.prototype.sakrij = function ()
{
    this.el.forEach(function(element) {
        element.style.visibility = "hidden";
    })
}



