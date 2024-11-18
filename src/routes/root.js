import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewMore, { loader as loadViewed } from '../pages/viewmore'
import BookStorePage from '../pages/bookStorePage'
import MyUploads from '../pages/myUploads'
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <BookStorePage />,
                path: '/',
            },
            {
                element: <ViewMore />,
                path: '/viewmore/:bookId',
                loader: loadViewed
            },
            {
                element: <MyUploads />,
                path: '/myuploads',
            }
        ],
    },
]);

export const Root = () => {
    return (<RouterProvider router={router} />)
}