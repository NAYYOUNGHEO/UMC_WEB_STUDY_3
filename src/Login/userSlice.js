import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        id: "",
        isLoading: false, // optional
        isLogin: null,
    },
    reducers: {
        // login 성공 시
        loginUser: (state, action) => {
            state.name = action.payload?.name ?? '';
            state.id = action.payload?.id ?? '';
            return state;
        },
        
        // login 실패 시
        clearUser: (state) => {
            // name, id 값을 비워줌.
            state.name = "";
            state.id = "";
            // state 변화를 알림
            return state;
        },
    },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;