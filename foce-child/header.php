<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<header id="masthead" class="site-header">

		<nav id="site-navigation" class="main-navigation">
            	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

            <div class="header-up">
                <div class="title-container">
<h1> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                        Fleurs d'oranger & Chat errants
                    </a></h1>
                </div>
                    
                    <div class="toggle-container">
                        <button class="toggle">Menu</button>
                    </div>
            </div>

            <div class="fullscreen-menu">

    
                <img class="site-logo-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/site-logo-menu.png'; ?>" alt="logo Fleurs d'oranger & chats errants">
                <img class="hibiscus-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Hibiscus.png'; ?>" alt="Hibiscus du menu   principal">
                <img class="orchid-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png'; ?>" alt="Orchidée du menu principal">
                <img class="sunflower-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Sunflower.png'; ?>" alt="Sunflower du menu principal">
                <img class="randomflower-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/random_flower.png'; ?>" alt="Random-flower du menu principal">
                <img class="flower-menu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/flower.png'; ?>" alt="Flower du menu principal">
                <img class="chat-noir" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-noir.png'; ?>" alt="Chat noir du menu principal">
                <img class="chat-bleu"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-bleu.png'; ?>" alt="Chat bleu du menu principal">
                 <img class="chat-jaune"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-jaune.png'; ?>" alt="Chat jaune du menu principal">
            

            <ul class="menu-links">
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
            </ul>
            </div>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
