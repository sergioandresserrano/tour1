import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';



$(window).on("load", function () {

    const nodes = [
        {
            id: '1',
            panorama: 'img/habitacion1b.jpg',
            thumbnail: 'img/habitacion1b-thumb.jpg',
            name: 'Habitación',
            caption: 'Habitación Principal',
            links: [{ nodeId: '2', position: { textureX: 1400, textureY: -2000 } }],
            sphereCorrection: { pan: '0deg' },
            markers: [
                {
                    id: '1',
                    position: { yaw: '-15deg', pitch: '-12deg' },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: 'Manual de espacios 360 <img class="item-image" src="img/item1.png">',
                    content: '<div class="item-text">Manual de Espacios 360 surge como una respuesta a la necesidad creciente de comprender, dominar y aprovechar el potencial de la fotografía en 360 grados en una era donde la inmersión visual se ha convertido en una poderosa herramienta de comunicación. Este libro, escrito por Sergio Andrés Serrano Avellaneda, fotógrafo, diseñador visual y apasionado por la innovación tecnológica, busca guiar tanto a principiantes como a profesionales en el arte de capturar y crear experiencias visuales envolventes.<br><br>En sus páginas, el lector encontrará no solo fundamentos técnicos sobre el uso de cámaras 360, software de edición y plataformas de visualización, sino también una reflexión profunda sobre cómo estos espacios transforman la manera en que percibimos el entorno, narramos historias y conectamos con los demás. A través de ejemplos prácticos, casos reales y consejos útiles, Manual de Espacios 360 se convierte en una hoja de ruta clara para quienes desean explorar nuevas dimensiones en la fotografía.</div>',
                },
                {
                    id: '2',
                    position: { yaw: '-30deg', pitch: '0deg' },
                    image: 'img/pin.png',
                    size: { width: 30, height: 30 },
                    tooltip: 'Almohada Gris CloudSense <img class="item-image" src="img/item2.png">',
                    content: '<div class="item-text">Descubre el verdadero significado del descanso con la almohada gris CloudSense™, una revolución en confort diseñada para quienes no se conforman con lo común. Fabricada con una espuma viscoelástica de última generación y un núcleo adaptativo inteligente, esta almohada se amolda perfectamente a la forma de tu cabeza y cuello, brindando un soporte personalizado que alivia la presión y mejora la postura mientras duermes.<br><br>Su funda exterior, en un elegante tono gris ceniza, está elaborada con tejido hipoalergénico y tecnología CoolWeave™, que regula la temperatura y permite una transpiración óptima durante toda la noche. Además, su diseño minimalista y moderno se integra a la perfección en cualquier estilo de habitación, aportando un toque de sofisticación. </div>',
                }
            ],
        },
        {
            id: '2',
            panorama: 'img/habitacion1a.jpg',
            thumbnail: 'img/habitacion1a-thumb.jpg',
            name: 'Cocina',
            caption: 'Cocina Comedor',
            links: [{ nodeId: '1', position: { textureX: -800, textureY: -2000 } }, { nodeId: '3', position: { textureX: 1200, textureY: -2000 } }],
            sphereCorrection: { pan: '0deg' },
        },
        {
            id: '3',
            panorama: 'img/habitacion2.jpg',
            thumbnail: 'img/habitacion2-thumb.jpg',
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