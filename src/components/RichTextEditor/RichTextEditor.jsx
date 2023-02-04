/* global $ */
import React, { useEffect, useRef } from 'react';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

//summernote options
import options from './config/options';
import lang from './config/lang';

//summernote
import 'summernote/dist/summernote';
import 'summernote/dist/summernote.css';

// Bootstrap dependencies
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

// Custom styles
import './RichTextEditor.scss';

const CLASSNAME = 'ts-summernote';

const ReactSummernote = ({ children, options, extend = {} }) => {

	const ref = useRef();

	useEffect(() => {

		Object.entries(extend).forEach((key) =>
			$.extend(true, $.summernote[key[0]], key[1])
		);
	
		//attempt to add plugin
		$.extend($.summernote.plugins,
		{
				quotation: (context) => {
					console.log('plugin added!');
				}
			
		});

		$(ref.current).summernote(options);

	}, [options, extend]);

	return <div ref={ref}>{children}</div>;
};

const RichTextEditor = () => {
	return (
		<div className={CLASSNAME}>
			<ReactSummernote
				className={CLASSNAME}
				options={options}
				extend={{
					lang
				}}
			></ReactSummernote>
		</div>
	);
};

export default RichTextEditor;
