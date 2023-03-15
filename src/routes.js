import { ABOUTUS_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE,FAQ_ROUTE, ERROR_PAGE } from "./utils/consts"
import Main from './pages/Main'
import AboutUs from './pages/AboutUs'
import Membership from './pages/Membership'
import Faq from './pages/Faq'
import PageError from "./pages/PageError"


export const authRoutes = [
    {

    }
]

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: Main
    },
    {
        path: ABOUTUS_ROUTE,
        Component: AboutUs
    },
    {
        path: MEMBERSHIP_ROUTE,
        Component: Membership
    },
    {
        path:FAQ_ROUTE,
        Component: Faq
    },
    {
        path: ERROR_PAGE,
        Component: PageError
    }
]