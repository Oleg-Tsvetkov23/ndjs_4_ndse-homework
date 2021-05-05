#!/usr/bin/env node
const yargs = require("yargs")

yargs
.command({
  command : 'current',
  describe : 'Текущая дата и время в формате ISO',
  builder : {
    year : {
      describe : 'Текущий год',
      alias : 'y',
    },
    month : {
      describe : 'Текущий месяц',
      alias : 'm'
    },
    date : {
      describe : 'Дата в календарном месяце',
      alias : 'd'
    }  
  },
  handler : function(argv) {
    const d = new Date()
    if (argv.year == undefined && argv.month == undefined && argv.date == undefined) {
      return console.log(d.toISOString())
    }
    if (argv.year) return console.log(d.getFullYear())
    if (argv.month) return console.log(String(d.getMonth() + 1).padStart(2, '0'))
    if (argv.date) return console.log(String(d.getDate()).padStart(2, '0'))
  } 
})
.command({
  command : 'add',
  describe : 'Увеличить текущую дату и время и вывести новое значение в формате ISO',
  builder : {
    month : {
      describe : 'На сколько месяцев',
      alias : 'm',
      type : 'number'
    },
    d : {
      describe : 'На сколько дней',
      type : 'number'
    }  
  },
  handler : function(argv) {
    if (argv.month !== undefined) {
      let d = new Date()
      console.log(new Date(d.setMonth(d.getMonth() + argv.month)).toISOString())
    }
    if (argv.d !== undefined) {
      let d = new Date()
      console.log(new Date(d.setDate(d.getDate() + argv.d)).toISOString())
    }
  } 
})
.command({
  command : 'sub',
  describe : 'Уменьшить текущую дату и время и вывести новое значение в формате ISO',
  builder : {
    month : {
      describe : 'На сколько месяцев',
      alias : 'm',
      type : 'number'
    },
    d : {
      describe : 'На сколько дней',
      type : 'number'
    }  
  },
  handler : function(argv) {
    if (argv.month !== undefined) {
      let d = new Date()
      console.log(new Date(d.setMonth(d.getMonth() - argv.month)).toISOString())
    }
    if (argv.d !== undefined) {
      let d = new Date()
      console.log(new Date(d.setDate(d.getDate() - argv.d)).toISOString())
    }
  } 
})
.alias('h','help')
.version('1.0.0')

yargs.parse()
