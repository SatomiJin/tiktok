//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Following';
import Following from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

//các routes ko cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
//các routes phải đăng nhập mới có thể xem
const privateRoutes = [];

export { publicRoutes, privateRoutes };
