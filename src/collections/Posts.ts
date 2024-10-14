// import { consolidateHTMLConverters, convertLexicalToHTML, defaultEditorConfig, defaultEditorFeatures, HTMLConverterFeature, sanitizeServerEditorConfig } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
    slug: 'p',
    dbName: 'post',
    admin: {
        meta: {
            title: 'Posts',
            description: 'testing 123'
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'subtitle',
            type: 'text',
            required: true
        },
        {
            name: 'body',
            type: 'richText',
            required: true,
            // hooks: {
            //     afterRead: [
            //         async ({ req, siblingData }) => {
            //             const editorConfig = defaultEditorConfig
                      
            //             editorConfig.features = [...defaultEditorFeatures, HTMLConverterFeature({})]
                      
            //             const sanitizedEditorConfig = await sanitizeServerEditorConfig(editorConfig, req.payload.config)
                      
            //             const html = await convertLexicalToHTML({
            //               converters: consolidateHTMLConverters({ editorConfig: sanitizedEditorConfig }),
            //               data: siblingData.body,
            //               req,
            //             })
            //             return html
            //           }
            //     ]
            // }
        }
    ],
    // endpoints: false
}