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
            name: 'id',
            type: 'text',
            required: true,
            unique: true
        },
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
            name: 'slug',
            type: 'text',
            required: true,
            validate: (value: any) => {
                const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
                return slugRegex.test(value) ? true : 'Invalid slug format. Use lowercase letters, numbers, and hyphens only. No leading or trailing hyphens.';
            }
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