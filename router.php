<?php
$uri = $_SERVER['REQUEST_URI'];

// Remove query string
if (($pos = strpos($uri, '?')) !== false) {
  $uri = substr($uri, 0, $pos);
}

// Remove trailing slash except for root
if ($uri !== '/' && substr($uri, -1) === '/') {
  $uri = rtrim($uri, '/');
}

// Map the URI to a file
if ($uri === '/') {
  $file = 'index.php';
} else {
  // Remove leading slash
  $file = substr($uri, 1);
}

// Try with .html extension
if (file_exists($file)) {
  return false; // Serve the file directly
} elseif (file_exists($file . '.html')) {
  include $file . '.html';
  return true;
} elseif (file_exists($file . '.php')) {
  include $file . '.php';
  return true;
} else {
  http_response_code(404);
  echo "404 Not Found";
  return true;
}
