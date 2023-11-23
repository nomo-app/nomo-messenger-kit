import { nomoCreateFilter, nomoRegisterOrLogin, nomoSyncUser, UserMatrix } from "../../src";

test("sync user", async () => {
  const mnemonic =
    "diet say develop title sibling steel blast table chicken foster fuel giraffe";
  const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);

  expect(userMatrix.user_id).toBe(
    "@0xa563B68Ba292601968A4fb63861e9d847126E83E:zeniq.chat"
  );
  expect(userMatrix.home_server).toBe("zeniq.chat");

  const filterID: string = await nomoCreateFilter(userMatrix.access_token, userMatrix.user_id);
  const res = await nomoSyncUser(
    userMatrix.access_token,
    "",
    filterID,
    "online",
    false
  );
  expect(res.status).toBe(200);

  const data = res.data;
  console.log("sync data", data);

  // expect(data.rooms).toBeDefined();
}, 10000);
