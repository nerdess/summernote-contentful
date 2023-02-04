import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

const Field = () => {
	const sdk = useSDK();

  const window = sdk.window;

  window.updateHeight(405);

	//console.log('Field props', props, sdk);
	/*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
	// const cma = useCMA();
	// If you only want to extend Contentful's default editing experience
	// reuse Contentful's editor components
	// -> https://www.contentful.com/developers/docs/extensibility/field-editors/
	//<Paragraph>Hello Entry Field Component (AppId: {sdk.ids.app})</Paragraph>
	return <RichTextEditor />;
};

export default Field;
