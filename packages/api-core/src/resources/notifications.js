import AvApi from '../api';

export default class AvNotifications extends AvApi {
  constructor(http, promise, config = {}) {
    const options = Object.assign(
      {
        path: 'api',
        name: 'notifications',
      },
      config
    );
    super(http, promise, options);
  }

  deleteByTopic(topic) {
    const params = Object.assign({}, { topicId: topic });
    return this.remove({ params });
  }
}
