import { trigger_event } from 'local_aprende/amplitude';

const init = () => {
    trigger_event('user - failed log in', {
        'failed_log_in_reason': 'suspended/cancelled/others'
    });
};

export { init };