<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 #[i Compound sentences] / Oraciones compuestas
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
                p.mb-0 #[i Carol wanted to study in Oxford, but she didn&apos;t pass the admission exam.]
              li 
                i.lista-ul__vineta
                |
                p.mb-0 #[i Michael visited the old continent, then he met the Coliseum in Rome.]
          .col-lg-1.bg-color8.p-3
            Audio.color-primario.mx-auto(
              :audio="require('@/assets/curso/tema2/audio1.wav')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
    Separador
    #t_2_1
    .titulo-segundo.color-primario
      h2 2.1 #[i Personal activities] / Actividades personales
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
                                :audio="require('@/assets/curso/tema2/Audio15_a.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_b.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_c.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_d.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_e.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_f.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_g.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_h.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_i.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_j.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_k.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_l.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_m.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_n.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_o.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_p.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_q.wav')"
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
                                :audio="require('@/assets/curso/tema2/Audio15_r.wav')"
                                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                              )
                                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    Separador
    #t_2_2
    .titulo-segundo.color-primario
      h2 2.2 #[i Social activities] / Actividades sociales
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
            a.anexo.mb-4(:href="obtenerLink('downloads/Anexo2.pdf')" target="_blank")
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
      h2 2.3 #[i Labor activities] / Actividades laborales
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
    p.text-center.mb-5 #[i Below we can see some examples:]
    .row.mb-4
      .col-lg.bg-color54.m-lg-2.mb-4.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img12.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 Susy works as a babysitter in her free time from school.]]
            p Susy trabaja como niñera en su tiempo libre de la escuela.
      .col-lg.bg-color54.m-lg-2.mb-0.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img13.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 Jefferson wants to be a firefighter when he qrows up.]]
            p Jefferson quiere ser bombero cuando sea grande.
    .row.mb-4
      .col-lg.bg-color54.m-lg-2.mb-4.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img14.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 Jimmy excels at his job as a bartender at that restaurant.]]
            p Jimmy se destaca como cantinero en ese restaurante.
      .col-lg.bg-color54.m-lg-2.mb-0.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img15.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 Felix is a pilot with many flying hours.]]
            p Félix es un piloto con muchas horas de vuelo.
    .row.mb-5
      .col-lg.bg-color54.m-lg-2.mb-4.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img16.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 He is the dentist in that clinic.]]
            p Él es el dentista en esa clínica.
      .col-lg.bg-color54.m-lg-2.mb-0.mb-lg-0
        .row.align-items-end
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img17.svg')
          .col
            p.mb-0 #[b #[i.txt-color1 Robert is a sailor, that’s why he has a love in every port.]]
            p Roberto es un marinero, por eso tiene un amor en cada puerto.
    .row.align-items-center.mb-5
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img36.png')
      .col-lg
        p #[b #[i.txt-color2 Certainly, there are many other labor activities that people engage in. If required, a dictionary can be consulted to increase vocabulary.]]
        p.txt-color3 Ciertamente, hay muchas otras actividades laborales a las que se dedican las personas. De requerirlo, puede consultarse un diccionario para aumentar el vocabulario.
    p.mb-5 A continuación, puede escuchar algunas frases que son utilizadas en actividades laborales en nuestro diario vivir.
    .row.bg-color55
      .col-12.p-5
        .row
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/img37.png')
          .col-lg
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--blanca")
              .row(titulo="<em>When you apply for a job:</em> / Al solicitar empleo:")
                .col-12
                  p.mb-0.text-center #[b #[i.txt-color2 Phrases or vocabulary used for labor activities.]]
                  p.mb-5.text-center.txt-color3 Frases o vocabulario utilizado para actividades laborales.
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Apply for a job.</b> / Solicitar un trabajo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_a.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Accept the offer.</b> / Aceptar la oferta.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_e.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>CV.</b> / Hoja de vida o curriculum vitae.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_b.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Reject the offer.</b> / Rechazar la oferta.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_f.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Appointment.</b> / Cita.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_c.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>To hire staff.</b> / Contratar personal.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_g.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Interview.</b> / Entrevista.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_d.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Contract.</b> / Contrato.</p>"
                        :audio="require('@/assets/curso/tema2/Audio16_h.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .row(titulo="<em>Regarding the characteristics of the labor to do</em> / Respecto a las características de la labor a realizar")
                .col-12
                  p.mb-0.text-center #[b #[i.txt-color2 Phrases or vocabulary used for labor activities.]]
                  p.mb-5.text-center.txt-color3 Frases o vocabulario utilizado para actividades laborales.
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Trainee.</b> / Aprendiz.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_a.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Break.</b> / Descanso.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_l.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Full-time job.</b> / Trabajo a tiempo completo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_b.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Lunch time.</b> / Hora de almuerzo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_m.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Part-time job.</b> / Trabajo de medio tiempo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_c.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Schedule.</b> / Horario.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_n.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Permanent  job.</b> / Trabajo fijo o permanente.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_d.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Timekeeping.</b> / Puntualidad.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_o.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Temporary job.</b> / Trabajo temporal.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_e.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Check-in time.</b> / Hora de entrada.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_p.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Work shift.</b> / Turno de trabajo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_f.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Check-out time.</b> / Hora de salida.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_q.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Boss.</b> / Jefe</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_g.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Overtime.</b> / Horas extra.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_r.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Colleague.</b> / Colega, compañero de trabajo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_h.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Day off.</b> / Día libre.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_s.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Manager.</b> / Gerente.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_i.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Get promoted.</b> / Obtener un ascenso</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_t.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Employee.</b> / Empleado.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_j.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Staff.</b> / Personal de la empresa.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_u.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Worker.</b> / Trabajador.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_k.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Workplace.</b> / Lugar de trabajo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio17_v.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .row(titulo="<em>Regarding the payment conditions</em> / Respecto a las características del pago")
                .col-12
                  p.mb-0.text-center #[b #[i.txt-color2 Phrases or vocabulary used for labor activities.]]
                  p.mb-5.text-center.txt-color3 Frases o vocabulario utilizado para actividades laborales.
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Daily salary.</b> / Salario diario.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_a.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Bonus.</b> / Bono o bonificación.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_g.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Monthly salary.</b> / Salario mensual.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_b.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Vacation bonus.</b> / Bono de vacaciones.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_h.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Wage.</b> / Salario por semana.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_c.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Social security.</b> / Seguridad social.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_i.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Salary increase.</b> / Aumento salarial.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_d.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Social benefits.</b> / Prestaciones sociales.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_j.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Minimum wage.</b> / Salario mínimo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_e.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Health insurance.</b> / Seguro médico.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_k.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg-6
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Decent salary.</b> / Salario digno.</p>"
                        :audio="require('@/assets/curso/tema2/Audio18_f.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .row(titulo="<em>When you stop working</em> / Cuando se deja de trabajar")
                .col-12
                  p.mb-0.text-center #[b #[i.txt-color2 Phrases or vocabulary used for labor activities.]]
                  p.mb-5.text-center.txt-color3 Frases o vocabulario utilizado para actividades laborales.
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>To resign.</b> / Dimitir, renunciar.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_a.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Grief over the death of a family member.</b> / Duelo por muerte de un familiar.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_h.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>To retire.</b> / Retirarse, jubilarse.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_b.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Holidays.</b> / Vacaciones.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_i.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Maternity leave.</b> / Permiso por maternidad.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_c.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Strike.</b> / Huelga.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_j.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Paternity leave.</b> / Permiso por paternidad.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_e.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>To fire.</b> / Despedir.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_k.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Marriage license.</b> / Permiso matrimonial.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_f.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    .col-lg
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Out of work.</b> / Ser despedido, no tener trabajo.</p>"
                        :audio="require('@/assets/curso/tema2/Audio19_l.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  .row
                    .col-lg-6
                      TarjetaAudio.color-primario.mb-3(
                        texto="<p><b>Sick leave.</b> / Permiso por enfermedad. </p>"
                        :audio="require('@/assets/curso/tema2/Audio19_g.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    Separador
    #t_2_4
    .titulo-segundo.color-primario
      h2 2.4 #[i Physical, social and cognitive skills] / Habilidades físicas, sociales y cognitivas
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion8")
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img38.png')
    p.mb-5 #[b #[i.txt-color1 These skills are stated as:]] / Estas habilidades se establecen como:
    .titulo-sexto.color-primario.mb-4
      p.mb-0 #[b Tabla 4]. Habilidades físicas
    .tabla-b.color-acento-contenido.borde1.mb-5
      .tabla-b__header.fondo3
        .row.justify-content-end
          .col-auto.p-4
            Audio.color-primario.my-5.me-4(
              :audio="require('@/assets/curso/tema2/Audio20.wav')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
            .indicador--click(v-if="mostrarIndicadorAudio")
      table
        tr.borde2
          td(colspan="6")
            h4.mb-0.text-center #[b #[i.txt-color1 Physical skills] / Habilidades físicas]
        tr.borde2
          td
            h5.mb-0.text-center #[b #[i Motor skills]]
          td.border3
            h5.mb-0.text-center Capacidades motrices
          td
            h5.mb-0.text-center #[b #[i Perceptual-motor abilities]]
          td.border3
            h5.mb-0.text-center Capacidades perceptivo-motrices
          td.border3
            h5.mb-0.text-center #[b #[i Socio-motor skills]]
          td
            h5.mb-0.text-center Capacidades socio-motrices
        tr
          td
            p.mb-0.text-center #[i Strength]
          td.border3
            p.mb-0.text-center Fuerza
          td
            p.mb-0.text-center #[i Coordination]
          td.border3
            p.mb-0.text-center Coordinación
          td.border3
            p.mb-0.text-center #[i Expression]
          td
            p.mb-0.text-center Expresión
        tr.borde2
          td
            p.mb-0.text-center #[i Endurance]
          td.border3
            p.mb-0.text-center Resistencia
          td
            p.mb-0.text-center #[i Balance]
          td.border3
            p.mb-0.text-center Equilibrio
          td.border3
            p.mb-0.text-center #[i Imagination]
          td
            p.mb-0.text-center Imaginación
        tr
          td
            p.mb-0.text-center #[i Speed]
          td.border3
            p.mb-0.text-center Velocidad
          td
            p.mb-0.text-center #[i Swing]
          td.border3
            p.mb-0.text-center Ritmo
          td.border3
            p.mb-0.text-center #[i Creation]
          td
            p.mb-0.text-center Creación
        tr.borde5
          td
            p.mb-0.text-center #[i Flexibility]
          td.border3
            p.mb-0.text-center Flexibilidad
          td
            p.mb-0.text-center #[i Laterality]
          td.border3
            p.mb-0.text-center Lateralidad
          td.border3
            p.mb-0.text-center #[i Opposition - collaboration]
          td
            p.mb-0.text-center Oposición - colaboración
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img39.png')
      .col-lg
        Traduccion.color-primario.mb-5(:dialogo="traduccion9")
        p.mb-0 #[b #[i.txt-color1 Among these skills are:]] / #[span.txt-color3 Entre estas habilidades se encuentran:]
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 5]. Habilidades sociales
        .tabla-b.color-acento-contenido.borde1
          .tabla-b__header.fondo4
            .row.justify-content-end
              .col-auto.p-4
                Audio.color-primario.my-5.me-4(
                  :audio="require('@/assets/curso/tema2/Audio21.wav')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table
            tr.borde2
              td(colspan="6")
                h4.mb-0.text-center #[b #[i.txt-color1 Social skills] / Habilidades sociales]
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Communication]]
              td.border3
                p.mb-0.text-center Comunicación
              td
                p.mb-0.text-center #[b #[i Express positive feelings.]]
              td.border3
                p.mb-0.text-center Expresar sentimientos positivos.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Expressive skills]]
              td.border3
                p.mb-0.text-center Habilidades expresivas
              td
                p.mb-0.text-center #[b #[i Receive positive feelings.]]
              td.border3
                p.mb-0.text-center Recibir sentimientos positivos.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Empathy]]
              td.border3
                p.mb-0.text-center Empatía
              td
                p.mb-0.text-center #[b #[i Defend your own rights.]]
              td.border3
                p.mb-0.text-center Defender los propios derechos.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Assertiveness]]
              td.border3
                p.mb-0.text-center Asertividad
              td
                p.mb-0.text-center #[b #[i Make requests or ask for favors.]]
              td.border3
                p.mb-0.text-center Hacer peticiones o pedir favores.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Respect]]
              td.border3
                p.mb-0.text-center Respeto
              td
                p.mb-0.text-center #[b #[i Reject requests. Say no.]]
              td.border3
                p.mb-0.text-center Rechazar peticiones. Decir no.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Self-control]]
              td.border3
                p.mb-0.text-center Autocontrol
              td
                p.mb-0.text-center #[b #[i Face criticism.]]
              td.border3
                p.mb-0.text-center Afrontar las críticas.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Active listening]]
              td.border3
                p.mb-0.text-center Escucha activa
              td
                p.mb-0.text-center #[b #[i Request to change behavior.]]
              td.border3
                p.mb-0.text-center Petición de cambio de una conducta.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Negotiation]]
              td.border3
                p.mb-0.text-center Negociación
              td
                p.mb-0.text-center
              td.border3
                p.mb-0.text-center
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Comprehension]]
              td.border3
                p.mb-0.text-center Comprensión
              td
                p.mb-0.text-center
              td.border3
                p.mb-0.text-center
            tr.borde5
              td
                p.mb-0.text-center #[b #[i Start, maintain and close conversations.]]
              td.border3
                p.mb-0.text-center Iniciar, mantener y cerrar conversaciones.
              td
                p.mb-0.text-center
              td.border3
                p.mb-0.text-center
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        Traduccion.color-primario.mb-5(:dialogo="traduccion10")
        p.mb-0 #[b #[i.txt-color1 Some of the most important are:]] / #[span.txt-color3 Algunas de las más importantes son:]
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img40.png')
    .titulo-sexto.color-primario.mb-4
      p.mb-0 #[b Tabla 6]. Habilidades cognitivas
    .tabla-b.color-acento-contenido.borde1.mb-5
      .tabla-b__header.fondo5
        .row.justify-content-end
          .col-auto.p-4
            Audio.color-primario.my-5.me-4(
              :audio="require('@/assets/curso/tema2/Audio22.wav')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
            .indicador--click(v-if="mostrarIndicadorAudio")
      table
        tr.borde2
          td(colspan="6")
            h4.mb-0.text-center #[b #[i.txt-color1 Cognitive skills] / Habilidades cognitivas]
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Attention]]
          td.border3
            p.mb-0.text-center Atención
          td
            p.mb-0.text-center #[b #[i Perception]]
          td.border3
            p.mb-0.text-center Percepción
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Memory]]
          td.border3
            p.mb-0.text-center Memoria
          td
            p.mb-0.text-center #[b #[i Behavior inhibition and management]]
          td.border3
            p.mb-0.text-center Inhibición y gestión de la conducta
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Self-awareness]]
          td.border3
            p.mb-0.text-center Autoconciencia
          td
            p.mb-0.text-center #[b #[i Anticipation and planning]]
          td.border3
            p.mb-0.text-center Anticipación y planificación
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Reasoning]]
          td.border3
            p.mb-0.text-center Razonamiento
          td
            p.mb-0.text-center #[b #[i Symbolization and interpretation]]
          td.border3
            p.mb-0.text-center Simbolización e interpretación
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Motivation and goal setting]]
          td.border3
            p.mb-0.text-center Motivación y fijación de metas
          td
            p.mb-0.text-center #[b #[i Language]]
          td.border3
            p.mb-0.text-center Lenguaje
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Association capacity]]
          td.border3
            p.mb-0.text-center Capacidad de asociación
          td
            p.mb-0.text-center #[b #[i Metacognition]]
          td.border3
            p.mb-0.text-center Metacognición
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Cognitive flexibility]]
          td.border3
            p.mb-0.text-center Flexibilidad cognitiva
          td
            p.mb-0.text-center
          td.border3
            p.mb-0.text-center
        tr.borde2
          td
            p.mb-0.text-center #[b #[i Problem resolution]]
          td.border3
            p.mb-0.text-center Resolución de problemas
          td
            p.mb-0.text-center
          td.border3
            p.mb-0.text-center
        tr.borde5
          td
            p.mb-0.text-center #[b #[i Creativity and lateral thinking]]
          td.border3
            p.mb-0.text-center Creatividad y pensamiento lateral
          td
            p.mb-0.text-center
          td.border3
            p.mb-0.text-center
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png')
      .col-lg-8
        .row
          .col-12.bg-color5.p-4.mb-3
            p.mb-0 #[b #[i.txt-color2 Note: In general, to help develop cognitive skills, some recommendations can be followed, especially from childhood, through  activities such as:]]
          .col-12.bg-color6.p-4.mb-3
            p.mb-0.txt-color3 #[b Nota]: en general, para ayudar a desarrollar las habilidades cognitivas, se pueden seguir algunas recomendaciones, especialmente desde la niñez, mediante la realización de actividades como:
    .row.justify-content-center.mb-5
      .col-lg-auto
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 7]. Actividades para desarrollar habilidades cognitivas
        .tabla-b.color-acento-contenido.borde1
          .tabla-b__header.fondo6
            .row.justify-content-end
              .col-auto.p-4
                Audio.color-primario.my-5.me-4(
                  :audio="require('@/assets/curso/tema2/Audio23.wav')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table
            tr.borde2
              td(colspan="6")
                h4.mb-0.text-center #[b #[i.txt-color1 Activities to develop cognitive skills.]]
                h4.mb-0.text-center #[b  Actividades para desarrollar las habilidades cognitivas.]
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Games (free structured)]]
              td.border3
                p.mb-0.text-center Juegos (libres y estructurados)
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Educational video games]]
              td.border3
                p.mb-0.text-center Videojuegos educativos
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Riddles]]
              td.border3
                p.mb-0.text-center Acertijos
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Mental dexterity tasks]]
              td.border3
                p.mb-0.text-center Tareas de destreza mental
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Table games]]
              td.border3
                p.mb-0.text-center Juegos de mesa
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Artistic activities]]
              td.border3
                p.mb-0.text-center Actividades artísticas
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Physical exercises]]
              td.border3
                p.mb-0.text-center Ejercicios físicos
            tr.borde5
              td
                p.mb-0.text-center #[b #[i Sport activities]]
              td.border3
                p.mb-0.text-center Actividades deportivas
    p.mb-5 A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema:
    Dialogo.color-secundario.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[i A short story] / Un cuento corto.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    .row.justify-content-center
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img24.svg')
      .col-lg-5
        Traduccion.color-primario.mb-5(:dialogo="traduccion11")

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
            '<em>A sentence can be defined as a grammatical structure that forms a unit with complete meaning. Basically, sentences are made up of clauses that include at least one verb. These clauses are made up of a subject and a predicate.<br><br>These clauses or sentences can be of two types: independent or dependent.<br><br><b>Independent clauses or sentences</b>, also called main clauses, are sentences that make sense in themselves; so that they include a subject, a verb and a complement.<br>For example: <b>Mary wants a dress</b>.<br><br><b>Dependent clauses or sentences</b>, also called subordinate clauses, are sentences that depend on an independent clause in order to make complete sense. Therefore, they are always linked to them through subordinating conjunctions.<br>For example: <b>Mary will buy a blue dress</b>.</em>',
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
            '<em><b>Case 3</b><br><br>An important thing not to forget is putting a comma before a coordinating conjunction that connects two independent clauses. However, between independent clauses that contain commas or are very long, a semicolon is used.<br><br><b>Example: Carol wanted to study in Oxford, but she didn&apos;t pass the admission exam</b>.</em>',
          textoEsp:
            'Algo importante que no debe olvidarse es poner una coma antes de una conjunción coordinadora que conecta dos cláusulas independientes. Sin embargo, entre las cláusulas independientes que contengan comas o sean muy largas, se utiliza punto y coma.<br><br><b>Ejemplo: Carol quería estudiar en Oxford, pero no aprobó el examen de admisión</b>.',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>In general, personal activities are oriented towards the organic survival and human condition of an individual. Basically they are activities that take place on a daily basis and are carried out automatically, focused on the care and maintenance of one&apos;s own body. In addition, they integrate all those procedures that a person can perform on a daily basis, with a purpose that is part of that person&apos;s identity.</em>',
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
    traduccion8: {
      dialogo: [
        {
          textoIng:
            '<em>The human being has various abilities, which are developed from birth to adulthood. Among these basic skills are: physical, social and cognitive. Some of these skills are defined and listed below.<br><br><b>Physical skills</b><br><br>They are physiological conditions innate in the individual, which allow movement and are feasible to measure and improve through training.</em>',
          textoEsp:
            'El ser humano posee diversas habilidades, que se van desarrollando desde que nace hasta su vida adulta. Entre estas habilidades básicas, están: las físicas, sociales y cognitivas. Seguidamente, se definen y se enumeran algunas de estas habilidades.<br><br><b>Habilidades físicas</b><br><br>Son condiciones fisiológicas innatas en el individuo, que permiten el movimiento y son factibles de medida y mejora a través del entrenamiento.',
        },
      ],
    },
    traduccion9: {
      dialogo: [
        {
          textoIng:
            '<em><b>Social skills</b><br><br>Social skills refer to the person´s ability to execute an exchange behavior with favorable results, in a way that allows us to relate to other people in an appropriate way.</em>',
          textoEsp:
            '<b>Habilidades sociales</b><br><br>Las habilidades sociales hacen referencia a la capacidad de la persona de ejecutar una conducta de intercambio con resultados favorables, de manera que nos permiten relacionarnos con otras personas de forma adecuada.',
        },
      ],
    },
    traduccion10: {
      dialogo: [
        {
          textoIng:
            '<em><b>Cognitive skills</b><br><br>Cognitive skills are mental processes that are developed from childhood and allow us to function successfully in everyday life. There are many cognitive abilities that we have and that we use constantly to survive, mostly even unconsciously.</em>',
          textoEsp:
            '<b>Habilidades cognitivas</b><br><br>Las habilidades cognitivas son procesos mentales que se desarrollan desde la niñez y nos permiten desenvolvernos con éxito en la vida cotidiana. Son muchas las habilidades cognitivas de las que disponemos y que usamos constantemente para sobrevivir, en su mayoría incluso inconscientemente.',
        },
      ],
    },
    traduccion11: {
      dialogo: [
        {
          textoIng:
            '<em><b>We must use our cognitive skills to achieve success in life!</b></em>',
          textoEsp:
            '¡Debemos usar nuestras habilidades cognitivas para alcanzar el éxito en la vida!',
        },
      ],
    },
    dialogo: {
      personajes: [
        {
          nombre: 'Christian',
          img: require('@/assets/curso/tema1/img134.svg'),
        },
        {
          nombre: 'Aura',
          img: require('@/assets/curso/tema1/img135.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Christian',
          textoIng: 'What time do you ***?',
          textoEsp: 'A qué hora te ***',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'get up',
        },
        {
          personaje: 'Aura',
          textoIng: 'Usually, at 6:00 a.m.',
          textoEsp: 'Por lo general, a las 6:00 a.m.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: '',
        },
        {
          personaje: 'Christian',
          textoIng: 'Wow! That’s very early!',
          textoEsp: '¡Guau! ¡Eso es muy temprano!',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'must',
        },
        {
          personaje: 'Aura',
          textoIng: 'I need to go to school',
          textoEsp: 'tengo que ir a la escuela',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: '',
        },
        {
          personaje: 'Christian',
          textoIng: 'What’s the first thing you do when you get up?',
          textoEsp: '¿Qué es lo primero que haces cuando te levantas?',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: '',
        },
        {
          personaje: 'Aura',
          textoIng: 'I *** my teeth.',
          textoEsp: 'Me *** los dientes.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'brush',
        },
        {
          personaje: 'Aura',
          textoIng: 'I take a ***.',
          textoEsp: 'Yo tomo una ***.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'shower',
        },
        {
          personaje: 'Aura',
          textoIng: 'I *** my hair.',
          textoEsp: 'Me *** mi pelo.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'comb',
        },
        {
          personaje: 'Aura',
          textoIng: 'And *** breakfast.',
          textoEsp: 'Y *** el desayuno.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: 'cook',
        },
        {
          personaje: 'Christian',
          textoIng: 'Ok, Bye.',
          textoEsp: 'Ok, Adios.',
          audio: require('@/assets/curso/tema1/audio2.mp4'),
          palabra: '',
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
