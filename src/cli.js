#!/usr/bin/env node
require('@babel/register')({
	presets: ['@babel/preset-env'],
});

require('./run.js');
