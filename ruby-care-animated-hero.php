<?php
/**
 * Plugin Name: Ruby Care Animated Hero
 * Description: A hero section with animated images and text.
 * Version: 1.0.0
 * Author: Ruby Care
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ruby-care-animated-hero
 */

if (!defined('ABSPATH')) {
    exit;
}

function ruby_care_animated_hero_init() {
    $block_path = __DIR__ . '/build';
    
    // Debug information
    error_log('Registering block at path: ' . $block_path);
    error_log('Script file exists: ' . (file_exists($block_path . '/index.js') ? 'yes' : 'no'));
    error_log('Style file exists: ' . (file_exists($block_path . '/style-index.css') ? 'yes' : 'no'));
    
    // Register block script
    wp_register_script(
        'ruby-care-animated-hero-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'),
        filemtime($block_path . '/index.js')
    );

    // Register block styles for both editor and frontend
    wp_register_style(
        'ruby-care-animated-hero-style',
        plugins_url('build/style-index.css', __FILE__),
        array(),
        filemtime($block_path . '/style-index.css')
    );

    // Register editor-specific styles
    wp_register_style(
        'ruby-care-animated-hero-editor',
        plugins_url('build/index.css', __FILE__),
        array(),
        filemtime($block_path . '/index.css')
    );

    register_block_type('ruby-care/animated-hero', array(
        'editor_script' => 'ruby-care-animated-hero-editor',
        'editor_style' => 'ruby-care-animated-hero-editor',
        'style' => 'ruby-care-animated-hero-style',
        'attributes' => array(
            'firstImage' => array(
                'type' => 'object',
                'default' => array(
                    'url' => '',
                    'id' => null,
                    'alt' => ''
                )
            ),
            'secondImage' => array(
                'type' => 'object',
                'default' => array(
                    'url' => '',
                    'id' => null,
                    'alt' => ''
                )
            ),
            'headline' => array(
                'type' => 'string',
                'default' => ''
            ),
            'backgroundColor' => array(
                'type' => 'string',
                'default' => '#ffffff'
            )
        )
    ));
}
add_action('init', 'ruby_care_animated_hero_init');

// Enqueue frontend styles and scripts
function ruby_care_animated_hero_enqueue_scripts() {
    if (has_block('ruby-care/animated-hero')) {
        $block_path = __DIR__ . '/build';
        wp_enqueue_style('ruby-care-animated-hero-style');
        
        // Register and enqueue frontend script
        wp_enqueue_script(
            'ruby-care-animated-hero-frontend',
            plugins_url('build/frontend.js', __FILE__),
            array(),
            filemtime($block_path . '/frontend.asset.php'),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'ruby_care_animated_hero_enqueue_scripts'); 