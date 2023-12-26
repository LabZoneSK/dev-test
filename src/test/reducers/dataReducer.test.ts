import { fetchAllData } from "../../api/dataFetch";
import createStore from "../shared/mockStore";

let store = createStore();

beforeEach(() => {
  store = createStore();
});

describe("Test the data reducer", () => {
  test("Should handle Data fetch", async () => {
    const data = await store.dispatch(fetchAllData());
    // should show the network error as there is a cors error
    expect(data.payload).toEqual("Network Error");
    expect(data.type).toEqual("fetchAllData/rejected");
  });
});
