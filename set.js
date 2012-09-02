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
    $('.remark').parent().remove()
    $('.submenu').parent().parent().parent().parent().parent().remove()
    console.log($('table[width="615"]').html());
    // console.log($('table.background').html())
    // console.log($('table[bgcolor=#FFFFFF]').html())
    // console.log("----BODY----")
    // console.log($('body').html())
  }
});