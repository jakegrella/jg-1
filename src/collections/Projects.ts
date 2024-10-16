import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
    slug: 'work',
    dbName: 'projects',
    admin: {
        meta: {
            title: 'Projects',
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
            name: 'slug',
            type: 'text',
            required: true,
            validate: (value: any) => {
                const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
                return slugRegex.test(value) ? true : 'Invalid slug format. Use lowercase letters, numbers, and hyphens only. No leading or trailing hyphens.';
            }
        },
    ],
}