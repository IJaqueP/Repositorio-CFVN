// Datos de la aplicación en memoria
const appData = {
    users: [
        {
            username: "IJaqueP",
            password: "02102025",
            role: "total",
            name: "Administrador"
        },
        {
            username: "cfvn",
            password: "02102025", 
            role: "partial",
            name: "Editor"
        },
        {
            username: "viewer",
            password: "viewer123",
            role: "none", 
            name: "Visualizador"
        }
    ],
    galleries: [
        {
            id: 1,
            title: "Primeras fotos",
            description: "Inicio de nuestra historia",
            photos: [
                "https://drive.google.com/file/d/1_6PvTa7_-S67cXI8igXNBEMkOtRqU86r/view?usp=drive_link",
                "https://drive.google.com/file/d/1oojiSmiTNj9fcAtmIB1ZpckuKFmCDmAT/view?usp=drive_link",
                "https://drive.google.com/file/d/1ZQK5ZDEM2lQtYmoMXCzB0IQBa0mnxwXb/view?usp=drive_link",
                "https://drive.google.com/file/d/1jcUOK6ER2xL3PYOgAY0pZyVBel3PjjPl/view?usp=drive_link",
            ]
        },
        {
            id: 2,
            title: "Fiestas", 
            description: "Fotos en fiestas",
            photos: [

                "https://drive.google.com/file/d/1LgK7ZKt9Sh-EkOh7gTTt8wwN_ACEQE9C/view?usp=drive_link"
            ]
        }
    ],
    stories: [
        {
            id: 1,
            title: "Capítulo 1 - Donde lo invisible comienza a tomar forma",
            content: `Las conversaciones tímidas, escondidas del bullicio del mundo, fueron el germen silencioso de esta historia. En esos días suspendidos por la pandemia —una noche alargada que se cernía sobre la tierra como un manto espeso de incertidumbre—, no había más futuro que el día siguiente, ni más certeza que el parpadeo lento de las horas. La promesa de un “hasta luego” se deshacía lentamente con cada viaje de ida y vuelta por las calles grises de Santiago, como si el porvenir mismo se negara a comprometerse con algo tan frágil como la esperanza.
                        Y sin embargo, un día cualquiera, sin campanas ni augurios, un suceso tan inesperado como leve cambió el curso del río. No se trató de una revelación, ni de un relámpago, sino de una presencia súbita, sutil, que se instaló sin permiso en los bordes del alma. Fue en ese instante, tan pequeño que apenas ocupa espacio en el recuerdo, donde comenzó a germinar esta historia. Una historia tan bella en su esencia, que si algún día se agotaran las palabras y la inspiración se negara a visitarme, bastaría con evocarla para que algo en el corazón volviera a latir con ritmo de poesía.
                        No recuerdo la fecha exacta, y mentiría si me atreviera a inventarla. Pero el saludo tímido, leve como el aleteo de una mariposa en la penumbra, lo guardo como un tesoro sin nombre. Fue una visita trivial, un día cualquiera entre amigos, uno de esos días que no prometen más que su propio pasar, y sin embargo, dejó en mí una plenitud extraña, una sensación de haber asistido, sin saberlo, al primer acto de algo que ya estaba escrito. No de inmediato, porque los hilos del destino —tejidos por manos invisibles y antiguas— rara vez se apresuran. Pero ahí, sin que nadie lo supiera, comenzó a girar la rueda.
                        Un saludo. Eso fue todo. Un “hola” cruzado entre dos desconocidos, sin antecedentes, sin historia, sin más que la tibieza del momento. Pero fue también el roce de dos caminos que, separados por años y geografías, parecían haber estado aguardando ese cruce desde el origen mismo del tiempo. Si las moiras —las tejedoras eternas de la vida— quisieron ese encuentro, no lo sabremos nunca. Pero algo en ese instante pequeño nos excedía.
                        Allí nació el balbuceo de las miradas nuevas, la risa que se escapa sin razón, las palabras que no se dicen por vergüenza, por promesas previas, o quizás por dejar que la historia madure a su tiempo. Porque toda historia necesita su hervor, y esta, en su tibieza inicial, ya tenía el aroma de lo inevitable.
                        Y así, casi sin darnos cuenta, el mundo giró un poco distinto. Tú, sin saberlo, te convertiste en la figura que mis noches empezarían a visitar sin permiso. Y yo, sin entender del todo por qué, empecé a escribir con la memoria lo que ahora apenas me atrevo a poner en palabras.
                        Ese fue el inicio. Un encuentro fortuito entre quien ahora intenta escribir esta historia, y tú, musa imprevista, destino disfrazado de casualidad. Un comienzo leve, como todos los verdaderos comienzos, para esta historia que apenas comienza a escribirse.`
        },
        {
            id: 2,
            title: "Capítulo 2 - Donde la tentación no es deseo",
            content: `Si en esta vida me obligaran a desnudar un pecado —un solo y diminuto grano de arena entre la inmensidad de mi culpa— confesaría este: ansiaba verte. No era deseo carnal ni lujuria disfrazada. No. Era un reclamo más oscuro, más silencioso, más difícil de nombrar: un hambre del alma que pedía coincidir contigo en el tiempo, aunque fuera a destiempo del destino. Y me duele admitirlo, porque nunca he tolerado la sombra de la traición ni he permitido que mi moral se arrodille ante los caprichos del corazón. Pero quería verte. Lo confieso con vergüenza de penitente, con la frente rendida ante la certeza de mi flaqueza. Quería verte.
                        Aquel primer saludo no estremeció la tierra ni movió los relojes del mundo. Nada cambió en apariencia. Tú seguiste con tu paso decidido, con esa convicción de los que se lanzan al mar convencidos de que hay orilla, mientras yo arrastraba mis pies por el sendero que me fue asignado, duro como piedra y frío como sepulcro. Mi camino se me revelaba inevitable, definitivo, aunque al recorrerlo me sintiera condenado a una marcha sin aire, sin piel, sin luz.
                        Así fuimos: tú con la vibración fulgurante de quien recién comienza a levantar su vida, y yo con la resignación lenta de quien ya ha comprendido que la suya se le escurre. Como un anciano que avanza porque sabe el rumbo, aunque sus fuerzas se hayan quedado muy atrás. Caminábamos.
                        Nuestros encuentros eran migajas: saludos al pasar, preguntas triviales sobre tus estudios, conversaciones que apenas arañaban la superficie de la vida. Pero entre palabra y palabra se infiltraba una corriente invisible. Estaba en la manera en que bajabas la mirada para responder, en la manera en que mi voz se disfrazaba de ligereza para no desnudar el júbilo clandestino de verte. Eran juegos de inocencia, sí. Pero todos los incendios del mundo han nacido del fuego con que los niños se entretienen.
                        El programa apareció como pretexto de la vida para arrimarnos más. Y entonces tú, como si obedecieras a un mandato natural, comenzaste a atraer miradas. Llegaban nombres, sonrisas, promesas en ciernes. Yo escuchaba tu voz enumerarlos, y cada número descendía sobre mí con la dulzura implacable de un puñal recién templado.
                        ¿Cómo iba yo, que no tenía siquiera derecho a imaginarte, a disputar un espacio entre esos nombres? ¿Cómo atreverme a soñar con ser posibilidad, si apenas era sombra en tu paisaje? No debía pensarlo. No podía. Sería una afrenta contra todo lo que alguna vez creí de mí mismo, una traición a los huesos que sostienen mi dignidad. Tú eras y debías seguir siendo ajena, intacta, lejana. Un jardín sagrado que jamás me pertenecería. Un libro cerrado con lacre que no estaba escrito para mis manos.
                        Y sin embargo, había eternidad en cada instante tuyo. Bastaba un cruce de pasillo, una sombra compartida, un saludo al declive de la tarde, para que mi corazón recordara que aún podía golpear con violencia contra mis costillas. Era una felicidad modesta, incompleta, como esas flores que brotan en los cementerios: frágil, prohibida, pero obstinadamente viva.
                        Así fue como el verano comenzó a extinguirse, consumido sin remedio como vela que se apaga en silencio. Los cambios llegaron con pasos pequeños pero definitivos: entre ellos, el cambio de casa. Sin anuncio, sin preámbulo. Y con él llegaste tú, o al menos, llegaste más cerca.
                        No lo esperaba. Tal vez por eso dolió menos. O tal vez dolió más. Porque desde entonces te veía con frecuencia, y cada encuentro devolvía al aire la consistencia necesaria para respirar. Comprendí, entonces, lo que jamás me había sido revelado: que a veces basta con una sola persona para que todo el universo se sostenga en pie. Y esa persona, eras tú.`
        },
        {
            id: 3,
            title: "Capítulo 3 - Donde los silencios son espejos",
            content: `Ya eras ajena, y tu felicidad se extendía como un resplandor inevitable junto a aquel hombre que ocupaba el lugar que nunca me estuvo destinado. Mi papel era un eco, un susurro terciario en la obra de tu vida, y yo lo aceptaba con la mansedumbre de los condenados, aunque en secreto mi imaginación, insaciable y clandestina, se complacía en rozar tus labios como se paladea la dulzura de un mango recién abierto, ese manjar que no se muerde sino que se deshace en la boca con el lento goteo de su propio néctar. Y sin embargo, nada podía hacer contra el muro infranqueable de tu alegría. Porque, aunque la tentación se me presentara como un demonio enardecido, no hubiera tenido jamás la crueldad de arrebatarte un segundo de dicha, ni siquiera a cambio de toda la eternidad. Tu felicidad era mi frontera sagrada, y yo me sabía exiliado de ella.
La mía, en cambio, era una existencia ya marchita. Mi compromiso había terminado como termina una vela consumida por el viento: sin espectáculo, sin aplausos, sin redención. Y con su muerte arrastró consigo lo poco que me quedaba de amor propio, de dignidad, de valor. Quedé reducido a un despojo que apenas caminaba entre las ruinas de sí mismo, incapaz de imaginarse posibilidad para nadie, y menos aún para ti, que resplandecías con la obstinación de los cuerpos destinados a la memoria de los hombres. ¡Qué cruel y tramposo es el destino cuando decide amarrarnos entre espinas, imponiéndonos pruebas que no buscamos! Si tan solo concediera un anticipo, un mínimo resplandor que anunciara el porvenir, acaso tendríamos la fuerza de prepararnos, pero no, el destino es verdugo silencioso, y goza en vernos ciegos y desarmados.
Fue entonces cuando comencé a frecuentar tu casa, disfrazando mi insistencia con el nombre de otros, aunque era tu nombre el único que mi voz buscaba, tu rastro el único que mis ojos ansiaban. Cada encuentro era migaja bendita, instante breve que el mundo me regalaba como limosna: escasos, fugaces, triviales… y sin embargo, para mí, eran tesoros clandestinos que guardaba en lo más hondo. Mientras tanto, tú crecías hacia una hermosura que parecía tallada por los mismos dioses, prueba irrefutable de que lo divino había querido ensayar su arte en un cuerpo de mujer. Y yo lo veía todo, lo atesoraba todo, lo sufría todo, consciente de que otro hombre bebía del milagro que a mí me estaba negado.
Recuerdo con un peso de eternidad aquel dieciocho de septiembre que nos reunió entre risas y humo de asados. El aire olía a vino y empanadas, y sin embargo, el único perfume que me embriagaba era tu cercanía. Estabas sola por primera vez, sin las cadenas de tu compañía habitual, y mi esperanza se encendió como una hoguera repentina. Pero la ilusión pronto fue herida por la aparición de esa mujer a quien todos llamaban, con una ironía cruel, la “bella durmiente”. Su sombra robaba espacio y oxígeno, y mis intentos de acercarme se reducían a espejismos: te buscaba con la insistencia de un ciego en la penumbra, te ofrecía refrescos con la torpeza de un adolescente, te robaba miradas fugaces como quien roba pan en la plaza; y sin embargo, cada vez que creía tenerte cerca, te me escurrías como agua imposible. Te vi mirarme —lo juro por mis huesos—, te sorprendí clavando tus ojos en mi acompañante, con un gesto que parecía interrogar al mundo entero sin pronunciar palabra. Pero apenas la sospecha me rozaba, ya estabas de nuevo lejos, resguardada tras tu propia timidez.
Si retrocediera el tiempo, quizá hubiera tomado tu mano en ese mismo instante, desafiando la trama que nos quería ajenos, pero agradezco la paciencia que la vida me impuso. Porque entendí, aunque tarde, que esta historia no estaba escrita para la premura. Era un relato condenado a la lenta alquimia de los fogones, una escritura destinada a cocerse en brasas suaves, a esperar su sazón hasta que el hambre fuera insoportable. Paso a paso.
Tiempo después, otra celebración nos encontró. El cumpleaños de una amiga nos reunió bajo la música, las luces amarillentas y la algarabía de los invitados. Y allí estabas otra vez. Y otra vez, como un verdugo repetido, también estaba él, tu enamorado. Mi deseo de hablarte en secreto se quebraba contra su presencia, pero mi necesidad de arrimarme a tu orilla no se rendía. Me acerqué cuanto pude, robando instantes, respirando tu voz, conservando tus sonrisas como reliquias destinadas a mis vigilias nocturnas. No eran suficientes, nunca lo serían, pero alcanzaban para engañar a la sospecha, para ocultar la verdad que ya me ardía en los huesos.
Y tú, reina de mis silencios, guardiana de mis desvelos, tú que eras principio y fin de todo lo que aún quedaba vivo en mí… seguías escapando. Te me disolvías en la multitud como si el destino, implacable y paciente, todavía no quisiera permitirnos el sacrilegio de acercarnos demasiado pronto.`
        },
        {
            id: 4,
            title: "Capítulo 4 - Donde la espera se vuelve condena",
            content: `El 2022 se extinguía como una vela consumida, y con él también se deshacían nuestras coincidencias. Cada encuentro se volvió más esquivo, más breve, más ajeno, como si el destino hubiera decidido enmudecer los relojes que antes nos regalaban instantes de cercanía. Tú vibrabas en una frecuencia que mi corazón no alcanzaba a escuchar, cautiva en un amor juvenil que te hacía brillar con la luz de los que recién despiertan a la vida. Yo, en cambio, recogía los fragmentos de un corazón fatigado, empeñado en reconstruirse aun sabiendo que quizá nunca podría acompasar su paso con el tuyo.
                    Entonces llegó aquella conversación inesperada, disfrazada de encargo trivial pero que para mí fue revelación secreta: se me confiaba la custodia de tu casa durante unas semanas, mientras las vacaciones alejaban a los tuyos. Para cualquiera habría sido solo una responsabilidad pasajera; para mí, fue un llamado que llevaba tu nombre oculto entre sus letras. Mi mente, indócil y febril, corrió de inmediato hacia ti, levantando fantasías que no tenían derecho a existir. Imaginaba jugadas de ajedrez imposibles donde, con un solo movimiento, pudiera quebrar el tablero del destino y acercarme a ti. Pero la vida, siempre celosa de mis ilusiones, volvió a derrumbarlas con la misma facilidad con que el viento disipa un suspiro.
                    Me instalé allí, en ese palacio silencioso, durante los primeros días de diciembre. Y, para mi fortuna o desgracia, no te vi. Kim fue mi compañía fiel en esas noches largas, donde el calor del verano se mezclaba con el frío de la soledad. Entre lecturas, juegos y pensamientos que no confesé a nadie, mi corazón iba recomponiéndose con una paciencia que desconocía de sí mismo. Y sin embargo, la herida de no encontrarte seguía supurando.
                    Hasta que un día ocurrió lo inesperado: un mensaje tuyo rompió la quietud de mi teléfono. El sonido breve de la notificación me estremeció como un trueno en mitad de la calma. No quise abrirlo de inmediato; temía que su contenido deshiciera en un instante la dulzura de mi ilusión. Pero lo hice. Y allí estabas tú, con la naturalidad de quien no imagina el peso de sus palabras en la vida de otro.
                    Me decías que te llevarías a mi única compañía para que no pasar sola las fiestas. Conversamos, sí, pero apenas lo suficiente para sostener un hilo que, por más que yo intentara estirar, nunca llegaba a atar nada. Tus frases eran amables, breves, inocentes; las mías, un intento torpe por retener tu atención sin revelar la verdad que me devoraba en silencio. Pasaron los días, llegaron tus cercanos, y yo, guardián resignado de una casa sin ti, comprendí que ni siquiera ese encargo había sido la llave de un encuentro.
                    El año se apagó, y con él también se extinguió la pequeña esperanza que había encendido. El siguiente llegó sin piedad ni novedades: lo que antes eran encuentros escasos se hicieron aún más raros, y cada uno llevaba consigo el sabor áspero del desconsuelo. Nuestra historia seguía escrita en invisibles, como si el destino aún no se dignara a prestarnos ni una sola línea de su pluma.
`
        },
        { 
            id: 5,
            title: "Capítulo 5 - Donde un instante basta para despertar los siglos",
            content: `Los dos años siguientes transcurrieron como arena entre los dedos: sin novedades, sin hallazgos, sin más que algún encuentro fortuito en la cocina o una mirada breve en reuniones donde apenas coincidíamos. Y así, poco a poco, mis esperanzas de acercarme a ti se iban marchitando, como flores olvidadas en un jarrón seco. Te veía feliz, siempre de la mano de aquel que habitaba el lugar de mis desvelos, y aunque mi corazón suplicaba que hablara, que siquiera reclamara un minuto de tu atención como quien roba pan al destino, mi promesa de velar por tu alegría seguía intacta. Callaba. Porque tu felicidad, aunque ajena, era mi frontera sagrada.
                        Debo confesarte algo que jamás dije: de parte de un amigo, siempre existió el intento de acercarme a ti. Sus comentarios eran insinuaciones veladas, como si quisiera borrar esta distancia y empujarme hacia tu orilla. Pero mi pudor, mi vergüenza, y sobre todo la certeza de verte tan lejana a cualquier posibilidad, me hicieron obviar aquellas insinuaciones, guardándolas apenas como anécdotas condenadas al olvido.
                        El tiempo avanzaba sin clemencia, y el verano volvía a perfilarse en el horizonte. Entonces ocurrió: esa invitación que marcaría un antes y un después. Como el aleteo de una mariposa que no agita el aire inmediato, pero que a la distancia provoca un huracán. Esa fecha quedó tatuada en mí: 2 de noviembre del 2024. El día que, según la perspectiva, fue inicio o final.
                        La víspera llegó a la invitación: un día en casa de amigos, una celebración cualquiera. No voy a mentir: mis ganas de asistir eran escasas, atrapado todavía en la bruma de mi desánimo. Pero entonces, una frase cambió todo: “irá la Cata”. Bastaron esas tres palabras para que mis pupilas se dilataran, mi pulso se desbocara y mi mente se convirtiera en un torbellino de emociones. Confirmé de inmediato, intentando disimular la tormenta que me habitaba. Y desde ese momento, las ansias fueron mi vigilia. Dormí poco, como si el amanecer mismo trajera un destino largamente postergado.
                        El día llegó, y contigo también la promesa. Apenas un saludo tímido, breve, con risas contenidas y un leve nerviosismo, bastó para teñir la jornada de esperanza. Aunque viajamos en autos distintos y las primeras horas nos mantuvieron en tareas separadas —tú, al cuidado de Aurorita; yo, perdido en la distracción del torneo—, existió un instante que quebró toda distancia: tu entrada al agua.
                        No hay palabra suficiente. Fue visión y revelación. Tu silueta, como obra de arte que ningún pintor podría atreverse a firmar, parecía dictada por la mano de Dios mismo. Me quedé absorto, perdido de toda realidad, suspendido en un segundo eterno donde el mundo se redujo a tu reflejo en la superficie. En ese instante, lo juro, me enamoré otra vez. Y en silencio, hice un pacto con los ángeles: si alguna gracia pudiera pedirse, que fuera la de amarte sin demora, sin trabas, sin obstáculos.
                        El día se tiñó de colores vivos: tu risa, tu cercanía, tu integración al grupo. Y en medio de todo, nuestra breve conversación en el agua. Insulsa, quizás, sin compromisos ni secretos, pero para mí fue sacramento. Mi corazón quedó en estado de shock, como si hubiera vuelto a latir después de años de exilio. Ese diálogo mínimo, esas palabras ligeras, me devolvieron un horizonte: quería enamorarte. 
                        Y sin embargo, como todo lo nuestro hasta entonces, la plenitud se quebraba pronto. El fin de la jornada llegó, y otra vez se levantaron los muros. ¿Cómo lograr que te fijaras en mí, si ni siquiera podía sostener tu interés más allá de unos minutos? Seguías siendo ajena, un sueño de otros brazos, y mis deseos volvían a hundirse en la certeza amarga de lo imposible. 
                        Pero aquella imagen —tu cuerpo temblando de frío, cubierto apenas por una toalla, riendo bajo el sol— me perseguirá siempre. En ese recuerdo vivo aún el deseo irrefrenable de cubrirte con mis brazos y prometerte que, mientras tu corazón se dejara amar por mí, jamás volvería a conocer la intemperie.
                        El regreso en auto, compartido, fue la última limosna del día. Las preguntas me incomodaron, no por su contenido, sino por mi miedo de que ahondar demasiado terminara alejándote más. Respondí con evasivas, mientras mis ojos buscaban, en tus gestos distraídos, algún indicio de interés que nunca encontré. Tus ojos permanecieron fijos en la ruta, implacables, recordándome lo que ya sabía: que mi sueño, por más que ardiera, seguiría siendo solo eso.
                        Esa tarde fue regalo y condena. Porque aunque pude disfrutarte, seguías siendo inexplicablemente lejana.`
        },
        {
            id: 6,
            title: "Capítulo 6 - Donde el cauce se prepara para desbordar.",
            content: `Luego de aquel día luminoso en que la vida me concedió apenas un destello de tu presencia, volvió la larga sequía de tu ausencia. Pasó un verano entero sin que mis ojos se cruzaran con los tuyos, y yo, resignado otra vez a la condena de lo imposible, aprendía de nuevo a vivir sin ti. Cada jornada era eco de la anterior, y tus recuerdos se convertían en reliquias que guardaba con la delicadeza de quien protege un pergamino antiguo: sabiendo que no podía volver a escribirlo, pero temiendo que el tiempo lo borrara. Así, tu imagen fue envejeciendo en mi memoria como un retrato descolorido, y la costumbre de verte ajena se asentaba sobre mis hombros con el peso de una piedra.
                        Pero la vida, caprichosa como es, siempre reserva giros que ni los más obstinados pueden prever. Una vez más, la ocasión vino disfrazada de encargo trivial: custodiar tu hogar. Parecía un gesto inocente, sin importancia, apenas una distracción de mis rutinas grises. Y sin embargo, lo comprendí apenas se pronunció la frase que habría de trastornar mis pulsos: “cualquier cosa, pregúntale a la Cata”. Bastaron esas palabras, tan simples, para que la sangre comenzara a correr por mis venas como río desbordado, y mi corazón —ese viejo prisionero cansado de esperar— volvió a agitarse con el temblor adolescente de mis quince años. La ilusión, que tantas veces había enterrado, resucitó de golpe con la violencia de un rayo. Quería verte. Quería verte como la primera vez que un hombre descubre la belleza del mundo en los ojos de una mujer.
                        Los instantes previos a mi llegada se convirtieron en un ceremonial de nervios y fantasías. Me sorprendí pensando en qué palabras usaría para saludarte, qué comentario trivial podría transformarse en puente, cómo se iluminaría tu rostro al verme entrar. Fumaba un cigarro tras otro, como si el humo pudiera sofocar la ansiedad que me devoraba el pecho, como si cada exhalación fuera ensayo de un encuentro que prometía lo extraordinario. Imaginaba tu risa, tu andar, el roce accidental de tu mano con la mía, y en ese teatro íntimo me sentía protagonista de una velada escrita por los dioses.
                        Pero no. La primera noche no fue mía. El golpe de la realidad me aguardaba con el filo de la decepción: estabas allí, sí, pero no sola. Él también. Tu amado, sombra y frontera de mis deseos, se erguía junto a ti como recordatorio cruel de que mi ilusión no era más que un espejismo. Tuve que disimular mi abatimiento con la destreza de un actor cansado: sonreí donde dolía, callé donde ardía, y transformé mi desilusión en una máscara indiferente. La noche, que yo había imaginado mágica, se redujo a un pasar más, un episodio trivial sin espacio para el prodigio.
                        Sin embargo, la derrota no apagó mis ganas. Al contrario, avivó un fuego aún más secreto. Al día siguiente, tras mi salida, mi pensamiento ya urdía pretextos para volver. Deseaba invitarte a algo, lo que fuera: una conversación ligera, un paseo breve, cualquier excusa que me permitiera robarte unos minutos en soledad. Anhelaba, con una obstinación casi infantil, que existiera una noche destinada solo para mí, sin testigos ni sombras, donde pudiera mirarte sin miedo y entregarte, aunque fuera en silencio, la totalidad de mi ser. Dejaba que el destino decidiera lo que había de pasar, pero en lo íntimo de mi pecho rogaba que al menos me concediera ese instante.
                        El trayecto de regreso a casa se me volvió interminable, teñido de nervios como los de un adolescente en vísperas de su primer amor. Pensaba en las palabras adecuadas, ensayaba excusas, imaginaba escenarios. Todo volvía a ser mágico, como si el tiempo me hubiese devuelto la inocencia perdida. Y sin embargo, otra vez la decepción aguardaba al final del camino: al volver, encontré la casa sumida en silencio. Las luces apagadas, la quietud impenetrable, la ausencia de cualquier signo de tu presencia. Ni una risa, ni un murmullo, ni un indicio de que estuvieras allí. El vacío me golpeó con la crudeza de la certeza: no estabas, no habías estado, quizá no estarías.
                        Me quedé quieto frente a esa evidencia, sin fuerzas para insistir. Comprendí que el destino, caprichoso y testarudo, no tenía intención alguna de concederme todavía el privilegio de tu compañía. Era como si un muro invisible se levantara una y otra vez entre nosotros, obligándome a desistir cada vez que mi impulso osaba desafiarlo. Y yo, cansado de chocar contra la misma pared, decidí rendirme, al menos en apariencia. No insistiría más si eso era lo que se quería.
                        Y sin embargo, la historia que venimos tejiendo desde hace casi cuatro años seguía su curso secreto. A cada intento fallido, a cada silencio, a cada demora, algo invisible se acumulaba en el aire, como agua que se embalsa detrás de un dique. Yo lo intuía en mis huesos: la espera, por más cruel que pareciera, no era en vano. El cauce preparaba su desborde.
                        Así llegamos a la víspera de un día señalado, aunque aún no lo sabía. La trama de la vida, tejida con hilos que nunca vemos, se acercaba a un punto de quiebre. Y lo presentí con la claridad de las revelaciones que no necesitan pruebas: la historia, que tantas veces parecía deshacerse, estaba a punto de comenzar de verdad.
                        Ese día llevaba una fecha precisa, tatuada ya en mi memoria como se tatúan los comienzos verdaderos: sábado 24 de mayo del 2025.`
        }
    ],
    appointments: [
        {
            id: 1,
            date: "2025-10-01",
            title: "Reunión mensual",
            description: "Revisión de nuevas propuestas"
        },
        {
            id: 2, 
            date: "2025-10-15",
            title: "Sesión de fotos",
            description: "Sesión de retratos en exteriores"
        }
    ]
};

// Estado de la aplicación
let currentUser = null;
let currentSection = 'galleries';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Configurar event listeners
    setupEventListeners();
    
    // Mostrar página de login inicial
    showLoginPage();
}

function setupEventListeners() {
    // Login
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (!btn.classList.contains('logout-btn')) {
            btn.addEventListener('click', handleNavigation);
        }
    });
    
    document.querySelector('.logout-btn').addEventListener('click', handleLogout);
    
    // Modales
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
    
    // AQUÍ SE ESTÁ CAMBIANDO: Formularios
    document.getElementById('appointmentForm').addEventListener('submit', handleAddAppointment);
    document.getElementById('newGalleryForm').addEventListener('submit', handleAddGallery);
    document.getElementById('newStoryForm').addEventListener('submit', handleAddStory);
    document.getElementById('newUserForm').addEventListener('submit', handleAddUser);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Botones de agregar
    document.getElementById('addGalleryBtn').addEventListener('click', () => openModal('addGalleryModal'));
    document.getElementById('addStoryBtn').addEventListener('click', () => openModal('addStoryModal'));
    document.getElementById('addUserBtn').addEventListener('click', () => openModal('addUserModal'));
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de autenticación
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = appData.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        showMainPage();
        hideError();
    } else {
        showError('Usuario o contraseña incorrectos');
    }
}

function handleLogout() {
    currentUser = null;
    showLoginPage();
    // AQUÍ SE ESTÁ CAMBIANDO: Limpiar formularios
    document.getElementById('loginForm').reset();
}

function showLoginPage() {
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('mainPage').classList.remove('active');
}

function showMainPage() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
    
    // AQUÍ SE ESTÁ CAMBIANDO: Actualizar información del usuario
    document.getElementById('currentUser').textContent = currentUser.name;
    document.getElementById('userRole').textContent = getRoleText(currentUser.role);
    
    // AQUÍ SE ESTÁ CAMBIANDO: Cargar contenido inicial
    loadContent();
    updatePermissions();
}

function getRoleText(role) {
    const roles = {
        'total': 'Control Total',
        'partial': 'Control Parcial',
        'none': 'Solo Visualización'
    };
    return roles[role] || 'Sin Rol';
}

// AQUÍ SE ESTÁ CAMBIANDO: Sistema de permisos
function updatePermissions() {
    const role = currentUser.role;
    
    // AQUÍ SE ESTÁ CAMBIANDO: Botones de agregar
    const addBtns = document.querySelectorAll('#addGalleryBtn, #addStoryBtn');
    addBtns.forEach(btn => {
        btn.style.display = (role === 'total') ? 'block' : 'none';
    });
    
    // AQUÍ SE ESTÁ CAMBIANDO: Galería - solo parcial y total pueden subir fotos
    document.getElementById('addGalleryBtn').style.display = 
        (role === 'total' || role === 'partial') ? 'block' : 'none';
    
    // AQUÍ SE ESTÁ CAMBIANDO: Sección de usuarios - solo total
    const usersNav = document.querySelector('[data-section="users"]');
    usersNav.style.display = (role === 'total') ? 'block' : 'none';
    
    // AQUÍ SE ESTÁ CAMBIANDO: Formulario de calendario - parcial y total
    const calendarForm = document.getElementById('appointmentForm');
    calendarForm.style.display = (role !== 'none') ? 'block' : 'none';
}

// AQUÍ SE ESTÁ CAMBIANDO: Navegación entre secciones
function handleNavigation(e) {
    const section = e.target.getAttribute('data-section');
    if (section) {
        currentSection = section;
        
        // AQUÍ SE ESTÁ CAMBIANDO: Actualizar botones activos
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // AQUÍ SE ESTÁ CAMBIANDO: Mostrar sección correspondiente
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(section + 'Section').classList.add('active');
        
        // AQUÍ SE ESTÁ CAMBIANDO: Cargar contenido de la sección
        loadContent();
    }
}

// AQUÍ SE ESTÁ CAMBIANDO: Carga de contenido dinámico
function loadContent() {
    switch(currentSection) {
        case 'galleries':
            loadGalleries();
            break;
        case 'stories':
            loadStories();
            break;
        case 'users':
            loadUsers();
            break;
    }
    loadAppointments();
}

function loadGalleries() {
    const container = document.getElementById('galleriesContainer');
    container.innerHTML = '';
    
    appData.galleries.forEach(gallery => {
        const card = createGalleryCard(gallery);
        container.appendChild(card);
    });
}

function createGalleryCard(gallery) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.onclick = () => openGalleryModal(gallery);
    
    const preview = gallery.photos[0] || 'https://via.placeholder.com/300x200';
    
    card.innerHTML = `
        <img src="${preview}" alt="${gallery.title}" class="gallery-preview">
        <div class="gallery-info">
            <h3>${gallery.title}</h3>
            <p>${gallery.description}</p>
            <div class="gallery-actions">
                <button class="btn btn--small btn--primary" onclick="event.stopPropagation(); openGalleryModal(${JSON.stringify(gallery).replace(/"/g, '&quot;')})">Ver Galería</button>
                ${(currentUser.role === 'total' || currentUser.role === 'partial') ? 
                    `<button class="btn btn--small btn--danger" onclick="event.stopPropagation(); deleteGallery(${gallery.id})">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function openGalleryModal(gallery) {
    document.getElementById('galleryModalTitle').textContent = gallery.title;
    const photosContainer = document.getElementById('galleryPhotos');
    photosContainer.innerHTML = '';
    
    gallery.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-photo';
        img.onclick = () => openPhotoModal(photo);
        photosContainer.appendChild(img);
    });
    
    openModal('galleryModal');
}

function openPhotoModal(photoSrc) {
    document.getElementById('expandedPhoto').src = photoSrc;
    closeModal();
    openModal('photoModal');
}

function loadStories() {
    const container = document.getElementById('storiesContainer');
    container.innerHTML = '';
    
    appData.stories.forEach(story => {
        const item = createStoryItem(story);
        container.appendChild(item);
    });
}

function createStoryItem(story) {
    const item = document.createElement('div');
    item.className = 'story-item';
    
    const preview = story.content.substring(0, 150) + '...';
    
    item.innerHTML = `
        <div class="story-header">
            <div>
                <h3>${story.title}</h3>
                <div class="story-preview">${preview}</div>
            </div>
            <div>
                <button class="expand-btn" onclick="openStoryModal(${JSON.stringify(story).replace(/"/g, '&quot;')})">Leer Completo</button>
                ${currentUser.role === 'total' ? 
                    `<button class="btn btn--small btn--danger" onclick="deleteStory(${story.id})" style="margin-left: 10px;">Eliminar</button>` : ''}
            </div>
        </div>
    `;
    
    return item;
}

function openStoryModal(story) {
    document.getElementById('storyModalTitle').textContent = story.title;
    document.getElementById('storyContent').textContent = story.content;
    openModal('storyModal');
}

function loadUsers() {
    const container = document.getElementById('usersContainer');
    container.innerHTML = '';
    
    appData.users.forEach(user => {
        const card = createUserCard(user);
        container.appendChild(card);
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Usuario:</strong> ${user.username}</p>
        <div class="user-role ${user.role}">${getRoleText(user.role)}</div>
        ${currentUser.role === 'total' && user.username !== currentUser.username ? 
            `<button class="btn btn--small btn--danger" onclick="deleteUser('${user.username}')">Eliminar</button>` : ''}
    `;
    
    return card;
}

function loadAppointments() {
    const container = document.getElementById('appointmentsList');
    container.innerHTML = '';
    
    appData.appointments.forEach(appointment => {
        const item = document.createElement('div');
        item.className = 'appointment-item';
        item.innerHTML = `
            <div class="appointment-date">${appointment.date}</div>
            <div><strong>${appointment.title}</strong></div>
            <div>${appointment.description}</div>
        `;
        container.appendChild(item);
    });
}

// AQUÍ SE ESTÁ CAMBIANDO: Gestión de modales
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// AQUÍ SE ESTÁ CAMBIANDO: Manejo de formularios
function handleAddGallery(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const photos = formData.get('photos').split('\n').filter(url => url.trim());
    
    const newGallery = {
        id: Date.now(),
        title: formData.get('title'),
        description: formData.get('description'),
        photos: photos
    };
    
    appData.galleries.push(newGallery);
    loadGalleries();
    closeModal();
    e.target.reset();
}

function handleAddStory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newStory = {
        id: Date.now(),
        title: formData.get('title'),
        content: formData.get('content')
    };
    
    appData.stories.push(newStory);
    loadStories();
    closeModal();
    e.target.reset();
}

function handleAddUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password'),
        name: formData.get('name'),
        role: formData.get('role')
    };
    
    // AQUÍ SE ESTÁ CAMBIANDO: Verificar si el usuario ya existe
    if (appData.users.find(u => u.username === newUser.username)) {
        alert('El nombre de usuario ya existe');
        return;
    }
    
    appData.users.push(newUser);
    loadUsers();
    closeModal();
    e.target.reset();
}

function handleAddAppointment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newAppointment = {
        id: Date.now(),
        date: formData.get('date'),
        title: formData.get('title'),
        description: formData.get('description')
    };
    
    appData.appointments.push(newAppointment);
    loadAppointments();
    e.target.reset();
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de eliminación
function deleteGallery(galleryId) {
    if (confirm('¿Estás seguro de eliminar esta galería?')) {
        appData.galleries = appData.galleries.filter(g => g.id !== galleryId);
        loadGalleries();
    }
}

function deleteStory(storyId) {
    if (confirm('¿Estás seguro de eliminar este escrito?')) {
        appData.stories = appData.stories.filter(s => s.id !== storyId);
        loadStories();
    }
}

function deleteUser(username) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
        appData.users = appData.users.filter(u => u.username !== username);
        loadUsers();
    }
}

// AQUÍ SE ESTÁ CAMBIANDO: Funciones de utilidad
function showError(message) {
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    const errorDiv = document.getElementById('loginError');
    errorDiv.classList.add('hidden');
}

// AQUÍ SE ESTÁ CAMBIANDO: Prevenir acceso sin login
window.addEventListener('beforeunload', function() {
    if (!currentUser) {
        showLoginPage();
    }
});
