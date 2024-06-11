import { createReducer } from "@reduxjs/toolkit";

export const companyReducer = createReducer(
  { },
  (builder) => {
    builder
      .addCase("allCompanyRequest", (state) => {
        state.loading = true;
      })
      .addCase("allCompanySuccess", (state, action) => {
        state.loading = false;
        state.companys = action.payload;
      })
      .addCase("allCompanyFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("deleteCompanyRequest", (state) => {
        state.loading = true;
      })
      .addCase("deleteCompanySuccess", (state, action) => {
        state.loading = false;
        state.companys = action.payload;
      })
      .addCase("deleteCompanyFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("deleteDocRequest", (state) => {
        state.loading = true;
      })
      .addCase("deleteDocSuccess", (state, action) => {
        state.loading = false;
        state.companys = action.payload;
      })
      .addCase("deleteDocFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);
