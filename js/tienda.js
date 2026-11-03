"use strict";

// Filtro por tipo de equipo y orden por precio en la tienda
const lista = document.querySelector(".product-grid");
const tarjetas = Array.from(lista.querySelectorAll(".product-card"));
const filtros = document.querySelectorAll(".filtro");
const selectorOrden = document.getElementById("orden-productos");
const resultado = document.getElementById("resultado-filtro");

let filtroActual = "todos";

function pintar() {
  let visibles = 0;
  tarjetas.forEach(t => {
    const mostrar = filtroActual === "todos" || t.dataset.categoria === filtroActual;
    t.hidden = !mostrar;
    if (mostrar) visibles++;
  });

  const orden = selectorOrden.value;
  const ordenadas = tarjetas.slice().sort((a, b) => {
    if (orden === "precio-asc") return a.dataset.precio - b.dataset.precio;
    if (orden === "precio-desc") return b.dataset.precio - a.dataset.precio;
    return a.dataset.orden - b.dataset.orden;
  });
  ordenadas.forEach(t => lista.appendChild(t));

  resultado.textContent = "Mostrando " + visibles + " de " + tarjetas.length + (tarjetas.length === 1 ? " equipo" : " equipos");
}

filtros.forEach(boton => {
  boton.addEventListener("click", () => {
    filtroActual = boton.dataset.filtro;
    filtros.forEach(b => {
      const activo = b === boton;
      b.classList.toggle("is-active", activo);
      b.setAttribute("aria-pressed", String(activo));
    });
    pintar();
  });
});

selectorOrden.addEventListener("change", pintar);
