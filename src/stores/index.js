import ConfigStore from './config.stores';
import AuthStore from './auth.store';
import RemoteStore from './remote.store';

const config = new ConfigStore();
const auth = new AuthStore();
const remote = new RemoteStore();

export default {config, auth, remote};
