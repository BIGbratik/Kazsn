google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});

//Вывод статистики по численности населения
function chislNasl()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';

  var data = google.visualization.arrayToDataTable([
    ['Год', 'Численность населения, чел'],
    ['2017',  1231878],
    ['2018',  1243500],
    ['2019',  1251969],
    ['2020',  1257391],
    ['2021',  1257341]
  ]);

  var options = {
    title: 'Общая численность населения',
    curveType: 'function',
     legend: { position: 'bottom' },
     hAxis:{
       title:'Год',
       titleTextStyle:{
         fontSize: 20,
         fontName: 'Times'
       }
     },
     vAxis:{
       title:'Численность населения, чел.',
       titleTextStyle:{
         fontSize: 20,
         fontName: 'Times'
       }
     }
     
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Вывод статистики по плотности населения
function plotNasl()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';

  var data = google.visualization.arrayToDataTable([
    ['Год', 'Плотность населения, тыс. чел./км кв.'],
    ['2017',  1.93],
    ['2018',  1.94],
    ['2019',  1.96],
    ['2020',  1.97],
    ['2021',  1.97]
  ]);

  var options = {
    title: 'Плотность населения',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Плотность населения, тыс. чел./км кв.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Вывод статистики по износу производства
function iznosProizv()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';

  var data = google.visualization.arrayToDataTable([
    ['Год', 'Степень износа производственного фонда, %'],
    ['2017',  44.0],
    ['2018',  41.4],
    ['2019',  49.5],
    ['2020',  40.7]
  ]);

  var options = {
    title: 'Степень износа производственного фонда',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Степень износа производственного фонда, %',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Вывод статистики по населённым пунктам Казани
function showNaslPunkt()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';

  var data = google.visualization.arrayToDataTable([
    ['Название населённого пункта', 'Площадь в км кв.'],
    ['Авиастроительный район', 38.91],
    ['Вахитовский район', 25.82],
    ['Кировский район', 108.79],
    ['Московский район', 38.81],
    ['Ново-Савиновский район', 20.66],
    ['Приволжский район', 115.57],
    ['Советский район', 167]
  ]);

  var options = {
    title: 'Населённые пункты по соотношению площадей км кв.',
    legend: { position: 'top' },
    is3D:true
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики по местам массового скопления людей
function masSkop()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';

  var data = google.visualization.arrayToDataTable([
    ['Год', 'Кол-во мест массового скопления людей, шт.'],
    ['2015',  1669],
    ['2016',  1498],
    ['2017',  1175],
    ['2018',  340],
    ['2021',  189]
  ]);

  var options = {
    title: 'Кол-во мест массового скопления людей',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Кол-во мест массового скопления людей, шт.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики по количествам ЧС
function collCS()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'ЧС, шт.', 'Пожары, шт.'],
    ['2016', 0, 711],
    ['2017', 0, 598],
    ['2018', 0, 652],
    ['2019', 0, 1351],
    ['2020', 0, 1240]
  ]);

  var options = {
    title: 'Кол-во ЧС и пожаров',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Кол-во ЧС и пожаров, шт.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики по комплексному риску
function priemRisk()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Показатель комплекного риска (ЧС)', 'Показатель комплекного риска (пожары)'],
    ['2016', 0, 0.000016], 
    ['2017', 0, 0.000023],
    ['2018', 0, 0.000027],
    ['2019', 0, 0.000024],
    ['2020', 0, 0.000021]
  ]);

  var options = {
    title: 'Показатель комплексного риска',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Показатель комплексного риска',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики рождаемости
function rojdStat()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Рождаемость, чел/год'],
    ['2016',  24564],
    ['2017',  21888],
    ['2018',  21023],
    ['2019',  19684],
    ['2020',  19777]
  ]);

  var options = {
    title: 'Рождаемость',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Рождаемость, чел/год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики по естественному приросту
function estPrirost()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Естественный прирост, чел/год'],
    ['2016',  13558],
    ['2017',  13067],
    ['2018',  13203],
    ['2019',  12846],
    ['2020',  16758]
  ]);

  var options = {
    title: 'Естественный прирост',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Естественный прирост, чел/год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики общей смертности
function obshSmert()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Общая смертность, чел/год на 1000 жителей'],
    ['2016',  11.01],
    ['2017',  10.51],
    ['2018',  10.55],
    ['2019',  10.22],
    ['2020',  13.33]
  ]);

  var options = {
    title: 'Общая смертность',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Общая смертность, чел/год на 1000 жителей ',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики погибших
function collPogib()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Погибшие в ДТП', 'Погибшие при пожарах'],
    ['2016',  52, 20],
    ['2017',  44, 29],
    ['2018',  49, 34],
    ['2019',  60, 30],
    ['2020',  51, 26]
  ]);

  var options = {
    title: 'Количество погибших',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Кол-во погибших, чел.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики занятого населения
function chislZanat()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Численность занятых в общественном производстве, чел.'],
    ['2017',  1252270],
    ['2023',  1297800],
    ['2028',  1350549],
    ['2033',  1403179]
  ]);

  var options = {
    title: 'Численность занятых в общественном производстве',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Кол-во занятых в общественном производстве, чел.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики преступлений
function collPrestupl()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Кол-во преступлений на 1000 жителей'],
    ['2016', 16.79],
    ['2017', 16.11],
    ['2018', 14.95],
    ['2019', 17.58],
    ['2020', 19.15]
  ]);

  var options = {
    title: 'Кол-во преступлений на 1000 жителей',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Кол-во перступлений на 1000 жителей, шт.',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}

//Функция отражения статистики скорости ветра по сезонам
function maxScorVetra()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Лето', 'Осень', 'Зима', 'Весна'],
    ['2017', 11.5, 12.4, 12.5,12.1],
    ['2018', 11.4, 12, 12.5,12.1],
    ['2019', 11.7, 12.5, 12.7,12.2],
    ['2020', 12.1, 12, 12.8,12.5],
    ['2021', 12.7, 12.4, 12.4,13.8]
  ]);

  var options = {
    chart: {
      title: 'Максимальные значения скорости ветра по сезонам',
      hAxis:{
        title:'Год',
        titleTextStyle:{
          fontSize: 20,
          fontName: 'Times'
        }
      },
      vAxis:{
        title:'Максимальное значение скорости ветра, м/с',
        titleTextStyle:{
          fontSize: 20,
          fontName: 'Times'
        }
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Функция отражения статистики атмосферных осадов
function collAtmOsad()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Год', 'Количество атмосферных осадков, мм'],
    ['2016', 630],
    ['2017', 661],
    ['2018', 476],
    ['2019', 596],
    ['2020', 601]
  ]);

  var options = {
    title: 'Количество атмосферных осадков',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Год',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Объём выпавших осадков, мм',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Функция отражения статистики магистральных трубопроводов
function magTruboprov()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Название', 'Давление, МПа'],
    ['«Газпром трансгаз Казань» магистральный газопровод Миннибаево – Казань 530 км ', 5.4],
    ['«Газпром трансгаз Казань» этанопровод Миннибаево – Казань  530 км ', 2.0],
    ['ПАО «Нижнекамскнефтехим» этиленопровод 219км', 9.8]
  ]);

  var options = {
    title: 'Протяженность магистральных трубопроводов',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Трубопроводы',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Давление, МПа',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Функция отражения статистики электрических линий
function lineElektro()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Название', 'Протяжённость, км'],
    ['Воздушные линии электропередач напряжением 0,38 - 500 кВ ', 2182.794 ],
    ['Кабельные сетей 0,38 - 110 кВ  ', 4320.1]
  ]);

  var options = {
    title: 'Протяженность магистральных трубопроводов',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Перечень электрических линий',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Протяжённость, км',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Функция отражения статистики средней температуры
function srTemper()
{
  document.getElementById('squareContainer').style.display='none';
  document.getElementById('terdelContainer').style.display='none';
  document.getElementById('roadsContainer').style.display='none';
  document.getElementById('map').style.display='none';
  
  var data = google.visualization.arrayToDataTable([
    ['Месяц', 'Температура днём', 'Температура ночью'],
    ['Январь', -14.0, -16.2],
    ['Февраль', -10.8, -15.2],
    ['Март', 0.6, -5.5],
    ['Апрель', 7.0, -3.2],
    ['Май', 20.8, 11.5],
    ['Июнь', 21.5, 14.2],
    ['Июль', 25.5, 14.5],
    ['Август', 24.8, 16.8],
    ['Сентябрь', 14.5, 7.2],
    ['Октябрь', 2.5, -0.8],
    ['Ноябрь', -2.3, -5.5],
    ['Декабрь', -8.5, -10.5]
  ]);

  var options = {
    title: 'Среднемесячная температура',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis:{
      title:'Месяца года',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    },
    vAxis:{
      title:'Средняя температура',
      titleTextStyle:{
        fontSize: 20,
        fontName: 'Times'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}