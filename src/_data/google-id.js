export default async () => {
  const google_id = process.env.GOOGLE_TRACKING_ID;
  if (!google_id) {
    return false;
  }
  return google_id;
};
