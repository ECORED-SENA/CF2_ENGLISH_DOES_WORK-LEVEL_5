<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 #[i Modal verbs] / Verbos modales
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion1")
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img1.png')
    .row.justify-content-center.mb-4
      .col-lg-11
        .row.justify-content-center
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img1.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Habilidad o posibilidad.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Pasado de #[i can] - hacer solicitudes.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Probabilidad.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img4.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Posibilidad o sugerencias.
          .col-7.col-lg
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img5.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Futuro con intención clara.
    .row.justify-content-center.mb-5
      .col-lg-9
        .row.justify-content-center
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img6.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Peticiones.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img7.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Compromiso.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img8.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Es el mismo significado de #[i Will] - poco se usa.
          .col-7.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img9.svg')})`}")
                .tarjeta-flip__contenido.p-4
                  .row.h-100.align-items-center
                    .col-12
                      p.text-center.mb-0 Recomendación o una obligación.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img10.svg')
      .col-lg-8
        Traduccion.color-primario(:dialogo="traduccion2")
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row
      .col-12.px-4.py-5.bg-color2
        .row.align-items-center.justify-content-center
          .col-6.col-lg.mb-4.mb-lg-0
            Audio.color-acento-botones.mx-auto.mb-2(
              :audio="require('@/assets/curso/tema1/audio1.mp4')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.mb-0.text-center #[b #[i Listen to de audio]. /#[br] Escuche el audio.]
          .col-10.col-lg.mb-4.mb-lg-0
            figure.mb-4
              img(src='@/assets/curso/tema1/img11.svg')
            p.mb-0 #[b #[i.txt-color1 You could buy the food.]] / Tú podrías comprar la comida.
          .col-10.col-lg.mb-4.mb-lg-0
            figure.mb-4
              img(src='@/assets/curso/tema1/img12.svg')
            p.mb-0 #[b #[i.txt-color1 May she come with us?]] / ¿Podría ella venir con nosotros?
          .col-10.col-lg
            figure.mb-4
              img(src='@/assets/curso/tema1/img13.svg')
            p.mb-0 #[b #[i.txt-color1 Susy must help you wash the dishes.]] / Susy debe ayudarte a lavar los platos.
    Separador
    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1 #[i Use of “can”] / Uso de #[i “can”]
    .row.bg-color3.mb-5
      .col-12.p-5
        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img2.png')
          .col
            Traduccion.color-primario(:dialogo="traduccion3")
            p.text-center.mb-4 #[b #[i For example]: / Por ejemplo:]
            .row
              .col-12.ms-0.ms-lg-2.p-4.bg-color4
                .row.align-items-center.justify-content-center
                  .col-6.col-lg.mb-4.mb-lg-0
                    Audio.color-acento-botones.mx-auto.mb-2(
                      :audio="require('@/assets/curso/tema1/audio2.mp4')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                    p.mb-0.text-center #[b #[i Listen to de audio].#[br] Escuche el audio.]
                  .col-10.col-lg.mb-4.mb-lg-0
                    figure.mb-4
                      img(src='@/assets/curso/tema1/img15.svg')
                    p.mb-0 #[b #[i.txt-color1 Mary can speak English.]] / Mary puede hablar Inglés.
                  .col-10.col-lg.mb-4.mb-lg-0
                    figure.mb-4
                      img(src='@/assets/curso/tema1/img14.svg')
                    p.mb-0 #[b #[i.txt-color1 You can play volleyball.]] / Tú puedes jugar voleibol.
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img3.png')
      .col-lg
        p #[i.txt-color2 In the development of a conversation or when formulating sentences, this modal verb can be used in an affirmative, negative or interrogative form. The following table shows each of these structures:]
        p.txt-color3 En el desarrollo de una conversación o al formular oraciones, este verbo modal se puede utilizar en forma afirmativa, negativa o interrogativa. En la siguiente tabla, se observa cada una de estas estructuras:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-primario.mb-4
          p.mb-0 #[b Tabla 1]. Estructura gramatical #[i “can”]
        .tabla-b.color-acento-contenido.borde1.mb-5
          .tabla-b__header.fondo1
            .row.justify-content-end
              .col-auto.p-4
                Audio.color-primario.my-5.me-4(
                  :audio="require('@/assets/curso/tema1/audio1.wav')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table
            tr.borde2
              td
                h4.mb-0.text-center #[i.txt-color1 Form]
                h4.mb-0.text-center Forma
              td.border3
                h4.mb-0.text-center #[i.txt-color1 Grammatical structure]
                h4.mb-0.text-center Estructura gramatical
              td
                h4.mb-0.text-center #[i.txt-color1 Example]
                h4.mb-0.text-center Ejemplo
            tr
              td
                p.mb-0.text-center #[b #[i Affirmative]]
                p.mb-0.text-center Afirmativa
              td.border3
                p.mb-0.text-center #[b #[i Subject + Modal verb + Main verb + Complement]]
                p.mb-0.text-center Sujeto + Verbo modal + Verbo principal + Complemento
              td
                p.mb-0.text-center #[i The baby can run fast.]
                p.mb-0.text-center El bebé puede correr rápido.
            tr.borde2
              td
                p.mb-0.text-center #[b #[i Interrogative]]
                p.mb-0.text-center Interrogativa
              td.border3
                p.mb-0.text-center #[b #[i Modal verb + Subject + Main verb + Complement + ?]]
                p.mb-0.text-center Verbo modal + Sujeto + Verbo principal + Complemento + ?
              td
                p.mb-0.text-center #[i Can the baby run?]
                p.mb-0.text-center ¿Puede el bebé correr?
            tr
              td
                p.mb-0.text-center #[b #[i Negative]]
                p.mb-0.text-center Negativa
              td.border3
                p.mb-0.text-center #[b #[i Subject + Modal verb + not + Main verb + Complement]]
                p.mb-0.text-center Sujeto + Verbo modal + no + Verbo principal + Complemento
              td
                p.mb-0.text-center #[i The baby can’t run.]
                p.mb-0.text-center El bebé no puede correr.
    .row
      .col-lg.p-5.m-2.bg-color5
        p.mb-0 #[b #[i.txt-color2 * Being in the negative form, this modal verb can be written with a contraction.]]
        p.mb-0 #[b #[i.txt-color2 In this case, #[span.txt-color1 can not] become → #[span.txt-color1 can't]]]
      .col-lg.p-5.m-2.bg-color6
        p.mb-0 #[i.txt-color3 * Al estar en forma negativa, este verbo modal puede escribirse con contracción.]
        p.mb-0 #[i.txt-color3 En este caso, #[b can not] pasa a → #[b can't]]
    Separador
    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2 #[i Use of “could”] / Uso de #[i “could”]
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img4.png')
      .col-lg
        p #[i.txt-color2 #[b The modal verb “could” is the same as “can”, but in the past tense. It also serves to express a possibility that an event or fact occurs. It is also used when it is necessary to give a tone of formality when making a request or petition to the person to whom you are speaking.]]
        p.txt-color3 El verbo modal #[i “could”] es el mismo #[i “can“], pero en tiempo pasado. Sirve además para expresar una posibilidad que un evento o hecho ocurra. También se utiliza cuando se requiere dar un tono de formalidad al momento de hacer una solicitud o petición a la persona con quien se habla.
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row.bg-color7.mb-5
      .col-12.p-5
        .row.justify-content-center.align-items-center
          .col-10.col-lg.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img5.png')
            p.mb-0 #[b #[i.txt-color1 You could scream louder.]] / Tú podrías gritar más alto.
          .col-10.col-lg.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img6.png')
            p.mb-0 #[b #[i.txt-color1 Laury could study ballet.]] / Laury podría estudiar ballet.
          .col-10.col-lg.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img7.png')
            p.mb-0 #[b #[i.txt-color1 Peter couldn’t go to the movies.]] / Peter no pudo ir al cine.
          .col-10.col-lg.bg-color8.p-5
            Audio.color-primario.mx-auto(
              :audio="require('@/assets/curso/tema1/audio4.mp4')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion4")
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b").bg-color9
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Affirmative] / Afirmativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img20.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img21.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img22.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img23.svg')
              .col-lg-9
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img25.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="You <em>could</em> <i>eat</i> <span>all the fruits.</span>"
                      :audio="require('@/assets/curso/tema1/audio5.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Tú podrías comer todas las frutas.
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Interrogative] / Interrogativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img27.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img28.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img29.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img30.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img31.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em>Could</em> you <i>sign</i> <em>here, please?</em>"
                      :audio="require('@/assets/curso/tema1/audio6.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 ¿Podrías firmar aquí, por favor?
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Negative] / Negativa]
                .row.d-none.d-lg-block
                  .col-12
                    figure
                      img(src='@/assets/curso/tema1/img37.svg')
                .row.d-block.d-lg-none
                  .col-12
                    .row.align-items-center.justify-content-center
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img32.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img33.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img34.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img35.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img36.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img38.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="You <em>could</em><span>n’t</span> <i>do</i> <span>the homework.</span>"
                      :audio="require('@/assets/curso/tema1/audio7.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Tú no pudiste hacer la tarea.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png')
      .col-lg-8
        .row
          .col-12.bg-color5.p-4.mb-3
            p.mb-0 #[b #[i.txt-color2 Note: being in the negative form, this modal verb can be written with a contraction.]]
            p.mb-0 #[b #[i.txt-color2 In this case, #[span.txt-color1 could not] become → #[span.txt-color1 couldn’t.]]]
          .col-12.bg-color6.p-4.mb-3
            p.mb-0.txt-color3 #[b Nota]: al estar en forma negativa, este verbo modal puede escribirse con contracción. 
            p.mb-0.txt-color3 En este caso, #[i #[b could not]]  pasa a → #[i #[b couldn’t.]]
    Separador
    #t_1_3
    .titulo-segundo.color-primario
      h2 1.3 #[i Use of “should”] / Uso de #[i “should”]
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p #[i.txt-color2 #[b The modal verb “should” is used when you want to express: an obligation, a recommendation or advice, about what is considered correct, or what is considered a good idea in some case or situation. Likewise, it can be used when you want to speculate on a topic and say something that you think is likely to happen.]]
        p.txt-color3 El verbo modal #[b #[i “should”]] se utiliza cuando se quiere expresar una obligación, una recomendación o consejo, acerca de lo que se considera correcto, o que se considera es una buena idea en algún caso o situación. Asimismo, se puede usar cuando se quiere especular sobre un tema y se dice algo que se cree es probable que pase.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img39.svg')
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row.justify-content-center.mb-5
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.px-5.pb-5
              .row.justify-content-center
                .col-10.bg-color11.p-3.mb-5
                  p.mb-0.text-white.text-center #[b #[i Obligation]]
                .col-12
                  p.mb-5 Para expresar una obligación:
                  p.mb-0 #[b #[i.txt-color1 I really should visit my father in the hospital.]]
                  p.mb-0 Realmente debería visitar a mi padre en el hospital.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img9.png')})`}")
      .col-11.col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.px-5.pb-5
              .row.justify-content-center
                .col-10.bg-color11.p-3.mb-5
                  p.mb-0.text-white.text-center #[b #[i Advice]]
                .col-12
                  p.mb-5 Para expresar recomendación o consejo.
                  p.mb-0 #[b #[i.txt-color1 You should study the career you like.]]
                  p.mb-0 Deberías estudiar la carrera que te gusta.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img10.png')})`}")
      .col-11.col-lg
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.px-5.pb-3.pb-lg-5
              .row.justify-content-center
                .col-10.bg-color11.p-3.mb-4
                  p.mb-0.text-white.text-center #[b #[i Probability]]
                .col-12
                  p.mb-4.mb-lg-5 Cuando se especula sobre un tema y se indica una probabilidad.
                  p.mb-0 #[b #[i.txt-color1 Everyone at Telma’s house is infected with Covid-19. They should be in the hospital by now.]]
                  p.mb-0 Todos en casa de Telma están contagiados de Covid-19. Ya ellos deberían estar en el hospital.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img11.png')})`}")
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion5")
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b").bg-color9
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Affirmative] / Afirmativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img40.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img41.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img42.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img43.svg')
              .col-lg-9
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img44.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="Sam <em>should</em> <i>work</i> <span>in your office.</span>"
                      :audio="require('@/assets/curso/tema1/audio8.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Sam debería trabajar en tu oficina.
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Interrogative] / Interrogativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img45.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img46.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img47.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img48.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img49.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="<span>Should</span> Carol <i>go</i> <em>to Ukraine this month?</em>"
                      :audio="require('@/assets/curso/tema1/audio15.wav')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 ¿Debe Carol ir a Ucrania este mes?
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Negative] / Negativa]
                .row.d-none.d-lg-block
                  .col-12
                    figure
                      img(src='@/assets/curso/tema1/img55.svg')
                .row.d-block.d-lg-none
                  .col-12
                    .row.align-items-center.justify-content-center
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img50.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img51.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img52.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img53.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img54.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img56.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="They <em>should</em><span>n’t</span> <i>eat</i> <span>such spicy food.</span>"
                      :audio="require('@/assets/curso/tema1/audio10.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Ellos no deberían comer esa comida tan picante.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png')
      .col-lg-8
        .row
          .col-12.bg-color5.p-4.mb-3
            p.mb-0 #[b #[i.txt-color2 Note: being in the negative form, this modal verb can be written with a contraction.]]
            p.mb-0 #[b #[i.txt-color2 In this case, #[span.txt-color1 should not] become → #[span.txt-color1 shouldn’t.]]]
          .col-12.bg-color6.p-4.mb-3
            p.mb-0.txt-color3 #[b Nota]: al estar en forma negativa, este verbo modal puede escribirse con contracción.
            p.mb-0.txt-color3 En este caso, #[i #[b should not]]  pasa a → #[i #[b shouldn’t.]]
    Separador
    #t_1_4
    .titulo-segundo.color-primario
      h2 1.4 #[i Use of “may”] / Uso de #[i “may”]
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion6")
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img12.png')
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img57.svg' alt='AvatarTop')
          .tarjeta.color-secundario.w-100
            .p-4
              p.mb-0 #[b #[i.txt-color1 It may rain in a few hours.]]
              p.mb-0 Podría llover en pocas horas.
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img58.svg' alt='AvatarTop')
          .tarjeta.color-secundario.w-100
            .p-4
              p.mb-0 #[b #[i.txt-color1 Kris may have the position of manager.]]
              p.mb-0 Kris podría tener el cargo de gerente.
      .col-lg
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img59.svg' alt='AvatarTop')
          .tarjeta.color-secundario.w-100
            .p-4
              p.mb-0 #[b #[i.txt-color1 May Charles pass the exam with ten points?]]
              p.mb-0 ¿Podría Charles pasar el examen con diez puntos?
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion7")
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 #[b #[i Grammatical structure Use of “may” ]]
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b").bg-color9
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Affirmative] / Afirmativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img60.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img61.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img62.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img63.svg')
              .col-lg-9
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img64.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="Sara <em>may</em> <i>expose</i> <span>her health.</span>"
                      :audio="require('@/assets/curso/tema1/audio14.wav')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Sara podría exponer su salud.
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Interrogative] / Interrogativa]
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img65.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img66.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img67.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img68.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img69.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="<em>May</em> I <i>help</i> <span>you with your baby?</span>"
                      :audio="require('@/assets/curso/tema1/audio12.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 ¿Podría ayudarte con tu bebé?
            .row.justify-content-center
              .col-12.p-4.mb-4
                p.mb-5.text-center.txt-color2 #[b #[i Negative] / Negativa]
                .row.d-none.d-lg-block
                  .col-12
                    figure
                      img(src='@/assets/curso/tema1/img75.svg')
                .row.d-block.d-lg-none
                  .col-12
                    .row.align-items-center.justify-content-center
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img70.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img71.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img72.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto.mb-2.mb-lg-0
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img73.svg')
                      .col-3.col-lg-auto.mb-2.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                      .col-10.col-lg-auto
                        figure.figStyle1
                          img(src='@/assets/curso/tema1/img74.svg')
              .col-lg-10
                .row.align-items-center.justify-content-center
                  .col-8.col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img76.svg')
                  .col-11.col-lg
                    TarjetaAudio.color-primario.mb-2(
                      texto="I <em>may</em> <span>not</span> <i>live</i> <span>without you.</span>"
                      :audio="require('@/assets/curso/tema1/audio13.mp4')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.ms-2.mb-0 Yo no podría vivir sin ti.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png')
      .col-lg-8
        .row
          .col-12.bg-color5.p-4.mb-3
            p.mb-0 #[b #[i.txt-color2 Note: being in the negative form, this modal verb can’t be written with a contraction.]]
            p.mb-0 #[b #[i.txt-color2 In this case, #[span.txt-color1 may not] continue → #[span.txt-color1 may not.]]]
          .col-12.bg-color6.p-4.mb-3
            p.mb-0.txt-color3 #[b Nota]: al estar en forma negativa, este verbo modal no puede escribirse con contracción.
            p.mb-0.txt-color3 En este caso, #[i #[b may not]] continúa → #[i #[b may not.]]
    Separador
    #t_1_5
    .titulo-segundo.color-primario
      h2 1.5 #[i Use of “might”] / Uso de #[i “might”]
    .row.mb-5
      .col-4.col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img77.svg')
      .col-lg
        Traduccion.color-primario(:dialogo="traduccion8")
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row.mb-5
      .col-lg.bg-color12.mb-4.mb-lg-0.m-0.m-lg-2.p-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img78.svg', style="width:90px").m-auto
        p.text-center.mb-0 #[i #[b Felix might help his friend in the exam.]]
        p.text-center.mb-0 Felix puede que ayude a su amigo en el examen.
      .col-lg.bg-color12.mb-4.mb-lg-0.m-0.m-lg-2.p-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img79.svg', style="width:90px").m-auto
        p.text-center.mb-0 #[i #[b Laurie might not have the chance to go in the tour.]]
        p.text-center.mb-0 Laurie puede que no tenga la oportunidad de participar en la gira.
      .col-lg.bg-color12.mb-0.mb-lg-0.m-0.m-lg-2.p-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img80.svg', style="width:90px").m-auto
        p.text-center.mb-0 #[i #[b Mario might give you roses for your birthday.]]
        p.text-center.mb-0 Mario puede que te regale rosas por tu cumpleaños.
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        Traduccion.color-primario(:dialogo="traduccion9")
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>Affirmative</em> / Afirmativa").justify-content-center.m-1.bg-color9
            .col-12.p-4.mb-4
              p.mb-5.text-center.txt-color2 #[b #[i Affirmative] / Afirmativa]
              .row.align-items-center.justify-content-center
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img81.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img82.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img83.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img84.svg')
            .col-lg-10.mb-4
              .row.align-items-center.justify-content-center
                .col-8.col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img85.svg')
                .col-11.col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="Mickie <em>might</em> <i>follow</i> <span>directions if asked.</span>"
                    :audio="require('@/assets/curso/tema1/audio16.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-2.mb-0 Mickie puede que siga instrucciones si se le solicita.
          .row(titulo="<em>Interrogative</em> / Interrogativa").justify-content-center.m-1.bg-color9
            .col-12.p-4.mb-4
              p.mb-5.text-center.txt-color2 #[b #[i Interrogative] / Interrogativa]
              .row.align-items-center.justify-content-center
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img86.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img87.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto.mb-2.mb-lg-0
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img88.svg')
                .col-3.col-lg-auto.mb-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                .col-10.col-lg-auto
                  figure.figStyle1
                    img(src='@/assets/curso/tema1/img89.svg')
            .col-lg-10.mb-4
              .row.align-items-center.justify-content-center
                .col-8.col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img90.svg')
                .col-11.col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="<em>Might</em> you <i>plug</i> <span>the cable of the machine, please?</span>"
                    :audio="require('@/assets/curso/tema1/audio17.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-2.mb-0 ¿Podrías conectar el cable de la máquina, por favor?
          .row(titulo="<em>Negative</em> / Negativa").justify-content-center.m-1.bg-color9
            .col-12.p-4.mb-4
              p.mb-5.text-center.txt-color2 #[b #[i Negative] / Negativa]
              .row.d-none.d-lg-block
                .col-12
                  figure
                    img(src='@/assets/curso/tema1/img96.svg')
              .row.d-block.d-lg-none
                .col-12
                  .row.align-items-center.justify-content-center
                    .col-10.col-lg-auto.mb-2.mb-lg-0
                      figure.figStyle1
                        img(src='@/assets/curso/tema1/img91.svg')
                    .col-3.col-lg-auto.mb-2.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                    .col-10.col-lg-auto.mb-2.mb-lg-0
                      figure.figStyle1
                        img(src='@/assets/curso/tema1/img92.svg')
                    .col-3.col-lg-auto.mb-2.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                    .col-10.col-lg-auto.mb-2.mb-lg-0
                      figure.figStyle1
                        img(src='@/assets/curso/tema1/img93.svg')
                    .col-3.col-lg-auto.mb-2.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                    .col-10.col-lg-auto.mb-2.mb-lg-0
                      figure.figStyle1
                        img(src='@/assets/curso/tema1/img94.svg')
                    .col-3.col-lg-auto.mb-2.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                    .col-10.col-lg-auto
                      figure.figStyle1
                        img(src='@/assets/curso/tema1/img95.svg')
            .col-lg-10.mb-4
              .row.align-items-center.justify-content-center
                .col-8.col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img97.svg')
                .col-11.col-lg
                  TarjetaAudio.color-primario.mb-2(
                    texto="Watch out! She <em>might</em> <span>not</span> <i>be</i> <span>good with children.</span>"
                    :audio="require('@/assets/curso/tema1/audio18.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-2.mb-0 ¡Cuidado! Puede que ella no sea buena con los niños.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png')
      .col-lg-8
        .row
          .col-12.bg-color5.p-4.mb-3
            p.mb-0 #[b #[i.txt-color2 Note: being in the negative form, this modal verb can’t be written with a contraction.]]
            p.mb-0 #[b #[i.txt-color2 In this case, #[span.txt-color1 might not] continue → #[span.txt-color1 might not.]]]
          .col-12.bg-color6.p-4.mb-3
            p.mb-0.txt-color3 #[b Nota]: al estar en forma negativa, este verbo modal no puede escribirse con contracción.
            p.mb-0.txt-color3 En este caso, #[i #[b might not]] continúa → #[i #[b might not.]]
    Separador
    #t_1_6
    .titulo-segundo.color-primario
      h2 1.6 #[i Requests and petitions] / Solicitudes y peticiones
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img13.png')
      .col-lg
        Traduccion.color-primario(:dialogo="traduccion10")
    .row.bg-color13.mb-5
      .col-12.p-5
        p.mb-5.text-center #[b #[i Requests and petitions with “will”] / (Solicitudes y peticiones con #[i “will”])]
        .row
          .col-lg
            .row
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img98.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you give her the toy, please?"
                  :audio="require('@/assets/curso/tema1/audio7.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Le das el juguete a ella, por favor?
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img99.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you talk louder, please?"
                  :audio="require('@/assets/curso/tema1/audio6.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Puedes hablar más alto, por favor?
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img100.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you paint the garage, please?"
                  :audio="require('@/assets/curso/tema1/audio5.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Puedes pintar el garaje, por favor?
            .row
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img101.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you walk faster, please?"
                  :audio="require('@/assets/curso/tema1/audio4.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Puedes caminar más rápido, por favor?
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img102.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you marry me?"
                  :audio="require('@/assets/curso/tema1/audio3.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Te casarías conmigo?
              .col-lg.bg-color14.p-4.mb-4.m-lg-2
                figure.mb-3
                  img(src='@/assets/curso/tema1/img103.svg', style="width:120px").m-auto
                TarjetaAudio.color-primario.mb-2(
                  texto="Will you go to the market to buy carrots, please?"
                  :audio="require('@/assets/curso/tema1/audio2.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-2.mb-0 ¿Puedes ir al mercado a comprar zanahorias, por favor?
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img104.svg')
    p.mb-5.text-center #[i.txt-color2 Some examples of requests or petitions with “would” are:] / #[span.txt-color3 Algunos ejemplos de solicitudes o peticiones con #[i “would”] son:]
    p.mb-5.text-center #[b #[i Requests and petitions with “would”]] / #[b.txt-color3 Solicitudes y peticiones con #[i “would”]]
    .row
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img111.svg')
      .col-lg
        .row
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img105.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you prepare breakfast, please?"
              :audio="require('@/assets/curso/tema1/audio8.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Prepararías el desayuno, por favor?
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img106.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you pass me the hammer, please?"
              :audio="require('@/assets/curso/tema1/audio9.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Me pasarías el martillo, por favor?
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img107.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you join me on the trip?"
              :audio="require('@/assets/curso/tema1/audio10.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Me acompañarías en el viaje?
        .row
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img108.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you dance with me all night?"
              :audio="require('@/assets/curso/tema1/audio11.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Bailarías conmigo toda la noche?
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img109.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you do your homework, please?"
              :audio="require('@/assets/curso/tema1/audio12.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Harías tu tarea, por favor?
          .col-lg.bg-color14.p-4.mb-4.m-lg-2
            figure.mb-3
              img(src='@/assets/curso/tema1/img110.svg', style="width:120px").m-auto
            TarjetaAudio.color-primario.mb-2(
              texto="Would you call my parents, please?"
              :audio="require('@/assets/curso/tema1/audio13.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Podría llamar a mis padres, por favor?
    Separador
    #t_1_7
    .titulo-segundo.color-primario
      h2 1.7 #[i Affirmative sentence structures using modal verbs] / Estructuras de oraciones afirmativas empleando verbos modales
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.png')
      .col-lg
        p.mb-5 #[i.txt-color2 When it is required to say or affirm something using a modal verb, the word order is:] / #[span.txt-color3 Cuando se requiere decir o afirmar algo utilizando un verbo modal, el orden de las palabras es:]
        p.mb-5.text-center.txt-color2 #[b #[i Grammatical structure] / Estructura gramatical]
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img112.svg').m-auto
        .row
          .col-12.d-block.d-lg-none
            .row.align-items-center.justify-content-center
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img113.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img114.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img115.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img116.svg')
    p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-2
          img(src='@/assets/curso/tema1/img117.svg')
        p.mb-0 #[b #[i.txt-color1 I must take this medicine to lower my cholesterol levels.]]
        p.mb-0 Debo tomar esta medicina para bajar mis niveles de colesterol.
      .col-lg-5
        figure.mb-2
          img(src='@/assets/curso/tema1/img118.svg')
        p.mb-0 #[b #[i.txt-color1 Diane should wear brightly colored clothes.]]
        p.mb-0 Diane debería usar ropa de colores alegres.
    .row.bg-color15
      .col-12.p-5
        .row.mb-5
          .col-lg.mb-4.mb-lg-0
            Traduccion.color-primario(:dialogo="traduccion11")
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img15.png')
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-primario.mb-4
              p.mb-0 #[b Tabla 2].  Estructuras de oraciones afirmativas empleando verbos modales
            .tabla-b.color-acento-contenido.borde1
              .tabla-b__header.fondo2
                .row.justify-content-end
                  .col-auto.p-4
                    Audio.color-primario.my-5.me-4(
                      :audio="require('@/assets/curso/tema1/audio19.wav')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              table
                tr.borde2
                  td
                    h4.mb-0.text-center #[i.txt-color1 Modal verb]
                    h4.mb-0.text-center Verbo modal
                  td.border4
                    h4.mb-0.text-center #[i.txt-color1 Sentence]
                    h4.mb-0.text-center Oración
                tr
                  td
                    p.mb-0.text-center #[b #[i CAN]]
                  td.border4
                    p.mb-0 #[b #[i Lucas #[span.txt-color1 can] help you with your carpentry work.]]
                    p.mb-0 Lucas puede ayudarte con tu trabajo de carpintería.
                tr.borde2
                  td
                    p.mb-0.text-center #[b #[i COULD]]
                  td.border4
                    p.mb-0 #[b #[i Susan #[span.txt-color1 could] do the laundry while you’re sick.]]
                    p.mb-0 Susan podría lavar la ropa mientras estás enferma.
                tr
                  td
                    p.mb-0.text-center #[b #[i MAY]]
                  td.border4
                    p.mb-0 #[b #[i He #[span.txt-color1 may] be sincere.]]
                    p.mb-0 Él puede ser sincero.
                tr.borde2
                  td
                    p.mb-0.text-center #[b #[i MIGHT]]
                  td.border4
                    p.mb-0 #[b #[i Mark #[span.txt-color1 might] ask you some questions.]]
                    p.mb-0 Mark podría hacerte algunas preguntas.
                tr
                  td
                    p.mb-0.text-center #[b #[i SHALL]]
                  td.border4
                    p.mb-0 #[b #[i We #[span.txt-color1 shall] ask for him in the hospital.]]
                    p.mb-0 Deberíamos preguntar por él en el hospital.
                tr.borde2
                  td
                    p.mb-0.text-center #[b #[i SHOULD]]
                  td.border4
                    p.mb-0 #[b #[i The baby #[span.txt-color1 should] drink its milk every four hours.]]
                    p.mb-0 El bebé debe tomar su leche cada cuatro horas.
                tr
                  td
                    p.mb-0.text-center #[b #[i WILL]]
                  td.border4
                    p.mb-0 #[b #[i Felix #[span.txt-color1 will] marry you if you accept his proposal to live in Russia.]]
                    p.mb-0 Felix se casará contigo si tú aceptas su propuesta de vivir en Rusia.
                tr.borde2
                  td
                    p.mb-0.text-center #[b #[i WOULD]]
                  td.border4
                    p.mb-0 #[b #[i You #[span.txt-color1 would] have better grades if you studied more.]]
                    p.mb-0 Tú tendrías mejores calificaciones si estudiaras más.
                tr
                  td
                    p.mb-0.text-center #[b #[i MUST]]
                  td.border4
                    p.mb-0 #[b #[i They #[span.txt-color1 must] pay the bill at the restaurant.]]
                    p.mb-0 Ellos deben pagar la cuenta en el restaurante.
                tr.borde5
                  td
                    p.mb-0.text-center #[b #[i OUGHT TO]]
                  td.border4
                    p.mb-0 #[b #[i You #[span.txt-color1 ought to] leave the party before twilight.]]
                    p.mb-0 Deberías irte de la fiesta antes del crepúsculo.
    Separador
    #t_1_8
    .titulo-segundo.color-primario
      h2 1.8 #[i Negative sentence structures using modal verbs] / Estructuras de oraciones negativas empleando verbos modales
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img16.png')
      .col-lg
        Traduccion.color-primario.mb-5(:dialogo="traduccion12")
        p.mb-5.text-center.txt-color2 #[b #[i Grammatical structure] / Estructura gramatical]
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img121.svg').m-auto
        .row
          .col-12.d-block.d-lg-none
            .row.align-items-center.justify-content-center
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img122.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img123.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img124.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img125.svg')
              .col-3.col-lg-auto.mb-2.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
              .col-10.col-lg-auto.mb-2.mb-lg-0
                figure.figStyle1
                  img(src='@/assets/curso/tema1/img126.svg')
    .row.bg-color13.mb-5
      .col-12.p-5
        p.text-center.mb-5 #[b #[i For example]: / Por ejemplo:]
        .row.mb-5
          .col-lg.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema1/img17.png')
            p.mb-0 #[b #[i.txt-color1 Ruben must not go with us to the movies.]]
            p.mb-0 Rubén no debe ir al cine con nosotros.
          .col-lg.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema1/img18.png')
            p.mb-0 #[b #[i.txt-color1 Betty should not come to the party.]]
            p.mb-0 Betty no debería venir a la fiesta.
          .col-lg.mb-4.mb-lg-0
            figure.mb-2
              img(src='@/assets/curso/tema1/img19.png')
            p.mb-0 #[b #[i.txt-color1 He shall not pass!]]
            p.mb-0 Él no pasará.
          .col-lg
            figure.mb-2
              img(src='@/assets/curso/tema1/img20.png')
            p.mb-0 #[b #[i.txt-color1 Fabio could not build his house.]]
            p.mb-0 Fabio no pudo construir su casa.
        .row.justify-content-center
          .col-lg-6
            TarjetaAudio.color-acento-botones.mb-2(
              texto=""
              :audio="require('@/assets/curso/tema1/audio20.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    Separador
    #t_1_9
    .titulo-segundo.color-primario
      h2 1.9 #[i Interrogative sentence structures using modal verbs] / Estructuras de oraciones interrogativas empleando verbos modales
    .row.bg-color16.mb-5
      .col-12.p-5
        .row.mb-5
          .col-lg.mb-4.mb-lg-0
            Traduccion.color-primario.mb-5(:dialogo="traduccion13")
            p.mb-5.text-center.txt-color2 #[b #[i Grammatical structure] / Estructura gramatical]
            figure.d-none.d-lg-block
              img(src='@/assets/curso/tema1/img127.svg').m-auto
            .row
              .col-12.d-block.d-lg-none
                .row.align-items-center.justify-content-center
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img128.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img129.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img130.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img131.svg')
                  .col-3.col-lg-auto.mb-2.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:8px").m-auto
                  .col-10.col-lg-auto.mb-2.mb-lg-0
                    figure.figStyle1
                      img(src='@/assets/curso/tema1/img132.svg', style="height:140px")
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/img21.png')
        p.mb-5.text-center #[b #[i For example] / Por ejemplo: #[i Interrogative sentence structures using modal verbs]]
        .row.justify-content-center.mb-4
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img22.png')
            TarjetaAudio.color-primario.mb-2(
              texto="Could Melany do the laundry this Saturday?"
              :audio="require('@/assets/curso/tema1/audio21.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Podría Melany lavar la ropa este sábado?
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img23.png')
            TarjetaAudio.color-primario.mb-2(
              texto="May you be honest with her?"
              :audio="require('@/assets/curso/tema1/audio22.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Puedes ser honesto con ella?
          .col-lg-3
            figure.mb-3
              img(src='@/assets/curso/tema1/img24.png')
            TarjetaAudio.color-primario.mb-2(
              texto="Might you answer some questions?"
              :audio="require('@/assets/curso/tema1/audio23.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Podrías responder algunas preguntas?
        .row.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-3
              img(src='@/assets/curso/tema1/img25.png')
            TarjetaAudio.color-primario.mb-2(
              texto="Should you drink all that wine?"
              :audio="require('@/assets/curso/tema1/audio24.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Deberías beber todo ese vino?
          .col-lg-3
            figure.mb-3
              img(src='@/assets/curso/tema1/img26.png')
            TarjetaAudio.color-primario.mb-2(
              texto="Shall we see  the experiment?"
              :audio="require('@/assets/curso/tema1/audio25.wav')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-2.mb-0 ¿Vamos a ver el experimento?
    p.mb-5 A continuación, se invita a escuchar  el siguiente diálogo, en el cual se aplica lo estudiado en el tema.
    Dialogo.color-secundario.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[i A short story] / Un cuento corto.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    .row.justify-content-center.mb-5
      .col-lg-5.m-lg-2.bg-color5.p-4.mb-4.mb-lg-0
        p.mb-0 #[b #[i.txt-color2 That’s why you shouldn’t visit the same places with your new girlfriend…]]
      .col-lg-5.m-lg-2.bg-color6.p-4.mb-0.mb-lg-0
        p.mb-0.txt-color4 Por eso no debes visitar los mismos lugares con tu nueva novia…
    .titulo-segundo.color-primario(data-aos='fade-right')
      h2 Actividad didáctica 
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 #[i Modal verbs] / Verbos modales
        p.mb-4 #[i Complete the sentences using modal verbs.]
          br
          br
          | Completar las oraciones utilizando verbos modales.

        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios en blanco
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/a1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
      
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Tema1',
  components: {
    Traduccion,
    DialogoChat,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>When talking about modal verbs, we are referring to a type of auxiliary verb that can be used to express an opinion about the probability of an event occurring, that is, it indicates whether something is probable or possible. In addition, it is also used to refer to a skill, to make a request, or to request a permission.<br><br>Hence, its meaning will depend on the context of the sentence in which it is located, as well as the verb it accompanies. Modal verbs include:</em>',
          textoEsp:
            'Al hablar de verbos modales, se hace referencia a un tipo de verbo auxiliar que puede utilizarse para expresar una opinión acerca de la probabilidad de ocurrencia de un evento, es decir, se señala si algo es probable o posible. Además, también se usa para hacer referencia a una habilidad, para hacer una petición o para solicitar un permiso.<br><br>De allí que su significado va a depender del contexto de la oración en la que se ubica, así como del verbo al que acompaña. Entre los verbos modales, se encuentran:',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>In general, it can be noted that modal verbs are characterized by:<br><br><ul><li type="circle">They do not have a conjugation (they do not have an infinitive; they do not have a gerund or a participle).</li><li type="circle">They modify another verb, because, as auxiliary verbs, they are always accompanying another main verb in its basic form.</li><li type="circle">They express ability, necessity, certainty, obligation or disposition.</li><li type="circle">In their interrogative or negative form, they do not need any auxiliary verb (because they are themselves auxiliary verbs).</li></ul></em>',
          textoEsp:
            'En líneas generales, puede señalarse que los verbos modales se caracterizan porque:<br><br><ul><li type="circle">No tienen conjugación (no tienen infinitivo, no tienen gerundio ni participio).</li><li type="circle">Modifican a otro verbo, pues, como verbos auxiliares, siempre están acompañando a otro verbo principal en su forma básica.</li><li type="circle">Expresan habilidad, necesidad, certidumbre, obligación o disposición.</li><li type="circle">En su forma interrogativa o negativa, no les hace falta ningún verbo auxiliar (porque ellos mismos son verbos auxiliares).</li></ul>',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>The modal verb "can" is used in various ways or with different intentions. Basically, it can be used to ask for permission, enunciate general truths, talk about an ability you have, as well as make requests and offers. In Spanish, it is translated as "poder" as long as there is the possibility or you have the ability to do something.</em>',
          textoEsp:
            'El verbo modal <em>“can”</em> se usa de varias maneras o con diferentes intenciones. Básicamente, se puede usar para pedir permiso, enunciar verdades generales, para hablar acerca de una habilidad que se tiene, así como para hacer peticiones y también ofrecimientos. En español, se traduce como “poder”, en tanto existe la posibilidad o se tiene habilidad para hacer algo.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>In the development of a conversation or when formulating sentences, this <span>modal</span> verb can be used in an <span>affirmative, negative or interrogative form</span>. The following resource shows each of these structures:</em>',
          textoEsp:
            'En el desarrollo de una conversación o al formular oraciones, este verbo <i>modal</i> se puede utilizar en forma <i>afirmativa, negativa o interrogativa</i>. En el siguiente recurso, se puede observar cada una de estas estructuras:',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>In the same way, in the development of a conversation or when formulating sentences, this modal verb can be used in an affirmative, negative or interrogative form. The following resource shows each of these structures:</em>',
          textoEsp:
            'De igual manera, en el desarrollo de una conversación o al formular oraciones, este verbo modal se puede utilizar en forma afirmativa, negativa o interrogativa. En el siguiente recurso, se observa cada una de estas estructuras:',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>This is a modal verb that can be used when you want to indicate something that can happen, that is, there is a probability, but not the certainty, that what is expressed will happen. In addition, it can also be used when you want to make any type of petition or request in a respectful and friendly way.</em>',
          textoEsp:
            'Este es un verbo modal que puede utilizarse cuando se quiere indicar algo que puede suceder, es decir, hay probabilidad, pero no la certeza, de que lo que se expresa va a ocurrir. Además, también puede usarse cuando se quiere realizar cualquier tipo de petición o solicitud de forma respetuosa y amable.',
        },
      ],
    },
    traduccion7: {
      dialogo: [
        {
          textoIng:
            '<em>Like other modal verbs indicated, this modal verb can be used in affirmative, negative or interrogative form when formulating sentences or in a conversation. The following table shows each of these structures:</em>',
          textoEsp:
            'Al igual que otros verbos modales indicados, este verbo modal se puede usar en forma afirmativa, negativa o interrogativa al formular oraciones o en una conversación. La siguiente tabla muestra cada una de estas estructuras:',
        },
      ],
    },
    traduccion8: {
      dialogo: [
        {
          textoIng:
            '<em>In this case, what is meant is that there is a slight possibility or a weak probability that something could happen. In other words, there is not much certainty that the event or action that is being referred to can occur. It is also used to give suggestions, possibilities, or in case of requests and offers.</em>',
          textoEsp:
            'En este caso, lo que se quiere expresar es que existe una ligera posibilidad o una débil probabilidad de que algo pueda ocurrir. Es decir, no hay mucha seguridad de que pueda darse ese evento o acción a la que se está haciendo referencia. También se usa para dar sugerencias, posibilidades, o en casos de peticiones y ofrecimientos.',
        },
      ],
    },
    traduccion9: {
      dialogo: [
        {
          textoIng:
            '<em>As explained, in the development of a conversation or when formulating sentences, this modal verb can be used in an affirmative, negative or interrogative form. The following resource shows each of these structures:</em>',
          textoEsp:
            'Como se explicó, en el desarrollo de una conversación o cuando se formulan oraciones, este verbo modal se puede usar en forma afirmativa, negativa o interrogativa. El siguiente recurso muestra cada una de estas estructuras:',
        },
      ],
    },
    traduccion10: {
      dialogo: [
        {
          textoIng:
            '<em>In general, requests and petitions can be made in the English language using the auxiliary verb “will” or the conditional auxiliary verb “would”. The difference is that by using "would" the request is made in a more polite way, in other words, it is done with more formality. In this way, <b>"will"</b> is used to make informal requests (asking someone to do something, for example), while "would" is used to make them formally, in a <b>more polite way</b>, when there is not much confidence with the person to whom the petition or request is made.<br><br>In fact, requests are then petitions for another to voluntarily provide a positive or negative answer in this regard. If they are orders, that is, if they cannot be rejected, they would not be requests but demands or mandates.<br><br>Some examples of requests or petitions with “will” are:</em>',
          textoEsp:
            'En general, en el idioma inglés se pueden hacer solicitudes y peticiones utilizando el verbo auxiliar <em>“will”</em> o el verbo auxiliar en modo condicional <em>“would”</em>. La diferencia está en que al utilizar <em>“would”</em> la petición se hace de manera más educada, en otras palabras, se hace con mayor formalidad. De esta manera, <em>“will”</em> se utiliza para realizar solicitudes informales (pedir a alguien que haga algo, por ejemplo), mientras que <em>“would”</em> se utiliza para hacerlas de manera formal, en forma más educada, cuando no existe demasiada confianza con la persona a la que se realiza la petición o solicitud.<br><br>De hecho, las solicitudes son entonces pedidos para que otro voluntariamente brinde una respuesta positiva o negativa al respecto. Si son órdenes, o sea, si no pueden rechazarse, no serían solicitudes sino exigencias o mandatos.<br><br>Algunos ejemplos de solicitudes o peticiones con <em>“will”</em> son:',
        },
      ],
    },
    traduccion11: {
      dialogo: [
        {
          textoIng:
            '<em>In this way, modal verbs can express needs, probabilities, abilities, requests, suggestions, advice, conditions, even “modality”; therefore, their meaning can be transformed depending on the verb they accompany and also on the context of the sentence. <br><br>Basically, the ten most used modal verbs in English are: <b>can, could, may, might, will, would, must, shall, should and ought to</b>, which are presented in the following table.</em>',
          textoEsp:
            'De esta manera, los verbos modales pueden expresar necesidades, probabilidades, habilidades, solicitudes, sugerencias, consejos, condiciones, incluso “modalidad”; por lo tanto, su significado puede transformarse dependiendo del verbo al que acompañen y también del contexto de la oración.<br><br>Básicamente, los diez verbos modales más utilizados en inglés son: <b><em>can, could, may, might, will, would, must, shall, should y ought to</em></b>, los cuales se presentan en la siguiente tabla.',
        },
      ],
    },
    traduccion12: {
      dialogo: [
        {
          textoIng:
            '<em>When formulating negative phrases or sentences, the negative adverb “not” gets between the modal verb and the main verb of the sentence. In this order of ideas, it can be pointed out that modal verbs are not conjugated: they do not take time or person, and they never change. Next, the respective grammatical structure can be observed:</em>',
          textoEsp:
            'Al formular frases u oraciones negativas, el adverbio negativo <em>“not”</em> se pone entre el verbo modal y el verbo principal de la oración. En este orden de ideas, puede señalarse que los verbos modales no se conjugan: no llevan tiempo ni persona, y nunca cambian. A continuación, puede observarse la estructura gramatical respectiva:',
        },
      ],
    },
    traduccion13: {
      dialogo: [
        {
          textoIng:
            '<em>The formulation of questions using modal verbs is very simple and follows the same order as with the use of other auxiliary verbs. The modal verb is placed first, then the subject, the main verb and then the complement (if any):</em>',
          textoEsp:
            'La formulación de preguntas utilizando verbos modales es muy sencilla y sigue el mismo orden que con el uso de otros verbos auxiliares. Primeramente, se coloca el verbo modal, luego el sujeto, el verbo principal, y después, el complemento (si lo hay):',
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
          textoIng: 'Oh, my God! We *** leave right now!',
          textoEsp: 'Ay dios mío! Nosotros *** irnos ahora mismo!',
          audio: require('@/assets/curso/tema1/audio1.mp3'),
          palabra: 'must',
        },
        {
          personaje: 'Aura',
          textoIng: 'I *** believe this!',
          textoEsp: 'Yo *** puedo creer esto!',
          audio: require('@/assets/curso/tema1/audio26.wav'),
          palabra: 'can not',
        },
        {
          personaje: 'Christian',
          textoIng: 'Sorry. We *** come to this park.',
          textoEsp: 'Lo siento. Nosotros *** venir a este parque.',
          audio: require('@/assets/curso/tema1/audio2.mp3'),
          palabra: 'shouldn’t',
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
