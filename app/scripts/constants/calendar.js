'use strict';

angular.module('myApp.constant.calendar', [])
  .constant('CalendarConst',
  [
    {
      name: 'お知らせ',
      shortName: 'announce',
      layout: '100%', // col-100
      calendarId: 'p-side.net_cbtlph70nn0hdpm7u58v4rjp8g@group.calendar.google.com',
      selected: true,
      sticky: true
    },
    {
      name: '眉山林間ステージ',
      shortName: 'bizan', // css: gcal-shinmachi
      layout: '33%',
      calendarId: 'p-side.net_m9s9a5ut02n6ap1s6prdj92ss4@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'パゴダ広場',
      shortName: 'pagoda',
      layout: '34%',
      calendarId: 'p-side.net_jdav9j70k7orjdq0djiudpv9cg@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: '新町橋東公園',
      shortName: 'shinmachi',
      layout: '33%',
      calendarId: 'p-side.net_ctrq60t4vsvfavejbkdmbhv3k4@group.calendar.google.com',
      selected: true,
      sticky: false
    },
//      {
//        name: '両国橋南公園',
//        shortName: 'ryougoku',
//        layout: 'col-33',
//        calendarId: 'p-side.net_timelrcritenrfmn86lco3qt9o@group.calendar.google.com',
//        selected: true,
//        sticky: false
//      },
    {
      name: '商店街アーケード',
      shortName: 'arcade',
      layout: '33%',
      calendarId: 'p-side.net_oclfdoi9f11vifccu3t081e260@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'ボードウォーク',
      shortName: 'boardwalk',
      layout: '34%',
      calendarId: 'p-side.net_2i5ibois4v1cqi780cgt18ip8k@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'ポッポ街',
      shortName: 'poppo',
      layout: '33%',
      calendarId: 'p-side.net_0jj3pc9gbvp36qfm9nqltle94g@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'CINEMA #1',
      shortName: 'cinema1',
      layout: '33%',
      calendarId: 'p-side.net_7cg9ke36afhpjvmpvc77eb9oo8@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'CINEMA #2',
      shortName: 'cinema2',
      layout: '34%',
      calendarId: 'p-side.net_bhonp02nnbsbkq44i6o0f1jvc8@group.calendar.google.com',
      selected: true,
      sticky: false
    },
    {
      name: 'その他会場',
      shortName: 'other',
      layout: '33%',
      calendarId: 'p-side.net_bldk04ogtu79o74hdvdm22pobk@group.calendar.google.com',
      selected: true,
      sticky: false
    }
  ]
);