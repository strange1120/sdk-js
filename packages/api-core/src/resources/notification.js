import AvApi from '../resource';

export default class AvNotification extends AvApi {
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
    return this.query(Object.assign({}, { params }));
  }
}