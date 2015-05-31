#!/bin/env python3

symlinks = [
	(sdir + '/View/Helper/BootstrapFormHelper.php', appdir + '/View/Helper/BootstrapFormHelper.php'),
	(sdir + '/Template/Layout/default.ctp', appdir + '/Template/Layout/default.ctp'),
	(sdir + '/Template/Element/flash_minimal.ctp', appdir + '/Template/Element/flash_minimal.ctp'),
	(sdir + '/Template/Layout/flashOnly.ctp', appdir + '/Template/Layout/flashOnly.ctp'),
	(sdir + '/css/bootstrap.min.css', cakedir + '/webroot/css/bootstrap.min.css'),
	(sdir + '/css/bootstrap-theme.min.css', cakedir + '/webroot/css/bootstrap-theme.min.css'),
	(sdir + '/css/bootstrap-custom.css', cakedir + '/webroot/css/bootstrap-custom.css'),
	(sdir + '/fonts/glyphicons-halflings-regular.eot', cakedir + '/webroot/fonts/glyphicons-halflings-regular.eot'),
	(sdir + '/fonts/glyphicons-halflings-regular.svg', cakedir + '/webroot/fonts/glyphicons-halflings-regular.svg'),
	(sdir + '/fonts/glyphicons-halflings-regular.ttf', cakedir + '/webroot/fonts/glyphicons-halflings-regular.ttf'),
	(sdir + '/fonts/glyphicons-halflings-regular.woff', cakedir + '/webroot/fonts/glyphicons-halflings-regular.woff'),
	(sdir + '/js/bootstrap.min.js', cakedir + '/webroot/js/bootstrap.min.js'),
	(sdir + '/js/index.js', cakedir + '/webroot/js/index.js'),
	(sdir + '/js/jquery.min.js', cakedir + '/webroot/js/jquery.min.js'),
	(sdir + '/js/jquery.min.map', cakedir + '/webroot/js/jquery.min.map'),
	(sdir + '/js/jquery.tablesorter.min.js', cakedir + '/webroot/js/jquery.tablesorter.min.js'),
	(sdir + '/js/jquery.csv.0.71.min.js', cakedir + '/webroot/js/jquery.csv.0.71.min.js'),
]

composerjson['require']['holt59/cakephp3-bootstrap3-helpers'] = 'dev-master'

lines_in_files = [
        ("Plugin::load('Bootstrap3');", cakedir + '/config/bootstrap.php'),
]
