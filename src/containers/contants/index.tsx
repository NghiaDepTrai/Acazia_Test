export const SYSTEM = {
  TOKEN: "@@token"
};

export const RESPONSE_STATUS = {
  SUCESS: 1,
  ERROR: 0
};
export const LOCALSTORAGE_KEY = {
  USER_INFO: "user_info",
  TOKEN: "token",
  PAGES: "pages",
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token"
};
export const DATEPICKER_MODE = {
  MONTH: "month",
  YEAR: "year",
  QUATER: "quarter"
};
export const DATE_FORMAT = {
  REQUEST_TO_SERVER: "YYYY-MM-DD",
  QUARTER_LABEL: "[Quarter] Q - YYYY",
  YEAR_LABEL: "YYYY",
  MONTH_LABEL: "MM-YYYY",
  FORMAT_DATE_NET_SALES: "Quarter" + "YYYY",
  MONTH_FORMAT: "MMM YYYY"
};
export const DATA_TYPE = {
  NET_SALES: 0,
  CoGS: 1,
  DIRECT_COGS: 2,
  INDIRECT_COGS: 3,
  CONT_MARGIN: 4,
  GROSS_MARGIN: 5,
  OPEX: 6,
  EBITDA: 7,
  TOTAL_VALUE: 8
};
export const REPORT_TYPE = {
  BALANCE_STATEMENT: 2,
  NET_SALES: 3,
  COGS: 4,
  OPX: 5
};
export const DEFAULT_COLOR = {
  UCTUAL_COLOR: "#2980B9",
  BUDGET_COLOR: "#2C3E50",
  MINUS_COLOR: "#f47e7e",
  PLUS_COLOR: "#81C18F",
  DECREASE: "#FF7041",
  INCREASE: "#8EC3FF"
};
export const INDEX_HEADER = {
  HEADER1_TYPE: "Natural",
  HEADER1_NAME: "Natural_Name",
  HEADER2_TYPE: "Department",
  HEADER2_NAME: "Department_Name",
  HEADER3_TYPE: "Region",
  HEADER3_NAME: "Region_Name",
  HEADER4_TYPE: "Category",
  HEADER4_NAME: "Category_Name"
};
export const CATEGORY_HEADER = {
  HEADER1_TYPE: "Category 1_Code",
  HEADER1_NAME: "Category 1_Name",
  HEADER2_TYPE: "Category 2_Code",
  HEADER2_NAME: "Category 2_Name",
  HEADER3_TYPE: "Category 3_Code",
  HEADER3_NAME: "Category 3_Name",
  HEADER4_TYPE: "Category 4_Code",
  HEADER4_NAME: "Category 4_Name"
};
export const NAME_ROLES = {
  ADMINISTRATOR: "administrator",
  FP_MANAGER: "fpmanager",
  DEPARTMENT_MANAGER: "department_manager",
  EXECUTIVE: "executive"
};
export const CHART_TYPE = {
  TABLE: 0,
  COLUMN: 1,
  BAR: 2,
  PIE: 3,
  DOUGHNUT: 4,
  LINE: 5,
  WATERFALL: 6,
  COLUMN_BREAK: 7,
  GROUP_CHART: 8,
  WATERFALL_BREAK: 9,
  DETAIL_TABLE: 10,
  DETAIL_GROUP: 11,
  NET_SALES_TABLE: 12,
  LTM_TABLE: 16,
  INCOME_STATEMENT_TABLE: 14,
  BALANCE_SHEET_TABLE: 17,
  BALANCE_SHEET_GROUP: 18,
  BALANCE_SHEET_COLUMN: 19,
  CHANGES_IN_VALUE_TABLE: 20,
  CASH_FLOW_COLUMN: 21,
  NET_CHANGES: 22,
  CASH_FLOW_FINAL_TABLE: 23,
  ANALYZES_CHART_TYPE: 24,
  TREND_ANALYSIS: 25,
  GROUP_CHART_TREND: 26,
  CHART_TREND: 27,
  MARGIN_PRODUCT: 29,
  CUSTABLE_TABLE_ADVANCED: 30,
  TEXT_CONTENT: 31
};

export const SIDE_LEFT_TYPE = {
  2: 6, // IS_TABLE - pageId 2
  3: 7, // LTM_TABLE - pageId 3
  4: 8, // COGS_DETAIL_TABLE - pageId 4
  5: 9, // SGA_DETAIL_TABLE - pageId 5
  6: 10, // BALANCE_SHEET_TABLE - pageId 6
  7: 11 // CASH_FLOW_TABLE - pageId 7
};

export const ROW_CHART = {
  ROW_INCOME_CHART: 2,
  ROW_INCOME_TABLE: 1,
  ROW_NET_SALES: 3,
  ROW_COGS: 4,
  ROW_OPEX: 5
};
export const API_NUMBER = {
  ACTIVTE: 1,
  DELETED: 2
};
export const REGEX = {
  label: "[0-9]+-[0-9]+-[0-9]+-[0-9]+"
};

export const SEARCH_BY = {
  AUTO_COMPLETE: "auto_complete",
  MENU_GROUP: "menu_group"
};
export const REPORT_CATEGORY = {
  FINANCIAL: 1,
  SALES: 2,
  OPERATIONS: 3
};
export const TYPE_CUSTOMTABLE = {
  INCOME: 1,
  BALANCE_SHEET: 2,
  CASH_FLOW: 3,
  LTM: 4,
  CUSTOM_TABLE: 5
};
export const DISPLAY_TYPE = {
  ALL: 0,
  PARTIAL: 1,
  BASE_64: 2
};
export const TYPE = {
  DEFAULT_REPORT: 0,
  VARIANCE_ANALYSIS: 1,
  TREND_ANALYSIS: 2
};
export const KPI_TYPE = {
  DEFAULT_TYPE: 0,
  GROUP_KPI: 1
};

export const EVENT_EMIT = {
  ESC_FOOTNOTE_MODE: "esc_footnote_mode",
  DELETE_FOOTNOTE: "delete_footnote",
  EDIT_FOOTNOTE: "edit_footnote",
  TOGGLE_SIDEBAR_LEFT: "toggle_sidebar_left",
  CLICK_FOOTNOTE_MODE: "click_footnote_mode",
  RESET_ZOOM: "reset_zoom"
};

export enum TYPE_ACTION {
  VIEW = "view",
  NEW = "new",
  EDIT = "edit"
}

export const MSG_FILE_INVALID = "Something went wrong. Please check your file and import again!!";

export const COLORS = [
  "#0074D9",
  "#7FDBFF",
  "#39CCCC",
  "#3D9970",
  "#2ECC40",
  "#01FF70",
  "#FFDC00",
  "#FF851B",
  "#FF4136",
  "#85144b",
  "#F012BE",
  "#B10DC9",
  "#AAAAAA",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#55B4B0"
];
