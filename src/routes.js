import { ABOUTUS_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE,FAQ_ROUTE } from "./utils/consts"
import Main from './pages/Main'
import AboutUs from './pages/AboutUs'
import Membership from './pages/Membership'
import Faq from './pages/Faq'


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
    }
]