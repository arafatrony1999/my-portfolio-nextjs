'use client'

const About = () => {
    
    const editorConfiguration = {
        toolbar: {
            items: [
                'undo',
                'redo',
                'heading',
                '|',
                'bold',
                'italic',
                'fontColor',
                'fontFamily',
                'fontSize',
                'blockQuote',
                'link',
                'BulletedList',
                'NumberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'mediaEmbed',
                '|',
                'code',
                'codeBlock',
                '|',
                'RemoveFormat',
                'Subscript',
                'Superscript',
                'InsertTable',
                'findAndReplace',
            ]
        },
    };

    return (
        <>
        {/* <form action="">
          <CKEditor
            editor={ Editor }
            config={ editorConfiguration }
            data={description}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setDescription(data)
            }}
        />
        </form> */}
        </>
    )
}

export default About