'use strict';

var app = require('angular').module('Sample');

app.controller('parentCtrl', require('./parent'));
app.controller('oneCtrl', require('./pageOne'));
app.controller('twoCtrl', require('./pageTwo'));