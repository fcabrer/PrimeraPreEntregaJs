alert(
  "Bienvenido a nuestro sitio Runners - Seleccione el modelo que desea comprar"
);
let seleccionarProductos = Number(
  prompt(
    "1-AirShoes $35000 2-Jourdan $25000 3-Running $40000 4-AirForce $28000 "
  )
);
let seleccionarCantidad;
let total = 0;
const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt("El producto seleccionado es Air Shoes, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 35000);
      break;
    case 2:
      seleccionarCantidad = Number(
        prompt("El producto seleccionado es Jourdan, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 25000);
      break;
    case 3:
      seleccionarCantidad = Number(
        prompt("El producto seleccionado es Running, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 40000);
      break;
    case 4:
      seleccionarCantidad = Number(
        prompt("El producto seleccionado es Air Force, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 28000);
      break;
  }
  seleccionarProductos = 0;
}

const envio = () => {
  if (total >= 100000) {
    alert("El envio es gratuito");
  } else {
    total += 2000;
    alert("el costo de envio es de 2000, el total es: " + total);
  }
};

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo");
  if (metodo == "tarjeta") {
    const interes = 10;
    total = total + (total * interes) / 100;
    alert(`tenes un interes de ${interes}, el total es: ${total}`);
    console.log(total);
  } else if (metodo == "efectivo") {
    total -= 4000;
    alert("tenes un descuento de 4000, el total es:" + total);
  }

  envio();
};

metodoDePago();
