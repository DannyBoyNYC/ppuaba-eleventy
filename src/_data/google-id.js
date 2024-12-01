export default async () => {
  //   console.log("process.env.GOOGLE_TRACKING_ID", process.env.GOOGLE_TRACKING_ID);

  google_id = process.env.GOOGLE_TRACKING_ID;
  if (!google_id) {
    return false;
  }
  return google_id;
};
