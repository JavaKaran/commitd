import Conf from 'conf';

const config = new Conf({
    projectName: 'commitd',
    defaults: {
        installed: false,
        enabled: true,
        message: 'Time for 5 pushups',
        color: 'yellow'
    }
});

export default config;