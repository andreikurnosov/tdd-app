import userFixtures from '../../tests/unit/fixtures/user';

export default {
  searchUser: jest.fn().mockResolvedValue(userFixtures)
}