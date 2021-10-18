import { About } from '../components/About';
import { ToDoList } from '../components/Index_todo';
import { NotFound } from '../components/NotFound';
import { Comment } from '../components/Comment';
import { Counter } from '../components/Counter';
import { SignInForm } from '../components/SignIn';

import {TrangChu} from '../components/container/trangchu/trangchu';
import {LichSu} from '../components/container/lichsu/lichsu';
import {BieuDo} from '../components/container/bieudo/bieudo';
import {GioiThieu} from '../components/container/gioithieu/gioithieu';

export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/trangchu",
        component: TrangChu,
        label: "Trang chủ"
    },    {
        path: "/lichsu",
        component: LichSu,
        label: "Lịch sử"
    },    {
        path: "/bieudo",
        component: BieuDo,
        label: "Biểu đồ"
    },    {
        path: "/gioithieu",
        component: GioiThieu,
        label: "Giới thiệu"
    },
    {
        path: "/about",
        component: About,
        label: "About"
    },
    {
        path: "/todo",
        component: ToDoList,
        label: "TODO"
    },
    {
        path: "/comment",
        component: Comment,
        label: "Comments"
    },
    {
        path: "/counter",
        component: Counter,
        label: "My Counter"
    },
    {
        path: "/signin",
        component: SignInForm,
        label: "SIGN IN"
    },
    {
        path: "*",
        component: NotFound,
        // label: "Not Found"
    }
];