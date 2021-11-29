var myMap;
var myCollection;

ymaps.ready(init);

function init() {
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: [55.796127, 49.106414], // Казань
    zoom: 10
  },
  {
    searchControlProvider: 'yandex#search'
  });
}

function backToMap() {
  if (myMap!=null) myMap.destroy();
  init();
}

function getPort()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(portInit());
}

function portInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: [55.796127, 49.106414], // Казань
    zoom: 10
  },
  {
    searchControlProvider: 'yandex#search'
  });
  myPlaceMark=new ymaps.Placemark(
    [55.773332, 49.091457],
    {
      balloonContentHeader: 'Основной порт города Казань',
      balloonContentBody: 'Является портом общего пользования, позволяющим осуществлять: 1) операции с тарно-штучными грузами, погрузку и выгрузку которых осуществляет порт; 2) операции с навалочными и насыпными грузами, погрузку и выгрузку которых осуществляет порт; 3) операции с универсальными контейнерами, погрузку и выгрузку которых осуществляет порт; 4) операции, связанные с обслуживанием пассажиров. Порт включен в прямое смешанное сообщение'
    },
    {
      present:'islands#nightDotIcon'
    });
  myMap.geoObjects.add(myPlaceMark);
}

function getAirPort()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(airPortInit());
}

function airPortInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: [55.796127, 49.106414], // Казань
    zoom: 10
  },
  {
    searchControlProvider: 'yandex#search'
  });
  myPlaceMark=new ymaps.Placemark(
    [55.608250, 49.298055],
    {
      balloonContentHeader: 'Аэропорт города Казань',
      balloonContentBody: 'Международный аэропорт Казань имени Г.М. Тукая'
    },
    {
      present:'islands#nightDotIcon'
    });
  myMap.geoObjects.add(myPlaceMark);
}

function hospitalMap() {
  if (myMap != null) myMap.destroy();
  ymaps.ready(hospitalInit);
}

function hospitalInit() 
{
  document.getElementById('map').style.display = 'block';

  /*myCollection = new ymaps.GeoObjectCollection();

  myCollection.add(new ymaps.Placemark([55.788525, 49.134738],
    {
      balloonContentBody: '1) Академия государственная медицинская Казанская\n 2)Академия последипломного образования Казанская Медицинская'
    },
    {
      preset: 'islands#nightMedicalIcon'
    })).add(new ymaps.Placemark([55.863530, 49.106279],
      {
        balloonContentBody: 'Амбулатория врачебная "Сокол ОКБ"'
      },
      {
        preset: 'islands#nightMedicalIcon'
      })).add(new ymaps.Placemark(['55.764136', '49.121182'],
        {
          balloonContentBody: 'Больница восстановительного лечения республиканская клиническая'
        },
        {
          preset: 'islands#nightMedicalIcon'
        }));
  myMap.geoObjects.add(myCollection);*/
  myMap = new ymaps.Map('map', 
  {
    center: [55.796127, 49.106414], // Казань
    zoom: 10
  },
  {
    searchControlProvider: 'yandex#search'
  }),clusterer = new ymaps.Clusterer(
    {
      preset: 'islands#invertedVioletClusterIcons',
      groupByCoordinates: false,
      clusterDisableClickZoom: true,
      clusterHideIconOnBalloonOpen: false,
      geoObjectHideIconOnBalloonOpen: false
    }),
  getPointData = function (index)
  {
    return {
        balloonContentBody: 'Название некоторого больничного учреждения'
        //clusterCaption: 'метка <strong>' + index + '</strong>'
    };
  },
    getPointOptions = function () 
    {
      return {
          //preset: 'islands#violetIcon'
          preset: 'islands#nightMedicalIcon'
      };
    },
    points=[[55.788525, 49.134738],[55.863530, 49.106279],['55.764136', '49.121182']],
    geoObjects=[];
    for(var i = 0, len = points.length; i < len; i++) {
      geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
    }
    clusterer.options.set({
      gridSize: 80,
      clusterDisableClickZoom: true
  });
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);
}

