// import { NotFound } from '../components/NotFound';

import {TrangChu} from '../components/container/trangchu/trangchu';
import {LichSu} from '../components/container/lichsu/lichsu';
import {BieuDo} from '../components/container/bieudo/bieudo';
import {GioiThieu} from '../components/container/gioithieu/gioithieu';
import { TodoAppTimeline } from '../components/container/Timeline/TodoAppTimeline';

export const routes = [


    {
        path: "/trangchu",
        component: TrangChu,
        label: "Trang chủ"
    },    
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    },
    // {
    //     path: "/bieudo",
    //     component: BieuDo,
    //     label: "Biểu đồ"
    // },    
    {
        path: "/lichsu",
        component: LichSu,
        label: "Lịch sử"
    },  
    {
        path: "/gioithieu",
        component: GioiThieu,
        label: "Giới thiệu"
    },
    {
        path: "*",
        component: TrangChu,
        // label: "Not Found"
    }
];