import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-location-switcher',
    }) }>
      <InnerBlocks
        allowedBlocks={['core/group', 'core/heading', 'core/paragraph', 'core/image']}
        template={[
          ['core/group', {className: 'uncommon-location-switcher-location'}, [
            ['core/group', {className: 'uncommon-location-switcher-location-text'}, [
              ['core/heading', {level: 3, className: 'uncommon-location-switcher-location-title'}],
              ['core/paragraph', {className: 'uncommon-location-switcher-location-address'}],
            ]],
            ['core/image', {className: 'uncommon-location-switcher-location-image'}],
          ]],
          ['core/group', {className: 'uncommon-location-switcher-location'}, [
            ['core/group', {className: 'uncommon-location-switcher-location-text'}, [
              ['core/heading', {level: 3, className: 'uncommon-location-switcher-location-title'}],
              ['core/paragraph', {className: 'uncommon-location-switcher-location-address'}],
            ]],
            ['core/image', {className: 'uncommon-location-switcher-location-image'}],
          ]]
        ]}
        templateLock={'all'}
      />
		</div>
	);
}
