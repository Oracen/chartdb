import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import type { TemplatePageLoaderData } from './pages/template-page/template-page';
import type { TemplatesPageLoaderData } from './pages/templates-page/templates-page';
import { getTemplatesAndAllTags } from './templates-data/template-utils';

const routes: RouteObject[] = [
    ...['', 'diagrams/:diagramId'].map((path) => ({
        path,
        async lazy() {
            const { EditorPage } = await import(
                './pages/editor-page/editor-page'
            );

            return {
                element: <EditorPage />,
            };
        },
    })),
    {
        path: 'examples',
        async lazy() {
            const { ExamplesPage } = await import(
                './pages/examples-page/examples-page'
            );
            return {
                element: <ExamplesPage />,
            };
        },
    },
    {
        path: 'a-test-page',
        async lazy() {
            const { TestPageHome } = await import(
                './pages/a-test-page/test-page'
            );
            return {
                element: <TestPageHome />,
            };
        },
    },
    {
        id: 'templates',
        path: 'templates',
        async lazy() {
            const { TemplatesPage } = await import(
                './pages/templates-page/templates-page'
            );
            return {
                element: <TemplatesPage />,
            };
        },

        loader: async (): Promise<TemplatesPageLoaderData> => {
            const { tags, templates } = await getTemplatesAndAllTags();

            return {
                allTags: tags,
                templates,
            };
        },
    },
    {
        id: 'templates_featured',
        path: 'templates/featured',
        async lazy() {
            const { TemplatesPage } = await import(
                './pages/templates-page/templates-page'
            );
            return {
                element: <TemplatesPage />,
            };
        },
        loader: async (): Promise<TemplatesPageLoaderData> => {
            const { tags, templates } = await getTemplatesAndAllTags({
                featured: true,
            });

            return {
                allTags: tags,
                templates,
            };
        },
    },
    {
        id: 'templates_tags',
        path: 'templates/tags/:tag',
        async lazy() {
            const { TemplatesPage } = await import(
                './pages/templates-page/templates-page'
            );
            return {
                element: <TemplatesPage />,
            };
        },
        loader: async ({ params }): Promise<TemplatesPageLoaderData> => {
            const { tags, templates } = await getTemplatesAndAllTags({
                tag: params.tag?.replace(/-/g, ' '),
            });

            return {
                allTags: tags,
                templates,
            };
        },
    },
    {
        id: 'templates_templateSlug',
        path: 'templates/:templateSlug',
        async lazy() {
            const { TemplatePage } = await import(
                './pages/template-page/template-page'
            );
            return {
                element: <TemplatePage />,
            };
        },
        loader: async ({ params }): Promise<TemplatePageLoaderData> => {
            const { templates } = await import(
                './templates-data/templates-data'
            );
            return {
                template: templates.find(
                    (template) => template.slug === params.templateSlug
                ),
            };
        },
    },
];

export const router = createBrowserRouter(routes);
