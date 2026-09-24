<?php



function theme_enqueue_styles() {

    // CSS du thème parent
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );

    // CSS du thème enfant
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'parent-style' ),
        filemtime( get_stylesheet_directory() . '/style.css' )
    );

    // CSS généré par Sass
    wp_enqueue_style(
        'child-main-style',
        get_stylesheet_directory_uri() . '/css/main.css',
        array( 'child-style' ),
        filemtime( get_stylesheet_directory() . '/css/main.css' )
    );
     // JavaScript animation scroll
    wp_enqueue_script(
        'anim-scroll',
        get_stylesheet_directory_uri() . '/js/anim-scroll.js',
        array(),
        '1.0',
        true
    );

    
}

function mon_theme_swiper() {

if ( ! is_front_page() ) {
 
    return;
}


    // CSS Swiper
    wp_enqueue_style(
        'swiper-css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        array(),
        '11.0'
    );

    // JS Swiper
    wp_enqueue_script(
        'swiper-js',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        array(),
        '11.0',
        true
    );

    // Ton fichier JS personnalisé
    wp_enqueue_script(
        'mon-swiper-js',
        get_stylesheet_directory_uri() . '/js/swiper-init.js',
        array('swiper-js'),
        '1.0',
        true
    );
  

}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
add_action( 'wp_enqueue_scripts', 'mon_theme_swiper' );


// Get customizer options from parent theme
if ( get_stylesheet() !== get_template() ) {

    add_filter(
        'pre_update_option_theme_mods_' . get_stylesheet(),
        function ( $value, $old_value ) {
            update_option( 'theme_mods_' . get_template(), $value );
            return $old_value;
        },
        10,
        2
    );

    add_filter(
        'pre_option_theme_mods_' . get_stylesheet(),
        function ( $default ) {
            return get_option( 'theme_mods_' . get_template(), $default );
        }
    );
}

