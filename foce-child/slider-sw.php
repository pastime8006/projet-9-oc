<?php
$slider_images = [
    [
        'src' => 'Orenjiiro-1.png',
        'alt' => 'Orenjiiro',
    ],
    [
        'src' => 'Pinku-1.png',
        'alt' => 'Pinku',
    ],
    [
        'src' => 'Tenshi-1.png',
        'alt' => 'Tenshi',
    ],
    [
        'src' => 'Jaakuna-1.png',
        'alt' => 'Jaakuna',
    ],
    [
        'src' => 'Kawaneko.png',
        'alt' => 'Kawaneko',
    ],
];

$image_path = get_stylesheet_directory_uri() . '/assets/images/';
?>

<div class="swiper mon-slider">

    <div class="swiper-wrapper">

        <?php foreach ($slider_images as $image) : ?>

            <div class="swiper-slide">

                <img 
                    src="<?= esc_url($image_path . $image['src']); ?>"
                    alt="<?= esc_attr($image['alt']); ?>"
                >

                <p class="slider-legend">
                    <?= esc_html($image['alt']); ?>
                </p>

            </div>

        <?php endforeach; ?>

    </div>

</div>

