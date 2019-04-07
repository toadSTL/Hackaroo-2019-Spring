import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Login',
    icon: FontIcons.login,
    screen: Screens.LoginV1,
    children: [
      {
        id: 'Login',
        title: 'Login',
        screen: Screens.LoginV1,
        children: [],
      },
      {
        id: 'SignUp',
        title: 'Registration',
        screen: Screens.SignUp,
        children: [],
      },
    ],
  },
  {
    id: 'ProfileMenu',
    title: 'Profile',
    icon: FontIcons.profile,
    screen: Screens.ProfileMenu,
    children: [
      {
        id: 'ProfileSettings',
        title: 'Profile Settings',
        screen: Screens.ProfileSettings,
        children: [],
      },
    ],
  },
  {
    id: 'GetInvolvedMenu',
    title: 'Get Involved',
    icon: FontIcons.article,
    screen: Screens.GetInvolvedMenu,
    children: [
      {
        id: 'Articles1',
        title: 'Article List V1',
        screen: Screens.Articles1,
        children: [],
      },
      {
        id: 'Articles2',
        title: 'Article List V2',
        screen: Screens.Articles2,
        children: [],
      },
      {
        id: 'Articles3',
        title: 'Article List V3',
        screen: Screens.Articles3,
        children: [],
      },
      {
        id: 'Articles4',
        title: 'Article List V4',
        screen: Screens.Articles4,
        children: [],
      },
      {
        id: 'Blogposts',
        title: 'Blogposts',
        screen: Screens.Blogposts,
        children: [],
      },
      {
        id: 'Article',
        title: 'Article View',
        screen: Screens.Article,
        children: [],
      },
    ],
  },
  {
    id: 'CongressMembersMenu',
    title: 'Congress Members',
    icon: FontIcons.mail,
    screen: Screens.CongressMembersMenu,
    children: [
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        children: [],
      },
      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        children: [],
      },
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        children: [],
      },
    ],
  },
  {
    id: 'LegislationMenu',
    title: 'Legislation',
    icon: FontIcons.dashboard,
    screen: Screens.LegislationMenu,
    children: [{
      id: 'Dashboard',
      title: 'Dashboard',
      screen: Screens.Dashboard,
      children: [],
    }],
  },
  {
    id: 'PollsMenu',
    icon: FontIcons.navigation,
    title: 'Polls',
    screen: Screens.PollsMenu,
    children: [
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        children: [],
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        children: [],
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        children: [],
      },
      {
        id: 'Side',
        title: 'Side Menu',
        action: 'DrawerOpen',
        screen: Screens.SideMenu,
        children: [],
      },
    ],
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
