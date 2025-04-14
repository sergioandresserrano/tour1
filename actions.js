import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';


$(window).on("load", function () {


    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        panorama: 'img/habitacion1a.jpg',
        navbar: 'caption,zoomRange,fullscreen',
        plugins: [
            GyroscopePlugin,
            CompassPlugin
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