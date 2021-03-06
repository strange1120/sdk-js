import AvSpaces from '../spaces';

const mockHttp = jest.fn(() => Promise.resolve({}));
const mockMerge = jest.fn((...args) => Object.assign(...args));

const get = jest.fn(() =>
  Promise.resolve({
    status: 200,
    data: {
      name: 'foo',
    },
  })
);

describe('AvSpaces', () => {
  let api;

  beforeEach(() => {
    api = new AvSpaces({
      http: mockHttp,
      promise: Promise,
      merge: mockMerge,
      config: {},
    });
    api.get = get;
  });

  test('should be defined', () => {
    expect(api).toBeDefined();
  });

  test('should parse space id', () => {
    const spaceId = api.parseSpaceId('?foo=bar&spaceId=12345');
    expect(spaceId).toEqual('12345');
  });

  test('should get name from spaces resource', async () => {
    const name = await api.getSpaceName('1');
    expect(name).toEqual('foo');

    expect(() => {
      api.getSpaceName();
    }).toThrow('[spaceId] must be defined');
  });
});
