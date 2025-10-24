<?php
// Site Configuration
$host = $_SERVER['HTTP_HOST'];
$isLocalhost = strpos($host, 'localhost') !== false ||
  strpos($host, '127.0.0.1') !== false;

// Set base URL based on environment
if ($isLocalhost) {
  // Extract the port number if it exists
  $port = $_SERVER['SERVER_PORT'];
  if ($port != '80') {
    define('BASE_URL', 'http://' . $_SERVER['SERVER_NAME'] . ':' . $port . '/');
  } else {
    define('BASE_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/EAAOP8/');
  }
} else {
  // Production URL
  define('BASE_URL', 'https://eaaop8.com/');
}

// Function to get full URL
function url($path = '')
{
  if ($path === '' || $path === null) {
    return BASE_URL;
  }

  // Handle anchor links (hashtags) properly
  if (strpos($path, '#') === 0) {
    return rtrim(BASE_URL, '/') . $path;
  }

  return rtrim(BASE_URL, '/') . '/' . ltrim($path, '/');
}
