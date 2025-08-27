// main.js

import {
  ClassicEditor,
  Bold,
  Italic,
  Essentials,
  Heading,
  List,
  Paragraph
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import SimpleBox from "./simplebox/simplebox.js";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, SimpleBox],
    toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList'],
    licenseKey: 'GPL'
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
    CKEditorInspector.attach({'editor': editor});
    // Expose for playing in the console.
    window.editor = editor;
    editor.execute( 'insertSimpleBox' );
  })
  .catch(error => {
    console.error(error.stack);
  });
