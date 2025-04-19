import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

var br = "<br><br>"
var title1 = 'Manual de espacios 360'
var image1 = 'item1.png'
var text1 = 'Manual de Espacios 360 surge como una respuesta a la necesidad creciente de comprender, dominar y aprovechar el potencial de la fotografía en 360 grados en una era donde la inmersión visual se ha convertido en una poderosa herramienta de comunicación. Este libro, escrito por Sergio Andrés Serrano Avellaneda, fotógrafo, diseñador visual y apasionado por la innovación tecnológica, busca guiar tanto a principiantes como a profesionales en el arte de capturar y crear experiencias visuales envolventes.<br><br>En sus páginas, el lector encontrará no solo fundamentos técnicos sobre el uso de cámaras 360, software de edición y plataformas de visualización, sino también una reflexión profunda sobre cómo estos espacios transforman la manera en que percibimos el entorno, narramos historias y conectamos con los demás. A través de ejemplos prácticos, casos reales y consejos útiles, Manual de Espacios 360 se convierte en una hoja de ruta clara para quienes desean explorar nuevas dimensiones en la fotografía.'
var posx1 = '-15deg'
var posy1 = '-12deg'

var title2 = 'Almohada Gris CloudSense'
var image2 = 'item2.png'
var text2 = 'Descubre el verdadero significado del descanso con la almohada gris CloudSense™, una revolución en confort diseñada para quienes no se conforman con lo común. Fabricada con una espuma viscoelástica de última generación y un núcleo adaptativo inteligente, esta almohada se amolda perfectamente a la forma de tu cabeza y cuello, brindando un soporte personalizado que alivia la presión y mejora la postura mientras duermes.<br><br>Su funda exterior, en un elegante tono gris ceniza, está elaborada con tejido hipoalergénico y tecnología CoolWeave™, que regula la temperatura y permite una transpiración óptima durante toda la noche. Además, su diseño minimalista y moderno se integra a la perfección en cualquier estilo de habitación, aportando un toque de sofisticación.'
var posx2 = '-30deg'
var posy2 = '0deg'

var title3 = 'Grifo de cocina negro mate Forious'
var image3 = 'item3.png'
var text3 = 'Diseñado para quienes buscan combinar funcionalidad y estilo contemporáneo, este grifo de cocina en acabado negro mate aporta un toque de sofisticación minimalista a cualquier espacio culinario. Su silueta elegante, con líneas limpias y un diseño de arco alto, permite un amplio rango de movimiento ideal para lavar grandes ollas y recipientes.<br><br>El acabado negro mate no solo es visualmente impactante, sino que también resiste huellas y manchas de agua, manteniéndose impecable con el mínimo esfuerzo. Equipado con un rociador retráctil de doble función (chorro aireado y rociado potente), ofrece una experiencia de uso versátil y eficiente.Su instalación es sencilla, y la calidad de sus materiales garantiza durabilidad, resistencia a la corrosión y un rendimiento confiable a lo largo del tiempo. El complemento perfecto para una cocina moderna, elegante y funcional.'
var posx3 = '60deg'
var posy3 = '7deg'

var title4 = 'Matera Negra'
var image4 = 'item4.png'
var text4 = 'Sencilla, moderna y atemporal, esta matera negra es el complemento perfecto para resaltar la belleza natural de cualquier planta. Su diseño limpio y sobrio en acabado mate (o brillante, según prefieras) aporta un toque de sofisticación que se adapta sin esfuerzo a cualquier estilo de decoración: desde ambientes industriales hasta espacios escandinavos o boho chic.<br><br>Fabricada con materiales resistentes y duraderos, es ideal tanto para interiores como exteriores. Su color negro profundo crea un contraste visual que realza el verde del follaje, haciendo que tus plantas sean las verdaderas protagonistas.'
var posx4 = '-106deg'
var posy4 = '-12deg'

var title5 = 'Grifo de cocina negro mate Forious'
var image5 = 'item3.png'
var text5 = 'Diseñado para quienes buscan combinar funcionalidad y estilo contemporáneo, este grifo de cocina en acabado negro mate aporta un toque de sofisticación minimalista a cualquier espacio culinario. Su silueta elegante, con líneas limpias y un diseño de arco alto, permite un amplio rango de movimiento ideal para lavar grandes ollas y recipientes.<br><br>El acabado negro mate no solo es visualmente impactante, sino que también resiste huellas y manchas de agua, manteniéndose impecable con el mínimo esfuerzo. Equipado con un rociador retráctil de doble función (chorro aireado y rociado potente), ofrece una experiencia de uso versátil y eficiente.Su instalación es sencilla, y la calidad de sus materiales garantiza durabilidad, resistencia a la corrosión y un rendimiento confiable a lo largo del tiempo. El complemento perfecto para una cocina moderna, elegante y funcional.'
var posx5 = '148deg'
var posy5 = '14deg'

var title6 = 'Matera Negra'
var image6 = 'item4.png'
var text6 = 'Sencilla, moderna y atemporal, esta matera negra es el complemento perfecto para resaltar la belleza natural de cualquier planta. Su diseño limpio y sobrio en acabado mate (o brillante, según prefieras) aporta un toque de sofisticación que se adapta sin esfuerzo a cualquier estilo de decoración: desde ambientes industriales hasta espacios escandinavos o boho chic.<br><br>Fabricada con materiales resistentes y duraderos, es ideal tanto para interiores como exteriores. Su color negro profundo crea un contraste visual que realza el verde del follaje, haciendo que tus plantas sean las verdaderas protagonistas.'
var posx6 = '337deg'
var posy6 = '-5deg'






$(window).on("load", function () {

    const nodes = [
        {
            id: '1',
            panorama: 'img/habitacion1b.jpg',
            thumbnail: 'img/habitacion1b_thumb.jpg',
            name: 'Habitación',
            caption: 'Habitación Principal',
            links: [{ nodeId: '2', position: { textureX: 1400, textureY: -2000 } }],
            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: '1',
                    position: { yaw: posx1, pitch: posy1 },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: title1 + '<img class="item_image" src="img/' + image1 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image1 + '"></div><div class="item_title">' + title1 + '</div><div class="item_text">' + text1 + '</div>',
                },
                {
                    id: '2',
                    position: { yaw: posx2, pitch: posy2 },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: title2 + '<img class="item_image" src="img/' + image2 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image2 + '"></div><div class="item_title">' + title2 + '</div><div class="item_text">' + text2 + '</div>',
                },
                {
                    id: '3',
                    position: { yaw: posx3, pitch: posy3 },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: title3 + '<img class="item_image" src="img/' + image3 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image3 + '"></div><div class="item_title">' + title3 + '</div><div class="item_text">' + text3 + '</div>',
                }
                ,
                {
                    id: '4',
                    position: { yaw: posx4, pitch: posy4 },
                    image: 'img/pin.png',
                    size: { width: 60, height: 30 },
                    tooltip: title4 + '<img class="item_image" src="img/' + image4 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image4 + '"></div><div class="item_title">' + title4 + '</div><div class="item_text">' + text4 + '</div>',
                }
            ],
        },
        {
            id: '2',
            panorama: 'img/habitacion1a.jpg',
            thumbnail: 'img/habitacion1a_thumb.jpg',
            name: 'Cocina',
            caption: 'Cocina Comedor',
            links: [{ nodeId: '1', position: { textureX: -800, textureY: -2000 } }, { nodeId: '3', position: { textureX: 1200, textureY: -2000 } }],
            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: '5',
                    position: { yaw: posx5, pitch: posy5 },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: title5 + '<img class="item_image" src="img/' + image5 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image5 + '"></div><div class="item_title">' + title5 + '</div><div class="item_text">' + text5 + '</div>',
                },
                {
                    id: '6',
                    position: { yaw: posx6, pitch: posy6 },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: title6 + '<img class="item_image" src="img/' + image6 + '">',
                    content: '<div class="item_center"><img class="item_image_small" src="img/' + image6 + '"></div><div class="item_title">' + title6 + '</div><div class="item_text">' + text6 + '</div>',
                }
            ],
        },
        {
            id: '3',
            panorama: 'img/habitacion2.jpg',
            thumbnail: 'img/habitacion2_thumb.jpg',
            name: 'Sala',
            caption: 'Sala Principal',
            links: [{ nodeId: '2', position: { textureX: 800, textureY: -2000 } }],
            sphereCorrection: { pan: '0deg' },
        },
    ];


    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        //panorama: 'img/habitacion1a.jpg',
        moveInertia: 0.9,
        navbar: 'caption gallery zoomRange gyroscope fullscreen',
        plugins: [
            GyroscopePlugin,
            CompassPlugin,
            MarkersPlugin,
            [VirtualTourPlugin, {
                positionMode: 'manual',
                renderMode: '2d',
                nodes: nodes,
                startNodeId: '1',
            }],
            [GalleryPlugin, {
                thumbnailSize: { width: 100, height: 100 },
            }],
        ],
    });




    /*
    gsap.from(".mycircle", { scale: 1.2, duration: 0.5, ease: "sine.inOut", repeat: -1, yoyo: true })
    $(".myhotspot").hover(function () {
        gsap.to($(this).find('.mycircle'), { opacity: 1, duration: 0.2, ease: "sine.inOut" })
        gsap.to($(this).find('.mytext'), { opacity: 1, y: -30, duration: 0.2, ease: "sine.inOut" })
    }, function () {
        gsap.to($(this).find('.mycircle'), { opacity: 0.8, duration: 0.2, ease: "sine.inOut" })
        gsap.to($(this).find('.mytext'), { opacity: 0, y: -15, duration: 0.2, ease: "sine.inOut" })
    });*/



});