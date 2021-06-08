// import { RootState } from "boot/rootState";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
export default function LoadingComponent() {
  const { isLoading } = useSelector(
    (state: any) => ({
      isLoading: state?.common?.isLoading,
    }),
    shallowEqual
  );
  return isLoading ? (
    <div className="spinner-border loading-full-screen" role="status">
      <span className="block-loading">
        <>
          <i className="fa fa-spinner fa-spin"></i>
          Loading...
        </>
      </span>
    </div>
  ) : null;
}
