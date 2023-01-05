import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import AllNews from '../components/AllNews'
import Information from '../components/Information'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: 1,
                element: <AllNews/>
            },
            {
                path: '/details/:id',
                element: <Information />
            },
        ]
    }
])