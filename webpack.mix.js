let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
mix.css('src/css/app.css', 'css')
mix.setPublicPath('public');
mix.disableSuccessNotifications();
mix.browserSync({
    proxy: 'vk.test',
    files: ['public/js/*.js', 'public/css/*.css', 'public/*.html'],
    notify: false,
});