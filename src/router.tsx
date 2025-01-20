import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
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
];

export const router = createBrowserRouter(routes);
