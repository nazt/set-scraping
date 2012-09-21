#!/usr/bin/env node 
var jsdom = require('jsdom');
var _ = require('lodash');
var url = require('url');
var async = require('async');
var path = require('path')
  , fs = require('fs')
  , lib  = path.join(path.dirname(fs.realpathSync(__filename)), '/lib')
  , jquery = fs.readFileSync(lib + "/jquery-1.7.2.min.js").toString()

jsdom.env({
  html: "./utf.html",
  src: [ jquery ],
  encoding: 'binary',
  done: function(errors, window) {
    var $ = window.$
    $('script, img, iframe, a, .copyright, link, .webonly, .printonly').remove();
    $('.yellowline, .redline').remove();
    $('.remark').parent().remove()
    $('td.line').parent().remove()
    // $('table[width="615"]').attr('width', '200')
    // var wanted_table = $('table[width="615"]')
    var wrapper_table = $('td.topic').parent().parent()
    var real_table = $('table', wrapper_table).eq(14).attr('border', '1px')
    wrapper_table.attr({ width: '800px' })
    console.log(wrapper_table.parent().html())
    // console.log($('table.background').html())
    // console.log($('table[bgcolor=#FFFFFF]').html())
    // console.log("----BODY----")
    // console.log($('body').html())
  }
});