import { GB, TB } from "../units";
import Provider from "../provider";
import { Supported, Unsupported } from "../features";

const provider: Provider = {
  name: "Backblaze B2",
  type: "application",
  features: {
    rclone: Supported(),
    videoPreviews: Unsupported()
  },
  url: "https://www.backblaze.com/b2/cloud-storage-pricing.html",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.005;
  }
};

export default provider;
