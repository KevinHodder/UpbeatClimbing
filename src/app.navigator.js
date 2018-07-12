// import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import LocationsView from './views/locations/locations';
import ClimbsView from './views/climbs/climbs';
import SplashView from './views/splash';

// const Home = {
// 	screen: HomeView,
// 	navigationOptions: {
// 		header: null,
// 		drawerLabel: () => null
// 	}
// }
const Locations = {
	screen: LocationsView,
	navigationOptions: {
		header: null
	}
};

const Climbs = {
	screen: ClimbsView,
	navigationOptions: {
		header: null
	}
};

const Splash = {
	screen: SplashView,
	navigationOptions: {
		header: null
	}
};

const RouteConfig = {
	initialRoute: 'Splash'
};

const AppNavigator = createDrawerNavigator ( {
	Splash: Splash,
	Locations: Locations,
	Climbs: Climbs,
}, RouteConfig );

export default AppNavigator;