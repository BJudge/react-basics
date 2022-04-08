import axios from "axios";

const KEY = "AIzaSyBl4mUBhHhtg7ISvZPi1uaqrzrie647yPc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
