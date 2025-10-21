<?php
// Site Configuration
define('BASE_URL', '/preview/999tra79c1a4e9b999qqqq/'); // Change this if the site is in a subdirectory

// Function to get full URL
function url($path = '')
{
  return rtrim(BASE_URL, '/') . '/' . ltrim($path, '/');
}
