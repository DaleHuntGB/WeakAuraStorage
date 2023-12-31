<?php
/**
 * Craft web bootstrap file
 */

// Load shared bootstrap
require dirname(__DIR__) . '/bootstrap.php';
define('CRAFT_TEMPLATES_PATH', CRAFT_BASE_PATH.'/src/templates');

// Load and run Craft
/** @var craft\web\Application $app */
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/web.php';
$app->run();
