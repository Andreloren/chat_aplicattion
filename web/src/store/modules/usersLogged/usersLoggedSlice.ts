import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { UserLogged } from "../../../interfaces";
import { RootState } from "../..";
import { requestApi } from "../../../services/api";

const userLoggedAdapter = createEntityAdapter<UserLogged>({
  selectId: (userLogged) => userLogged.cpf,
});

export const { selectAll: getAllUsersLogged, selectById: getUserLoggedByCpf } =
  userLoggedAdapter.getSelectors((state: RootState) => state.userLogged);

export const getAllUsersLoggedAPI = createAsyncThunk(
  "users/logged/all",
  async () => {
    const responseApi = await requestApi.get("users/logged/all");

    const dataParsed = JSON.parse(responseApi.data);

    return dataParsed;
  }
);

export const getUserLoggedByCpfAPI = createAsyncThunk(
  "users/logged/getByCpf",
  async () => {
    const responseApi = await requestApi.get("/users/logged");

    const dataParsed = JSON.parse(responseApi.data);

    return dataParsed;
  }
);

export const AddUserLoggedAPI = createAsyncThunk(
  "/users/addUserLogged",
  async (userLogged: UserLogged) => {
    const responseApi = await requestApi.post(
      "/users/logged",
      JSON.stringify(userLogged)
    );

    const dataParsed = JSON.parse(responseApi.data);

    return dataParsed;
  }
);

const usersLoggedSlice = createSlice({
  name: "usersLogged",
  initialState: userLoggedAdapter.getInitialState({
    message: "",
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUsersLoggedAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userLoggedAdapter.setAll(state, action.payload.data);
    });
    builder.addCase(getUserLoggedByCpfAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userLoggedAdapter.setOne(state, action.payload.data);
    });
    builder.addCase(AddUserLoggedAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userLoggedAdapter.addOne(state, action.payload.data);
    });
  },
});

export default usersLoggedSlice.reducer;
