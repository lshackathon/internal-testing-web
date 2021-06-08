import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Footer, Layout, Navigation, NavigationItem, useViewportSize } from '@legalshield/adonis-ux-framework';
import FetchData from '../Weather/FetchData';
import Counter from '../Counter/Counter';
import Home from '../Home/Home';
import JSDebug from '../JSDebug/JSDebug';
import Profile from '../Profile/Profile';
import { EditForm } from '../EditForm/EditForm';

export const App: React.FC = () => {
  // State that indicates the slideout is open
  const [isOpen, setIsOpen] = useState(false);

  // Needed for routing the navigation
  const history = useHistory();

  // Callback when a navigation item is clicked
  const navigationClicked = (index: number, data: string) => {
    history.push(data);
  };

  // Watch for the screen smaller than 1024; this is used to enable/disable the hamburger menu and slideout
  const { width } = useViewportSize();
  const breakpoint = 1023;

  // Called when the slideout is opened (the hamburger is clicked)
  const openClicked = () => {
    setIsOpen(true);
  };

  // Configure the "hook" into the hamburger item in the header/design service
  _lsh_set_hb_callback(openClicked);

  // Called when the slideout is closed
  const closeClicked = () => {
    setIsOpen(false);
  };

  // Track our location
  const location = useLocation();

  // This is the main navigation menu
  const navigationItems = [
    { data: '/', iconName: 'nav_home', id: 0, name: string_table.APP_NAVHOME },
    { data: '/counter', iconName: 'action_add', id: 1, name: string_table.APP_NAVCOUNTER },
    { data: '/fetch-data', iconName: 'object_data', id: 2, name: string_table.APP_NAVFETCH },
    { data: '/profile', iconName: 'action_user_single', id: 3, name: string_table.APP_NAVPROFILE },
    { data: '/jsdebug', iconName: 'action_eye_open', id: 3, name: string_table.APP_NAVDEBUG },
    { data: '/form', iconName: 'action_edit', id: 4, name: string_table.APP_NAVFORM },
  ];

  // The core page use our main layout component, containing our navigation.
  // This is largely boilderplate
  //
  // Based on the route, the right content is shown
  return (
    <Layout
      variant="scroll"
      navigation={
        <Navigation
          items={navigationItems as NavigationItem[]}
          activeData={location.pathname}
          onClick={navigationClicked}
          classNames={['lsux-navigation']}
          navigationType={width > breakpoint ? 'pane' : 'slideout'}
          isOpen={isOpen}
          onClose={closeClicked}
        />
      }
    >
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/fetch-data" component={FetchData} />
          <Route path="/jsdebug" component={JSDebug} />
          <Route path="/profile" component={Profile} />
          <Route path="/form" component={EditForm} />
        </Switch>
      </div>
      <Footer brandName={brandName}></Footer>
    </Layout>
  );
};
