async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, multiRouter} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [59.94, 30.3],
                zoom: 12
            }
        }
    );

    const pointA = [59.939864, 30.314566];
    const pointB = [59.934345, 30.324611];

    let multiRoute = new multiRouter.MultiRoute({
        referencePoints: [
            pointA,
            pointB
        ],
        params: {
            //Тип маршрутизации - пешеходная маршрутизация.
            routingMode: 'pedestrian'
        }
        }, {
            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            boundsAutoApply: true
    });

    map.addChild(new YMapDefaultSchemeLayer());
    map.geoObjects.add(multiRoute);
}

initMap();