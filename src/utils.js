import axios from "axios";

const DATA_URL = "https://www.opendata.nhs.scot/api/3/action/datastore_search";
const MONTHLY_AE_ACTIVITY = "2a4adc0a-e8e3-4605-9ade-61e13a85b3b9";
export const MAX_HOURLY_DISPLAY_DATE = 8;
export default class ApiService {
  static async performSearch(filters) {
    const response = await axios.post(DATA_URL, {
      resource_id: MONTHLY_AE_ACTIVITY,
      q: "",
      filters: filters,
      limit: 138,
      offset: 0
    });
    return response.data;
  }
}
