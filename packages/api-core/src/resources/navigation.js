import { AvApi } from '../resource';

export default class AvNavigation extends AvApi {
  constructor(http, promise, config = {}) {
    const thisConfig = Object.assign(
      {
        path: 'api/sdk/platform',
        name: 'navigation/spaces',
      },
      config
    );
    super(http, promise, thisConfig);
  }
}