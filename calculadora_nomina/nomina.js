let salarioBruto = null;
let salud = 0;
let pension = 0;
let retencion = 0;

function mostrarMenu() {
    let opcion = prompt(
`=== NominaFácil - Calculadora de Salario Neto ===
1. Ingresar Salario Bruto
2. Calcular Deducción Salud (4%)
3. Calcular Deducción Pensión (4%)
4. Calcular Retención en la Fuente
5. Calcular y Mostrar Salario Neto
6. Salir
Seleccione una opción (1-6):`
    );

    switch(opcion) {
        case "1":
            ingresarSalario();
            break;
        case "2":
            calcularSalud();
            break;
        case "3":
            calcularPension();
            break;
        case "4":
            calcularRetencion();
            break;
        case "5":
            mostrarSalarioNeto();
            break;
        case "6":
            alert("¡Gracias por usar NominaFácil!");
            break;
        default:
            alert("Opción inválida.");
            mostrarMenu();
    }
}

function ingresarSalario() {    
    let input = prompt("Ingrese el salario bruto:");
    let ingreso = Number(input);

    if (isNaN(ingreso) || ingreso <= 0) {
        alert("Debe ingresar un número positivo.");
        ingresarSalario();
    } else {
        salarioBruto = ingreso;
        salud = 0;
        pension = 0;
        retencion = 0;
        alert("Salario bruto ingresado: $" + salarioBruto);
        mostrarMenu();
    }
}

function validarSalario() {
    if (salarioBruto === null) {
        alert("Primero debe ingresar el salario bruto (Opción 1).");
        mostrarMenu();
        return false;
    }
    return true;
}

function calcularSalud() {
    if (!validarSalario()) return;
    salud = salarioBruto * 0.04;
    alert("Deducción Salud (4%): $" + salud);
    mostrarMenu();
}

function calcularPension() {
    if (!validarSalario()) return;
    pension = salarioBruto * 0.04;
    alert("Deducción Pensión (4%): $" + pension);
    mostrarMenu();
}

function calcularRetencion() {
    if (!validarSalario()) return;

    if (salarioBruto < 4000000) {
        retencion = 0;
        alert("No aplica retención en la fuente.");
    } else {
        retencion = salarioBruto * 0.05;
        alert("Aplica retención del 5%: $" + retencion);
    }
    mostrarMenu();
}

function mostrarSalarioNeto() {
    if (!validarSalario()) return;

    if (salud === 0) calcularSalud();
    if (pension === 0) calcularPension();
    if (salarioBruto >= 4000000 && retencion === 0) calcularRetencion();

    let SalarioNeto = salarioBruto - (salud + pension + retencion);

    let mensaje = "=== Desglose de Salario Neto ===\n";
    mensaje += "Salario Bruto: $" + salarioBruto + "\n";
    mensaje += "Deducción Salud: $" + salud + "\n";
    mensaje += "Deducción Pensión: $" + pension + "\n";
    mensaje += "Retención en la fuente: $" + retencion + "\n";
    mensaje += "Salario Neto: $" + SalarioNeto + "\n";

    alert(mensaje);
    mostrarMenu();
}

// Inicia la calculadora
mostrarMenu();