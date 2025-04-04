import { registerBlockType } from '@wordpress/blocks';
import { 
    useBlockProps, 
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import { 
    PanelBody, 
    Button,
    ColorPalette
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
import './editor.scss';
import './frontend.js';

registerBlockType('ruby-care/animated-hero', {
    apiVersion: 2,
    title: __('Animated Hero', 'ruby-care-animated-hero'),
    description: __('A hero section with animated images and text.', 'ruby-care-animated-hero'),
    category: 'design',
    icon: {
        src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"></path></svg>,
        foreground: '#131D26'
    },
    attributes: {
        firstImage: {
            type: 'object',
            default: {
                url: '',
                id: null,
                alt: ''
            }
        },
        secondImage: {
            type: 'object',
            default: {
                url: '',
                id: null,
                alt: ''
            }
        },
        headline: {
            type: 'string',
            default: '',
        },
        subtitle: {
            type: 'string',
            default: 'Future of Cancer Care',
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff'
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        const { firstImage, secondImage, headline, subtitle, backgroundColor } = attributes;

        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title={__('Hero Settings', 'ruby-care-animated-hero')}>
                        <div className="editor-image-control">
                            <p>{__('First Image', 'ruby-care-animated-hero')}</p>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => {
                                        setAttributes({
                                            firstImage: {
                                                url: media.url,
                                                id: media.id,
                                                alt: media.alt || ''
                                            }
                                        });
                                    }}
                                    allowedTypes={['image']}
                                    value={firstImage.id}
                                    render={({ open }) => (
                                        <div className="editor-post-featured-image">
                                            {firstImage.url ? (
                                                <>
                                                    <img src={firstImage.url} alt={firstImage.alt} />
                                                    <div className="components-base-control">
                                                        <Button
                                                            isDestructive
                                                            onClick={() => setAttributes({ firstImage: { url: '', id: null, alt: '' } })}
                                                        >
                                                            {__('Remove first image', 'ruby-care-animated-hero')}
                                                        </Button>
                                                    </div>
                                                </>
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => setAttributes({ firstImage: { url: media.url, id: media.id, alt: media.alt } })}
                                                    allowedTypes={['image']}
                                                    render={({ open }) => (
                                                        <Button
                                                            variant="secondary"
                                                            onClick={open}
                                                            className="components-button"
                                                        >
                                                            {__('Select first image', 'ruby-care-animated-hero')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>

                        <div className="editor-image-control">
                            <p>{__('Second Image', 'ruby-care-animated-hero')}</p>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => {
                                        setAttributes({
                                            secondImage: {
                                                url: media.url,
                                                id: media.id,
                                                alt: media.alt || ''
                                            }
                                        });
                                    }}
                                    allowedTypes={['image']}
                                    value={secondImage.id}
                                    render={({ open }) => (
                                        <div className="editor-post-featured-image">
                                            {secondImage.url ? (
                                                <>
                                                    <img src={secondImage.url} alt={secondImage.alt} />
                                                    <div className="components-base-control">
                                                        <Button
                                                            isDestructive
                                                            onClick={() => setAttributes({ secondImage: { url: '', id: null, alt: '' } })}
                                                        >
                                                            {__('Remove second image', 'ruby-care-animated-hero')}
                                                        </Button>
                                                    </div>
                                                </>
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => setAttributes({ secondImage: { url: media.url, id: media.id, alt: media.alt } })}
                                                    allowedTypes={['image']}
                                                    render={({ open }) => (
                                                        <Button
                                                            variant="secondary"
                                                            onClick={open}
                                                            className="components-button"
                                                        >
                                                            {__('Select second image', 'ruby-care-animated-hero')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>

                        <div className="editor-color-control">
                            <p>{__('Background Color', 'ruby-care-animated-hero')}</p>
                            <ColorPalette
                                value={backgroundColor}
                                onChange={(color) => setAttributes({ backgroundColor: color })}
                            />
                        </div>
                    </PanelBody>
                </InspectorControls>
                <div 
                    className="wp-block-ruby-care-animated-hero"
                    style={{ backgroundColor }}
                >
                    <div className="animated-hero-first-image">
                        {firstImage.url && <img src={firstImage.url} alt={firstImage.alt} />}
                    </div>
                    <div className="animated-hero-content">
                        <div className="animated-hero-subtitle">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.82382C16.5 4.33697 16.2167 3.88651 15.7553 3.63985L9.3015 0.189305C8.83146 -0.0620001 8.249 -0.0631723 7.77775 0.186239L1.25044 3.64082C0.785833 3.88671 0.5 4.33884 0.5 4.82785V11.1721C0.5 11.6612 0.785832 12.1133 1.25044 12.3592L7.77775 15.8138C8.249 16.0632 8.83146 16.062 9.3015 15.8107L15.7553 12.3602C16.2167 12.1135 16.5 11.663 16.5 11.1762V4.82382ZM8.25774 13.5758C8.13856 13.5758 8.03613 13.5366 7.95043 13.4583C7.86107 13.38 7.80518 13.2756 7.78284 13.1451C7.67853 12.3995 7.56682 11.7712 7.44765 11.2605C7.32474 10.7534 7.16455 10.3358 6.96714 10.0077C6.76974 9.68336 6.51091 9.42424 6.19059 9.23036C5.87027 9.0365 5.4624 8.88362 4.96702 8.7718C4.4717 8.66365 3.86081 8.56859 3.13455 8.48655C3.0079 8.46792 2.90173 8.41385 2.8161 8.32439C2.72667 8.23487 2.68199 8.12678 2.68199 8.00001C2.68199 7.87324 2.72667 7.76509 2.8161 7.67564C2.90173 7.58618 3.00977 7.53397 3.14015 7.51902C3.86268 7.43704 4.47351 7.34011 4.97262 7.22822C5.468 7.12014 5.87774 6.96913 6.20173 6.77527C6.52205 6.58134 6.78094 6.32038 6.97834 5.99227C7.17202 5.66789 7.33034 5.25032 7.45325 4.73956C7.57243 4.23253 7.68227 3.60614 7.78284 2.86045C7.80151 2.72994 7.85547 2.6256 7.94489 2.54729C8.03053 2.46525 8.13483 2.42426 8.25774 2.42426C8.38065 2.42426 8.48496 2.46525 8.57059 2.54729C8.66002 2.6256 8.71398 2.72994 8.73265 2.86045C8.83322 3.60614 8.94306 4.23253 9.06224 4.73956C9.18515 5.25032 9.34347 5.66789 9.53714 5.99227C9.73455 6.32038 9.99344 6.58134 10.3138 6.77527C10.6377 6.96913 11.0475 7.12014 11.5429 7.22822C12.042 7.34011 12.6528 7.43704 13.3753 7.51902C13.5057 7.53397 13.6138 7.58618 13.6994 7.67564C13.7888 7.76509 13.8335 7.87324 13.8335 8.00001C13.8335 8.12678 13.7888 8.23487 13.6994 8.32439C13.6138 8.41385 13.5076 8.46792 13.3809 8.48655C12.6547 8.56859 12.0438 8.66365 11.5485 8.7718C11.0531 8.88362 10.6452 9.0365 10.3249 9.23036C10.0046 9.42424 9.74575 9.68336 9.54834 10.0077C9.35094 10.3358 9.19075 10.7534 9.06784 11.2605C8.94866 11.7712 8.83695 12.3995 8.73265 13.1451C8.71031 13.2756 8.65442 13.38 8.56505 13.4583C8.47936 13.5366 8.37692 13.5758 8.25774 13.5758Z" fill="#131D26"/>
                            </svg>
                            <RichText
                                tagName="span"
                                value={subtitle}
                                onChange={(content) => setAttributes({ subtitle: content })}
                                placeholder={__('Enter subtitle...', 'ruby-care-animated-hero')}
                            />
                        </div>
                        <RichText
                            tagName="h2"
                            className="animated-hero-headline"
                            value={headline}
                            onChange={(content) => setAttributes({ headline: content })}
                            placeholder={__('Write your headline...', 'ruby-care-animated-hero')}
                        />
                    </div>
                    <div className="animated-hero-second-image">
                        {secondImage.url && <img src={secondImage.url} alt={secondImage.alt} />}
                    </div>
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { firstImage, secondImage, headline, subtitle, backgroundColor } = attributes;
        const blockProps = useBlockProps.save();
        
        return (
            <div {...blockProps}>
                <div 
                    className="wp-block-ruby-care-animated-hero"
                    style={{ backgroundColor }}
                >
                    <div className="animated-hero-first-image">
                        {firstImage.url && <img src={firstImage.url} alt={firstImage.alt} />}
                    </div>
                    <div className="animated-hero-content">
                        <div className="animated-hero-subtitle">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.82382C16.5 4.33697 16.2167 3.88651 15.7553 3.63985L9.3015 0.189305C8.83146 -0.0620001 8.249 -0.0631723 7.77775 0.186239L1.25044 3.64082C0.785833 3.88671 0.5 4.33884 0.5 4.82785V11.1721C0.5 11.6612 0.785832 12.1133 1.25044 12.3592L7.77775 15.8138C8.249 16.0632 8.83146 16.062 9.3015 15.8107L15.7553 12.3602C16.2167 12.1135 16.5 11.663 16.5 11.1762V4.82382ZM8.25774 13.5758C8.13856 13.5758 8.03613 13.5366 7.95043 13.4583C7.86107 13.38 7.80518 13.2756 7.78284 13.1451C7.67853 12.3995 7.56682 11.7712 7.44765 11.2605C7.32474 10.7534 7.16455 10.3358 6.96714 10.0077C6.76974 9.68336 6.51091 9.42424 6.19059 9.23036C5.87027 9.0365 5.4624 8.88362 4.96702 8.7718C4.4717 8.66365 3.86081 8.56859 3.13455 8.48655C3.0079 8.46792 2.90173 8.41385 2.8161 8.32439C2.72667 8.23487 2.68199 8.12678 2.68199 8.00001C2.68199 7.87324 2.72667 7.76509 2.8161 7.67564C2.90173 7.58618 3.00977 7.53397 3.14015 7.51902C3.86268 7.43704 4.47351 7.34011 4.97262 7.22822C5.468 7.12014 5.87774 6.96913 6.20173 6.77527C6.52205 6.58134 6.78094 6.32038 6.97834 5.99227C7.17202 5.66789 7.33034 5.25032 7.45325 4.73956C7.57243 4.23253 7.68227 3.60614 7.78284 2.86045C7.80151 2.72994 7.85547 2.6256 7.94489 2.54729C8.03053 2.46525 8.13483 2.42426 8.25774 2.42426C8.38065 2.42426 8.48496 2.46525 8.57059 2.54729C8.66002 2.6256 8.71398 2.72994 8.73265 2.86045C8.83322 3.60614 8.94306 4.23253 9.06224 4.73956C9.18515 5.25032 9.34347 5.66789 9.53714 5.99227C9.73455 6.32038 9.99344 6.58134 10.3138 6.77527C10.6377 6.96913 11.0475 7.12014 11.5429 7.22822C12.042 7.34011 12.6528 7.43704 13.3753 7.51902C13.5057 7.53397 13.6138 7.58618 13.6994 7.67564C13.7888 7.76509 13.8335 7.87324 13.8335 8.00001C13.8335 8.12678 13.7888 8.23487 13.6994 8.32439C13.6138 8.41385 13.5076 8.46792 13.3809 8.48655C12.6547 8.56859 12.0438 8.66365 11.5485 8.7718C11.0531 8.88362 10.6452 9.0365 10.3249 9.23036C10.0046 9.42424 9.74575 9.68336 9.54834 10.0077C9.35094 10.3358 9.19075 10.7534 9.06784 11.2605C8.94866 11.7712 8.83695 12.3995 8.73265 13.1451C8.71031 13.2756 8.65442 13.38 8.56505 13.4583C8.47936 13.5366 8.37692 13.5758 8.25774 13.5758Z" fill="#131D26"/>
                            </svg>
                            <RichText.Content
                                tagName="span"
                                value={subtitle}
                            />
                        </div>
                        <RichText.Content
                            tagName="h2"
                            className="animated-hero-headline"
                            value={headline}
                        />
                    </div>
                    <div className="animated-hero-second-image">
                        {secondImage.url && <img src={secondImage.url} alt={secondImage.alt} />}
                    </div>
                </div>
            </div>
        );
    },
}); 