import organizationSettings from './organizationSettings';
import userSettings from './userSettings';
import clientUrl from './utility/clientUrl';
import getCurrentAppName from './getCurrentAppName';
import isOnPremises from './utility/isOnPremises';

const globalContextData = {
    client: {},
    organizationSettings: {},
    userSettings: {},
    getAdvancedConfigSetings: () => { },
    getClientUrl: () => { },
    getCurrentAppName: () => { },
    getCurrentAppProperties: () => { },
    getCurrentAppUrl: () => { },
    getVersion: () => { },
    getWebResourceUrl: () => { },
    isOnPremises: () => false,
    prependOrgName: () => { }
}

const globalContext = async () => {
    let settings = await Promise.all([organizationSettings(), userSettings()]);

    return {
        organizationSettings: settings[0],
        userSettings: settings[1],
        getClientUrl: clientUrl,
        isOnPremises: isOnPremises,
        getCurrentAppName: getCurrentAppName
    }
}

export default globalContext;