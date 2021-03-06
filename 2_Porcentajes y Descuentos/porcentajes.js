// Descuentos
function priceWithDiscount(price, discount) {
    const discountMultiplier = 100 - discount;
    return (discountMultiplier * price) / 100;
};

function calcPriceWithDiscount() {
    var valuePrice = parseFloat(document.getElementById('inputPrice').value);
    var valueDiscount = parseFloat(document.getElementById('inputDiscount').value);
    const finalPriceDiscount = priceWithDiscount(valuePrice, valueDiscount);
    alert('Precio con descuento: $' + finalPriceDiscount);
};

// Cupones
function calcPriceWithCoupon() {
    var valuePrice2 = parseFloat(document.getElementById('inputPrice2').value);
    var textCoupon = document.getElementById('inputCoupon').value;
    switch (textCoupon) {
        case 'DESCUENTO10':
            var cuponejemplo1 = 10;
            const finalPriceCoupon = priceWithDiscount(valuePrice2, cuponejemplo1);
            alert('Precio con cupón de descuento aplicado: $' + finalPriceCoupon);
            break;
        case 'DESCUENTO25':
            var cuponejemplo2 = 25;
            const finalPriceCoupon2 = priceWithDiscount(valuePrice2, cuponejemplo2);
            alert('Precio con cupón de descuento aplicado: $' + finalPriceCoupon2);
            break;
        case 'DESCUENTO30':
            var cuponejemplo3 = 30;
            const finalPriceCoupon3 = priceWithDiscount(valuePrice2, cuponejemplo3);
            alert('Precio con cupón de descuento aplicado: $' + finalPriceCoupon3);
            break;
        case 'DESCUENTO50':
            var cuponejemplo4 = 50;
            const finalPriceCoupon4 = priceWithDiscount(valuePrice2, cuponejemplo4);
            alert('Precio con cupón de descuento aplicado: $' + finalPriceCoupon4);
            break;
        default:
            alert('El cupón ingesado no es válido.');
            break;
    }    
};

// En una aplicación real, lo ideal sería que cada cupón sea un objeto con su nombre y la cantidad de descuento que aplica. Esto permitiría agregar, eliminar o modificar cupones facilmente sin necesidad de modificar el switch (de hecho no haría falta usar un switch ya que con un if y un else ya se podría hacer la función). Pero para los efectos de este reto no cambia nada el usar un switch (donde cada caso es un cupón), en vez de objetos.