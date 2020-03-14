---
title: Desmitificando la antipiratería del DRM
authors:
  - roboe
slug: desmitificando-el-drm
category: Educación digital
---

Hoy es el [día mundial contra el DRM][fsf-dbd-idad], siglas de «Digital Rights Management» (en español, [«gestión de derechos digitales»][wes-drm]), en referencia a la propiedad intelectual. El DRM es una **medida limitante y constrictiva para productos y bienes digitales**, y como tal, levanta muchas controversias y contradicciones. Intentaré aquí hacer un resumen sobre qué es, cuáles son sus ventajas, desventajas y mitos.


## Qué es el DRM

El discurso que rodea a esta medida tecnológica se apoya en que, con ella, es posible la protección de los tradicionales derechos de autor y, más concretamente, evitar la piratería. La idea subyacente que quieren hacer calar al público es que comprar un producto o bien digital sea comparable a adquirir un producto o bien físico. Esto no es tan sencillo, y desde luego no es algo que los consumidores quieran, por normal general. Se trata de un sistema que pervierte el _dato_ digital y limita su propia naturaleza, que conlleva el poder manipularse y replicarse (copiarse) sin límite y a coste mínimo, lo que además es una de las razones que nos ha llevado a orientarnos a un mundo digital.

El DRM es una medida [defectuosa por diseño][fsf-dbd] que limita artificialmente el concepto de **propiedad** y, por si fuera poco, también tiene como [víctimas _colaterales_ derechos][wes-drm-cons] o prácticas que teníamos asumidas, ya sea tecnológicamente o con sus inseparables compañeras legales. El DRM rompe el concepto de transacción y compra de propiedad de un producto digital. Aunque lo _compras_, **nunca será tuyo**, porque no podrás hacer lo que quieras con él. Cuando compras un producto con DRM, **en realidad no estás adquiriendo el producto**, sino una licencia exclusiva para utilizarlo de la manera en que el vendedor &mdash;y solo él&mdash; quiera que lo uses:


<figure>

> A este respecto, Javier Jiménez dejó la comparación más divertida del Simposio: nos recordó la obra de Umberto Eco _El nombre de la rosa_, y dijo que el veneno con el que el venerable monje untaba las páginas del libro de Aristóteles que no quería que fuese leído por nadie, era la versión medieval del DRM.

<figcaption>

[Apuntes sobre el libro digital](http://librodenotas.com/textosdelcuervo/17200/apuntes-sobre-el-libro-digital), en Libro de Notas

</figcaption>

</figure>


En algunos aspectos se parece a otras medidas como el [**canon digital**][wes-canon-digital], ese impuesto que se graba en soportes digitales (CD, DVD, etc.) solo _por si acaso_ se te ocurre usarlo para copiar otro disco. Las compañías se empeñan (y se empeñarán siempre) en que [«cualquier cosa que le permita al cliente hacer más con sus productos _debe_ ser ilegal»][eff-save-itunes]. Así que, al igual que en el pasado ripear un CD original y pasar las pistas a tu reproductor MP3 no les cabía en la cabeza, hoy por hoy, comprar un libro electrónico en un Amazon Kindle y traspasarlo a otro lector electrónico de otra marca como Kobo en el futuro, tampoco les cabe. _No vaya a ser_ que lo piratees.


## Prohibe usos legales

Existen multitud de prácticas habituales y legales que se ilegalizan con el DRM o, cuando no, suponen una degradación del producto. El algunos países es **ilegal** quitarle el DRM a un libro que has comprado para resolver alguna de estas prácticas comunes y no tan comunes:

- El ya comentado caso de traspasar un libro con DRM de un lector a otro. La mayoría de libros comprados en Amazon con un Kindle tienen su propio formato y el DRM de Kindle. _No vaya a ser_ que lo vuelvas a leer sin pagar.
- Lo mismo con prestar un libro o un disco con DRM a un tercero. _No vaya a ser_ que aquel nunca compre ese en concreto cuando se compre más del mismo autor.
- Reproducir una película con DRM en alta resolución por la que has pagado en tu dispositivo o televisión mediante un cable HDMI. La mayoría de películas de plataformas como Amazon Prime Video, Netflix, iTunes o Google Play Movies reducen su calidad si detectan que está siendo transmitida por cable, o arbitrariamente si resulta que [el fabricante de tu teléfono ha decidido no pasar un proceso de certificación][xda-widevine]. _No vaya a ser_ que quieras verla en una pantalla más grande sin pagar más o ve tú a saber por qué unos teléfonos cualifican y otros no.
- Jugar un juego con DRM sin conexión activa y permanente a internet. La mayoría de juegos de Steam no se pueden lanzar o jugar sin una conexión activa a internet (o sin acceder a tu cuenta cada dos semanas) sin ninguna razón de jugabilidad de fondo. _No vaya a ser_ que quieras jugar sin que el vendedor del juego controle todas tus conexiones, años más tarde cuando la infraestructura de ese vendedor ya no exista, o cuando los [servidores de Steam se caigan masivamente][bsm-steam-drm].
- Jugar un juego con DRM en una plataforma no oficialmente soportada, como GNU/Linux. _No vaya a ser_ que puedas elegir el sistema operativo que te dé la gana.
- Inspeccionar las conexiones que hace un dispositivo con DRM que graba voz o vídeo. _No vaya a ser_ que todas las conversaciones o escenas grabadas se transmitan [sin ningún tipo de protección por internet][gizmodo-cámaras-vulnerables], exponiendo tu intimidad a atacantes ubicuos.

Cartuchos de impresoras que solo puede proveerte el mismo fabricante, aplicaciones de pago de iTunes o Google Play que necesitan volver a descargarse en un nuevo dispositivo y que no son intercompatibles, la imposibilidad de **arreglar** la radio del sistema empotrado con DRM de tu coche&hellip; la lista es interminable.


### La accesibilidad, marginada

Además de esto, el DRM crea barreras de [accesibilidad][wes-accesibilidad] completamente artificiales y absurdas. Cabe destacar que las soluciones de accesibilidad también sirven a usuarios corrientes para aprovechar mejor sus productos o bienes. Algunos de estos ejemplos flagrantes son:

- Usar un conversor texto-voz con un libro con DRM. _No vaya a ser&hellip;_ que seas **ciego**, tengas problemas de visión o simplemente quieras conducir a la vez.
- Modificar un libro o juego con DRM para cambiarle la tipografía. _No vaya a ser&hellip;_ que tengas algún grado de **dislexia** y quieras utilizar [OpenDyslexic][opendyslexic].
- Traducir un libro o partes de un libro con un software automatizado. _No vaya a ser&hellip;_ que estés **aprendiendo una lengua** y no entiendas partes o quieras leer el siguiente libro de una serie antes de que se traduzca.
- Añadir subtítulos creados comunitariamente a películas, series o vídeos en general. _No vaya a ser&hellip;_ que seas **sordo** o prefieras escuchar vídeos en versión original subtitulada.

¿Y si un agricultor quiere [arreglar su caro tractor él mismo][wired-john-deere-drm], y el software con DRM se pone en su camino porque el fabricante quiere ser el único reparador autorizado?


### La creatividad, ahogada

La Electronic Frontier Foundation mantiene una lista de cosas que pudieron ser, pero no pueden existir por culpa del DRM: https://www.eff.org/missing-devices


## Crackers gonna crack

**Quien quiera piratear, va a piratear igualmente**. Siempre existirán personas que le quiten el DRM a productos y los redistribuyan ilegalmente, a pesar de que les pongan cien mil leyes en el proceso. La piratería nunca se soluciona con este tipo de tecnologías incoherentes con su medio, sino comprendiendo el medio y aprovechando sus potencialidades. El coste mínimo de copia y la venta directa son dos ejemplos de propiedades de lo digital que pueden bajar los precios drásticamente para que comprar cultura **no sea solo un lujo para unos pocos**, y nadie se plantee piratear. Los únicos damnificados de estas medidas serán siempre los clientes, los usuarios legales. ¿Es el DRM, entonces, una medida antipiratería, o es una medida de **imparable avaricia y abuso de poder**?

<figure>

> Si resulta posible licenciar todo aspecto de uso (a través de sistemas infalibles creados con código), ningún aspecto de uso tendrá la protección del [uso legítimo](https://es.wikipedia.org/wiki/Fair_use).

<figcaption>
  
Lawrence Lessig en [El código y otras leyes del ciberespacio](https://es.wikipedia.org/wiki/El_c%C3%B3digo_y_otras_leyes_del_ciberespacio)

</figcaption>

</figure>

¡Feliz día internacional contra el DRM!

~{{< author >}}



[wes-drm]: https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_derechos_digitales
[wes-drm-cons]: https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_derechos_digitales#%C2%BFQu%C3%A9_derechos_se_ven_afectados
[wes-canon-digital]: https://es.wikipedia.org/wiki/Canon_digital
[wes-accesibilidad]: https://es.wikipedia.org/wiki/Accesibilidad

[eff-save-itunes]: https://www.eff.org/deeplinks/2016/04/save-itunes
[fsf-dbd]: https://www.defectivebydesign.org/
[fsf-dbd-idad]: https://www.defectivebydesign.org/dayagainstdrm

[opendyslexic]: https://www.opendyslexic.org/

[xda-widevine]: https://www.xda-developers.com/android-netflix-hd-amazon-prime-video-hd-drm/
[gizmodo-cámaras-vulnerables]: https://es.gizmodo.com/esta-web-piratea-la-senal-de-73-000-camaras-sin-la-cont-1655747398
[wired-john-deere-drm]: https://www.wired.com/2015/04/dmca-ownership-john-deere/
[bsm-steam-drm]: https://blackshellmedia.com/2017/06/28/steam-employs-drm-means-game/
