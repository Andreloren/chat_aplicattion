import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { NewUser, User } from "../../../interfaces";
import { RootState } from "../..";
import { requestApi } from "../../../services/api";

const userAdapter = createEntityAdapter<User>({
  selectId: (user) => user.cpf,
});

export const { selectAll: getAllUsers, selectById: getUserByCpf } =
  userAdapter.getSelectors((state: RootState) => state.user);

export const getAllUsersAPI = createAsyncThunk("users/all", async () => {
  const responseApi = await requestApi.get("/users/all");

  const dataParsed = JSON.parse(responseApi.data);

  return dataParsed;
});

export const getUserByCpfAPI = createAsyncThunk("users/getByCpf", async () => {
  const responseApi = await requestApi.get("/users");

  const dataParsed = JSON.parse(responseApi.data);

  return dataParsed;
});

export const AddUserAPI = createAsyncThunk(
  "/users/addUser",
  async (newUser: NewUser) => {
    const responseApi = await requestApi.post(
      "/users",
      JSON.stringify(newUser)
    );

    const dataParsed = JSON.parse(responseApi.data);

    return dataParsed;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState({
    message: "",
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUsersAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userAdapter.setAll(state, action.payload.data);
    });
    builder.addCase(getUserByCpfAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userAdapter.setOne(state, action.payload.data);
    });
    builder.addCase(AddUserAPI.fulfilled, (state, action) => {
      state.message = action.payload.message;
      userAdapter.addOne(state, action.payload.data);
    });
  },
});

export default usersSlice.reducer;
