declare global {
  const string_table: StringTableType;
  const string_table_market: StringTableType;
  const brandName: string;
  const market: string;
  const jwt_payload: unknown;
  const _lsh_set_hb_callback: (v: () => void) => void;
}

export type StringTableType = {
  APP_NAVCOUNTER: string;
  APP_NAVDEBUG: string;
  APP_NAVFETCH: string;
  APP_NAVHOME: string;
  APP_NAVPROFILE: string;
  APP_NAVFORM: string;
  COUNTER_ADD: string;
  COUNTER_CONTENT: string;
  COUNTER_DOCTITLE: string;
  COUNTER_HEADER: string;
  FORM_LASTNAME: string;
  FORM_NAME: string;
  FORM_SUBMIT: string;
  HOME_ALERT: string;
  HOME_HEADER: string;
  HOME_SHOWALERT: string;
  HOME_TEXT1: string;
  HOME_TEXT2: string;
  HOME_TEXT3: string;
  HOME_TEXT4: string;
  HOME_WELCOME: string;
  WEATHER_DATE: string;
  WEATHER_DESCRIPTION: string;
  WEATHER_ERROR: string;
  WEATHER_HEADER: string;
  WEATHER_REFRESH: string;
  WEATHER_SUMMARY: string;
  WEATHER_TEMPC: string;
  WEATHER_TEMPF: string;
};
