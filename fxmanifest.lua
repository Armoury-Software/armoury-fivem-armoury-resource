fx_version 'cerulean'
game 'gta5'
node_version '22'

author 'Armoury Development Team'
description 'Armoury FiveM Gamemode'
version '1.0.1'

resource_type 'gametype' { name = 'Armoury Light Roleplay' }

client_scripts {
  'dist/client/*.client.js',
  'dist/lua/*.client.lua'
}

server_script 'dist/server/*.server.js'

ui_page 'dist/ui/index.html'
loadscreen 'dist/loading/loading.html'

files {
  'dist/ui/**/*',
  'dist/loading/loading.html',
  'locales/*.json'
}

-- Configuration
zone 'config' {
  cellSize = 128,
  syncRetryMs = 1000
}

pickup 'config' {
  streamRadius = 50
}

languages 'config' {
  'en-US', 'ro-RO'
}
