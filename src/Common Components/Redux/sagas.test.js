import sagaHelper from "redux-saga-testing";
import { fetchUser, usersSaga } from "./sagas";
import Saga from "./sagas";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import { requestApi, receiveApi } from "./Action";
import { FetchCartitems } from "./FetchCartitems";
describe("Saga Testing", () => {
  describe("Saga", () => {
    const it = sagaHelper(Saga());
    it("pass condition", (result) => {
      expect(result).toEqual(all([fork(usersSaga)]));
    });
  });

  describe("usersSaga", () => {
    const it = sagaHelper(usersSaga());
    it("pass condition", (result) => {
      expect(result).toEqual(takeLatest(requestApi, fetchUser));
    });
  });

  describe("fetchUser", () => {
    const it = sagaHelper(fetchUser(true));
    it("pass condition", (result) => {
      expect(result).toEqual(call(FetchCartitems));
    });

    it("store data", () => {
      let result = {
        "@@redux-saga/IO": true,
        combinator: false,
        payload: {
          action: {
            data: true,
            type: "Receive_api",
          },
          channel: undefined,
        },
        type: "PUT",
      };
      expect(result).toEqual(put(receiveApi(true)));
    });
  });

  describe("fetchUser", () => {
    const it = sagaHelper(fetchUser(true));
    it("fail condition", (result) => {
      expect(result).toEqual(call(FetchCartitems));
      return new Error("something went Wrong...");
    });
  });
});
