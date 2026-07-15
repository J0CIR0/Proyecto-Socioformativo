<script setup>
    import BaseBoton from './components/prueba_boton.vue'
    //
    import BotonPersonalizado from './components/BotonPersonalizado.vue'
    //clases
    import EncabezadoApp from './components/EncabezadoApp.vue';
    //pie mel
    import PiePagina from './components/PiePagina.vue';
</script>

<template>
    <div class="contenedor">
        <!--clases-->
        <EncabezadoApp titulo="Gestion de Emprendimientos"
                       subtitulo="Proyecto de Programacion Web II" />

        <main>
            <h1>Modulos principales</h1>
            <p>Clientes, productos, ventas e inventario</p>

            <div style="margin-top: 30px; display: flex; gap: 12px; flex-wrap: wrap;">
                <BaseBoton texto="Primario" @click="console.log('Click')" />
                <BaseBoton texto="Éxito" variante="exito" />
                <BaseBoton texto="Peligro" variante="peligro" />
                <BaseBoton texto="Pequeño" tamano="pequeno" variante="info" />
                <BaseBoton texto="Deshab." :deshabilitado="true" variante="oscuro" />
            </div>
            <!--tarj mel-->
            <h2>Mi componente reutilizable</h2>

            <BotonPersonalizado titulo="Cafetería Cat"
                                descripcion="Este es un componente reutilizable creado para el proyecto." />
        </main>
                <div style="margin-top: 40px; padding: 20px; background-color: #f0f4f8; border-radius: 8px;">
                <h2>Nueva Sección: Títulos y Encabezados hecho por papi jociro</h2>
                <p>Haz click en el enlace para ver el componente reutilizable de títulos</p>
                <a href="/titulo" class="link-titulo">Ver componente de título</a>
            </div>
        <!--pie pag mel-->
        <PiePagina texto="© 2026 Gestión de Cafeteria | Programación Web II" />
    </div>
</template>


<style scoped>
    .contenedor {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
        max-width: 900px;
        margin: 40px auto;
        width: 100%;
        font-family: Arial,sans-serif;
    }

    h1 {
        margin-bottom: 8px;
    }
</style>