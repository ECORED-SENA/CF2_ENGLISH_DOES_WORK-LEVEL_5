<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 #[i Compound sentences] (Oraciones compuestas)
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png')
      .col-lg
        Traduccion.color-primario(:dialogo="traduccion1")
    p.mb-5.text-center A continuación, se presentan los diferentes casos a utilizar:
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="<b><em>Case 1</em></b>")
        .row
          .col-lg.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion2")
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img1.svg')
      .py-3.py-md-4(titulo="<b><em>Case 2</em></b>")
        .row
          .col-lg.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion3")
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img2.svg')
      .py-3.py-md-4(titulo="<b><em>Case 3</em></b>")
        .row
          .col-lg.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion4")
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img3.svg')
    .row.justify-content-center.bg-color17
      .col-lg-10
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.svg')
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i Mark needs to go to work, but he is very sick to drive.]
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i James rented a big apartment, although it was expensive.]
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i Although Felix doesn’t study much, he has very good grades.]
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i Carol wanted to study in Oxford, but she didn´t pass the admission exam.]
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i Michael visited the old continent, then he met the Coliseum in Rome.]
          .col-lg-1.bg-color8.p-3
            Audio.color-primario.mx-auto(
              :audio="require('@/assets/curso/tema1/audio2.mp4')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
    Separador
    #t_2_1
    .titulo-segundo.color-primario
      h2 2.1 #[i Personal activities] (Actividades personales)
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion5")
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img2.png')
    p.mb-5 #[i.txt-color2 Some of these activities are listed below:] / #[span.txt-color3 Algunas de estas actividades se señalan a continuación:]
    .row.bg-color18
      .col-12.p-5
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 3]. Estructuras de oraciones afirmativas empleando verbos modales
        .row.bg-color19.m-1
          .col-12.p-4.p-lg-5
            .row
              .col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema2/img8.svg')
              .col-lg-9.p-4.bg-color20.shadow-sm
                SlyderE(indicadores="derecha")
                  .row
                    .col-12
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          p.txt-color1 #[b #[i Activity] / Actividad]
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b B]
                            .col
                              p.mb-2 #[b #[i Brush the teeth]]
                              p.mb-0 Cepillarse los dientes
                        .col-lg-7
                          p.txt-color1 #[b #[i Example] / Ejemplo]
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Mike brushes his teeth every day.</b> / Mike se cepilla sus dientes todos los días.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b C]
                            .col
                              p.mb-2 #[b #[i Clean the house]]
                              p.mb-0 Limpiar la casa
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Dalia cleans the house every day.</b> / Dalia limpia la casa todos los días.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b C]
                            .col
                              p.mb-2 #[b #[i Comb]]
                              p.mb-0 Peinar - peinarse
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>She combs her hair quickly.</b> / Ella peina su cabello rápidamente.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b C]
                            .col
                              p.mb-2 #[b #[i Cook breakfast]]
                              p.mb-0 Hacer el desayuno
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>My mom cooks breakfast.</b> / Mi mamá hace el desayuno.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-12
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          p.txt-color1 #[b #[i Activity] / Actividad]
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b C]
                            .col
                              p.mb-2 #[b #[i Cook dinner]]
                              p.mb-0 Hacer la cena
                        .col-lg-7
                          p.txt-color1 #[b #[i Example] / Ejemplo]
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>I cook dinner at home.</b> / Yo hago la cena en casa.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b C]
                            .col
                              p.mb-2 #[b #[i Cook lunch]]
                              p.mb-0 Hacer el almuerzo
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>My wife cooks lunch.</b> / Mi esposa hace el almuerzo.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b F]
                            .col
                              p.mb-2 #[b #[i Feed the pet]]
                              p.mb-0 Alimentar la mascota
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Billy feeds his pet three times a day.</b> / Billy alimenta a su mascota tres veces al día.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b F]
                            .col
                              p.mb-2 #[b #[i Finish work]]
                              p.mb-0 Terminar de trabajar
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Damian finishes work at 5 p.m.</b> / Damian termina de trabajar a las 5 de la tarde.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-12
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          p.txt-color1 #[b #[i Activity] / Actividad]
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Get home]]
                              p.mb-0 Llegar a casa
                        .col-lg-7
                          p.txt-color1 #[b #[i Example] / Ejemplo]
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Paul gets home at night.</b> / Paul llega a casa por la noche.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Get to work / school]]
                              p.mb-0 Llegar al trabajo / a la escuela
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>They get to work at 9 a.m.</b> / Ellos llegan al trabajo a las 9 de la mañana.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Get up]]
                              p.mb-0 Levantarse de la cama
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>James gets up at 5 o’clock.</b> / James se levanta a las 5 en punto.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Go home]]
                              p.mb-0 Ir a casa
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Betty goes home with her friends.</b> / Betty se va a casa con sus amigas.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-12
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          p.txt-color1 #[b #[i Activity] / Actividad]
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Go to bed]]
                              p.mb-0 Ir a la cama
                        .col-lg-7
                          p.txt-color1 #[b #[i Example] / Ejemplo]
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>I go to bed at 10 p.m.</b> / Yo voy a la cama a las 10 de la noche.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Go to school]]
                              p.mb-0 Ir a la escuela
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Ann goes to school at 1 p.m.</b> / Ann va a la escuela a la 1 de la tarde.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b G]
                            .col
                              p.mb-2 #[b #[i Go to work]]
                              p.mb-0 Ir al trabajo
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Felix goes to work at 9 o’clock.</b> / Felix va al trabajo a las 9 en punto.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b H]
                            .col
                              p.mb-2 #[b #[i Have coffee]]
                              p.mb-0 Tomar café
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>Employees have coffee during break.</b> / Los empleados toman café durante el descanso.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-12
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          p.txt-color1 #[b #[i Activity] / Actividad]
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b H]
                            .col
                              p.mb-2 #[b #[i Have lunch]]
                              p.mb-0 Almorzar
                        .col-lg-7
                          p.txt-color1 #[b #[i Example] / Ejemplo]
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>The girls have lunch at noon.</b> / Las chicas almuerzan al mediodía.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .row.justify-content-center.mb-4
                        .col-lg-4.mb-4.mb-lg-0
                          .row.align-items-center
                            .col-auto
                              p.mb-0 #[b H]
                            .col
                              p.mb-2 #[b #[i Have tea]]
                              p.mb-0 Tomar té
                        .col-lg-7
                          .row
                            .col
                              TarjetaAudio.color-primario.mb-2(
                                texto="<p><b>My aunt has her tea at 5 o’clock.</b> / Mi tía toma su té a las 5 en punto.</p>"
                                :audio="require('@/assets/curso/tema1/audio2.mp4')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    Separador
    #t_2_2
    .titulo-segundo.color-primario
      h2 2.2 #[i Social activities] (Actividades sociales)
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img9.svg')
      .col-lg
        Traduccion.color-primario.mb-5(:dialogo="traduccion6")
        .row.align-items-center
          .col-lg-7
            p #[b #[i.txt-color2 Some of these activities are listed below to help you with the required vocabulary:]] / #[span.txt-color3 Algunas de estas actividades se señalan a continuación para ayudarle con el vocabulario:]
          .col-lg-5
            a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo]. Actividades y ejemplos
    p.mb-5 A continuación, podremos observar el siguiente diálogo utilizando una de las actividades sociales como #[b #[i.txt-color1 “go to the disco”]].
    p.text-center.mb-5 #[b #[i.txt-color2 A bit of humor…] / #[span.txt-color3 Un poco de humor…]]
    .row.justify-content-center
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img10.svg').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-primario
      h2 2.3 #[i Labor activities] (Actividades laborales)
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img3.png')
      .col-lg
        Traduccion.color-primario(:dialogo="traduccion7")
    p.mb-0 #[i.txt-color2 In this sense, some names of professions or trades, as well as some labor activities are presented below:]
    p.mb-5.txt-color3 En este sentido, se presentan a continuación algunos nombres de profesiones u oficios, así como algunas actividades laborales:
    .row.bg-color19.m-1.mb-5
      .col-12.p-4.p-lg-5
        .row.align-items-end
          .col-2.d-none.d-lg-block
            .figStyle2
              figure
                img(src='@/assets/curso/tema2/img11.svg')
          .col-lg-10.bg-color20
            .p-4
              p.text-center.mb-5 #[b #[i.txt-color1 Professions or trades] / Profesiones u oficios]
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta
                  .row.justify-content-center.bg-color21
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Actor]]
                      p.mb-0.text-center Actor
                .tarjeta
                  .row.justify-content-center.bg-color23
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Architect]]
                      p.mb-0.text-center Arquitecto
                .tarjeta
                  .row.justify-content-center.bg-color24
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Astronaut]]
                      p.mb-0.text-center Astronauta
                .tarjeta
                  .row.justify-content-center.bg-color25
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Baby-sitter]]
                      p.mb-0.text-center Niñera
                .tarjeta
                  .row.justify-content-center.bg-color26
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Bank clerk]]
                      p.mb-0.text-center Empleado bancario
                .tarjeta
                  .row.justify-content-center.bg-color27
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Baker]]
                      p.mb-0.text-center Panadero
                .tarjeta
                  .row.justify-content-center.bg-color28
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Bartender]]
                      p.mb-0.text-center Cantinero
                .tarjeta
                  .row.justify-content-center.bg-color29
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Barber]]
                      p.mb-0.text-center Barbero
                .tarjeta
                  .row.justify-content-center.bg-color30
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Bus driver]]
                      p.mb-0.text-center Conductor de autobús
                .tarjeta
                  .row.justify-content-center.bg-color31
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Bricklayer]]
                      p.mb-0.text-center Albañil
                .tarjeta
                  .row.justify-content-center.bg-color32
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Cook]]
                      p.mb-0.text-center Cocinero
                .tarjeta
                  .row.justify-content-center.bg-color33
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Cameraman]]
                      p.mb-0.text-center Camarógrafo
                .tarjeta
                  .row.justify-content-center.bg-color34
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Dentist]]
                      p.mb-0.text-center Dentista
                .tarjeta
                  .row.justify-content-center.bg-color35
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Doctor]]
                      p.mb-0.text-center Médico
                .tarjeta
                  .row.justify-content-center.bg-color36
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Electrician]]
                      p.mb-0.text-center Electricista
                .tarjeta
                  .row.justify-content-center.bg-color37
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Farmer]]
                      p.mb-0.text-center Agricultor
                .tarjeta
                  .row.justify-content-center.bg-color38
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Graphic designer]]
                      p.mb-0.text-center Diseñador gráfico
                .tarjeta
                  .row.justify-content-center.bg-color39
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Firefighter]]
                      p.mb-0.text-center Bombero
                .tarjeta
                  .row.justify-content-center.bg-color40
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Jeweler]]
                      p.mb-0.text-center Joyero
                .tarjeta
                  .row.justify-content-center.bg-color41
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Hairdresser]]
                      p.mb-0.text-center Peluquero
                .tarjeta
                  .row.justify-content-center.bg-color42
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Librarian]]
                      p.mb-0.text-center Bibliotecario
                .tarjeta
                  .row.justify-content-center.bg-color43
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Lawyer]]
                      p.mb-0.text-center Abogado
                .tarjeta
                  .row.justify-content-center.bg-color44
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Mechanic]]
                      p.mb-0.text-center Mecánico
                .tarjeta
                  .row.justify-content-center.bg-color45
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Maid]]
                      p.mb-0.text-center Sirvienta
                .tarjeta
                  .row.justify-content-center.bg-color46
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Nurse]]
                      p.mb-0.text-center Enfermera
                .tarjeta
                  .row.justify-content-center.bg-color47
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Pilot]]
                      p.mb-0.text-center Piloto
                .tarjeta
                  .row.justify-content-center.bg-color48
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Reporter]]
                      p.mb-0.text-center Reportero
                .tarjeta
                  .row.justify-content-center.bg-color49
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Policeman]]
                      p.mb-0.text-center Policía
                .tarjeta
                  .row.justify-content-center.bg-color50
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Secretary]]
                      p.mb-0.text-center Secretaria
                .tarjeta
                  .row.justify-content-center.bg-color51
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Sailor]]
                      p.mb-0.text-center Marinero
                .tarjeta
                  .row.justify-content-center.bg-color52
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Tailor]]
                      p.mb-0.text-center Sastre
                .tarjeta
                  .row.justify-content-center.bg-color53
                    .col-10.bg-color22.p-4
                      p.mb-0.text-center #[b #[i.txt-color1 Teacher]]
                      p.mb-0.text-center Maestro
    p.text-center #[i Below we can see some examples:]

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema2',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>When talking about modal verbs, we are referring to a type of auxiliary verb that can be used to express an opinion about the probability of an event occurring, that is, it indicates whether something is probable or possible. In addition, it is also used to refer to a skill, to make a request, or to request a permission.<br><br>These clauses or sentences can be of two types: independent or dependent.<br><br><b>Independent clauses or sentences</b>, also called main clauses, are sentences that make sense in themselves; so that they include a subject, a verb and a complement.<br>For example: <b>Mary wants a dress</b>.<br><br><b>Dependent clauses or sentences</b>, also called subordinate clauses, are sentences that depend on an independent clause in order to make complete sense. Therefore, they are always linked to them through subordinating conjunctions.<br>For example: <b>Mary will buy a blue dress</b>.</em>',
          textoEsp:
            'Puede definirse una oración como una estructura gramatical que forma una unidad con sentido completo. Básicamente, las oraciones están constituidas por cláusulas que incluyen al menos un verbo. Estas cláusulas están formadas por un sujeto y un predicado.<br><br>Estas cláusulas u oraciones pueden ser de dos tipos: independientes o dependientes.<br><br><b>Las cláusulas u oraciones independientes</b>, denominadas también principales, son oraciones que tienen sentido en sí mismas; de manera que incluyen un sujeto, un verbo y complemento.<br>Por ejemplo: <b>Mary quiere un vestido</b>.<br><br><b>Las cláusulas dependientes</b>, denominadas también subordinadas, son oraciones que dependen de una cláusula independiente para poder tener un sentido completo. Por eso, siempre van unidas a ellas a través de conjunciones subordinantes.<br>Por ejemplo: <b>Mary comprará un vestido azul</b>.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em><b>Case 1</b><br><br>From the previous approaches, it can be pointed out that a <b>compound sentence</b> is one that includes two clauses that are joined by a conjunction. Generally, it is made up of two independent sentences or clauses.<br><br><b>For example: Mary wants a dress and she will buy a blue one</b>.</em>',
          textoEsp:
            'A partir de los planteamientos anteriores, puede señalarse que una <b>oración compuesta</b> es aquella que incluye dos cláusulas que se encuentran unidas por una conjunción. Generalmente, se encuentra conformada por dos oraciones o cláusulas independientes.<br><br><b>Por ejemplo: Mary quiere un vestido y ella comprará uno azul</b>.',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em><b>Case 2</b><br><br>It should be noted that compound sentences are sentences that contain two or more simple sentences joined by conjunctions, such as and, or, but; punctuation marks, such as commas; among other connectors.<br><br><b>Example: Mark needs to go to work, but he is very sick to drive</b>.</em>',
          textoEsp:
            'Cabe destacar que las oraciones compuestas son oraciones que contienen dos o más oraciones simples unidas por conjunciones, como “y”, “o”, “pero”; signos de puntuación, como la coma; entre otros conectores.<br><br><b>Ejemplo: Mark necesita ir a trabajar, pero él está muy enfermo para manejar</b>.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em><b>Case 3</b><br><br>An important thing not to forget is putting a comma before a coordinating conjunction that connects two independent clauses. However, between independent clauses that contain commas or are very long, a semicolon is used.<br><br><b>Example: Carol wanted to study in Oxford, but she didn´t pass the admission exam</b>.</em>',
          textoEsp:
            'Algo importante que no debe olvidarse es poner una coma antes de una conjunción coordinadora que conecta dos cláusulas independientes. Sin embargo, entre las cláusulas independientes que contengan comas o sean muy largas, se utiliza punto y coma.<br><br><b>Ejemplo: Carol quería estudiar en Oxford, pero no aprobó el examen de admisión</b>.',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>In general, personal activities are oriented towards the organic survival and human condition of an individual. Basically they are activities that take place on a daily basis and are carried out automatically, focused on the care and maintenance of one´s own body. In addition, they integrate all those procedures that a person can perform on a daily basis, with a purpose that is part of that person´s identity.</em>',
          textoEsp:
            'En líneas generales, las actividades personales están orientadas a la supervivencia orgánica y condición humana de un individuo. Básicamente, son actividades que tienen lugar a diario y se realizan de forma automática, enfocadas hacia el cuidado y mantenimiento del propio cuerpo. Además, integran todos aquellos procedimientos que una persona puede realizar de forma cotidiana, con un propósito que forma parte de la identidad de esa persona.',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>A social activity is an interaction that takes place between two or more people in order to share a common topic, sport or any event. There are many social activities that are shared with family, friends or neighbors.<br><br>In this regard, some can be pointed out such as: studying, learning and acquiring new knowledge throughout life, playing, competing in sports, walks, parties, trips, among other activities that, in addition to stimulating our minds, enrich us and offer us the opportunity to socialize with other people.</em>',
          textoEsp:
            'Una actividad social es una interacción que se realiza entre dos o más personas con el fin de compartir un tema en común, deporte o cualquier evento. Son muchas las actividades sociales que se comparten con la familia, amigos o vecinos.<br><br>A este respecto, pueden señalarse algunas como: estudiar, aprender y adquirir nuevos conocimientos a lo largo de la vida, jugar, competir deportivamente, paseos, fiestas, viajes, entre otras actividades que, además de estimular nuestra mente, nos enriquecen y nos ofrecen la posibilidad de socializar con otras personas.',
        },
      ],
    },
    traduccion7: {
      dialogo: [
        {
          textoIng:
            '<em>Work or labor is the activity that people carry out either as a duty or activity dependent on the profession or the job they have. A person who works in any company must comply with the assignments or activities entrusted to him, receiving for it a payment, salary or wage. And he must try to do these activities as effectively and efficiently as possible to achieve his goals and those of the company in which he provides his services.<br><br>There are also cases in which a person works independently, carrying out activities that allow him to obtain income on his behalf.</em>',
          textoEsp:
            'El trabajo o labor es la actividad que las personas realizan, ya sea como deber o actividad dependiente de la profesión o del empleo que tienen. Una persona que trabaja en cualquier empresa debe cumplir con las asignaciones o actividades que le encomiendan, recibiendo por ello un pago, sueldo o salario. Y debe tratar de hacer estas actividades con la mayor eficacia y eficiencia que pueda, para lograr sus objetivos y los de la empresa en la cual presta sus servicios.<br><br>También existen casos en los que una persona trabaja en forma independiente, realizando actividades que le permiten obtener ingresos por su cuenta.',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
