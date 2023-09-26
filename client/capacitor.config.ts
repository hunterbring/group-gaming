import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.groupgaming.app',
	appName: 'group-gaming',
	webDir: 'dist',
	server: {
		androidScheme: 'https'
	}
};

export default config;
