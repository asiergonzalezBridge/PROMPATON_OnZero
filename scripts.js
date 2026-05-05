// ====== ESTADO GLOBAL ======
let puntos = parseInt(localStorage.getItem('ecoPuntos')) || 0;
let desperdicioEvitado = parseInt(localStorage.getItem('desperdicio')) || 0;

let filtrosActivos = [];
let ingredientesUsuario = [];

// ====== INIT ======
function init() {
    document.getElementById('puntos').innerText = `Eco-Puntos: ${puntos}`;
    renderFiltros();
    actualizarProgreso(0);
}

// ====== GAMIFICACIÓN ======
function actualizarProgreso(cantidad) {
    desperdicioEvitado += cantidad;
    localStorage.setItem('desperdicio', desperdicioEvitado);

    const barra = document.getElementById("barraProgreso");
    const impacto = document.getElementById("impacto");

    let porcentaje = Math.min(desperdicioEvitado * 10, 100);

    barra.style.width = porcentaje + "%";
    barra.innerText = porcentaje + "%";

    let texto = `Has evitado desperdiciar ${desperdicioEvitado} alimentos`;

    if (desperdicioEvitado > 10) texto += " 🌱 Nivel Eco";
    if (desperdicioEvitado > 20) texto += " 🌍 Nivel Pro";

    impacto.innerText = texto;
}

// ====== FILTROS ======
function renderFiltros() {
    const container = document.getElementById('filtrosContainer');
    container.innerHTML = "";

    filtrosDB.forEach(f => {
        container.innerHTML += `
            <button id="btn-${f.id}" onclick="toggleFiltro('${f.id}')"
            class="px-4 py-2 rounded-full border border-green-600 text-green-700 hover:bg-green-100 transition">
            ${f.label}
            </button>
        `;
    });
}

function toggleFiltro(id) {
    const btn = document.getElementById(`btn-${id}`);

    if (filtrosActivos.includes(id)) {
        filtrosActivos = filtrosActivos.filter(f => f !== id);
        btn.classList.remove("bg-green-600", "text-white");
    } else {
        filtrosActivos.push(id);
        btn.classList.add("bg-green-600", "text-white");
    }

    renderRecetas();
}

// ====== INGREDIENTES ======
function aplicarIngredientes() {
    const input = document.getElementById("ingredientesInput").value;

    ingredientesUsuario = input
        .toLowerCase()
        .split(",")
        .map(i => i.trim());

    actualizarProgreso(ingredientesUsuario.length);

    renderRecetas();
}

// ====== RECETAS ======
function renderRecetas() {
    const container = document.getElementById("listaRecetas");
    container.innerHTML = "";

    if (ingredientesUsuario.length === 0) {
        container.innerHTML = "<p class='text-gray-500'>Introduce ingredientes</p>";
        return;
    }

    let recetasFiltradas = recetasDB
        .map(r => {
            const usados = r.ingredientes.filter(i =>
                ingredientesUsuario.includes(i)
            );

            const aprovechamiento = Math.round(
                (usados.length / r.ingredientes.length) * 100
            );

            return { ...r, usados, aprovechamiento };
        })
        .filter(r =>
            filtrosActivos.every(f => r.tags.includes(f))
        )
        .sort((a, b) => b.aprovechamiento - a.aprovechamiento)
        .slice(0, 3);

    recetasFiltradas.forEach(r => {
        container.innerHTML += `
            <div onclick="ganarPuntos(10); actualizarProgreso(2)"
            class="bg-white p-4 rounded-xl shadow cursor-pointer hover:bg-green-50 border-l-4 border-green-500">
                <h3 class="font-bold text-green-800">${r.titulo}</h3>
                <p class="text-xs text-green-600 font-bold">Aprovechamiento: ${r.aprovechamiento}%</p>
                <p class="text-sm text-gray-600 mt-1">${r.desc}</p>
                <p class="text-xs mt-2">Usas: ${r.usados.join(", ") || "Nada aún"}</p>
            </div>
        `;
    });
}

// ====== EXCEDENTES ======
function verExcedente() {
    const input = document.getElementById('excedenteInput').value.toLowerCase();
    const display = document.getElementById('resultadoExcedente');

    let encontrado = false;

    for (const key in excedentesDB) {
        if (input.includes(key)) {
            display.innerText = excedentesDB[key];
            display.classList.remove('hidden');
            encontrado = true;

            ganarPuntos(5);
            actualizarProgreso(1);
            break;
        }
    }

    if (!encontrado) {
        display.innerText = "No encontramos ideas, ¡sé creativo!";
        display.classList.remove('hidden');
    }
}

// ====== LISTA COMPRA ======
function agregarALista() {
    const input = document.getElementById('nuevoItem');

    if (input.value.trim() !== "") {
        const ul = document.getElementById('shoppingList');
        ul.innerHTML += `<li>${input.value}</li>`;

        input.value = "";

        ganarPuntos(2);
        actualizarProgreso(1);
    }
}

// ====== PUNTOS ======
function ganarPuntos(cant) {
    puntos += cant;
    localStorage.setItem('ecoPuntos', puntos);
    document.getElementById('puntos').innerText = `Eco-Puntos: ${puntos}`;
}

// ====== START ======
init();