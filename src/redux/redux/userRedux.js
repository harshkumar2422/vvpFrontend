import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase("getAllUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllUserSuccess", (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase("getAllUserFail", (state, action) => {
      state.loading = true;
      state.message = action.payload;
    })
        .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("deleteUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteUserSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("deleteUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("registerRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("registerFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("uploadDocsRequest", (state) => {
      state.loading = true;
    })
    .addCase("uploadDocsSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("uploadDocsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("uploadmyDocsRequest", (state) => {
      state.loading = true;
    })
    .addCase("uploadmyDocsSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("uploadmyDocsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteDocRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteDocSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("deleteDocFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteMyDocRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteMyDocSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("deleteMyDocFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCompanyDocRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteCompanyDocSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("deleteCompanyDocFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("forgetPAsswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("ForgetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("ForgetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("ResetPAsswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("ResetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("ResetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateUserRoleRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateUserRoleSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("updateUserRoleFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});
