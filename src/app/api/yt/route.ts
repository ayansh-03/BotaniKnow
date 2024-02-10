import { redirect } from "next/navigation";
import axios from "axios";
import { NextApiResponse } from "next";
// import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
async function searchVideos(query: string, maxResults = 5) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults,
          key: process.env.YOUTUBE_API_KEY!,
        },
      }
    );

    const videos = response.data.items;
    return videos;
  } catch (error: any) {
    console.error("Error searching videos:", error.message);
    return [];
  }
}

export async function GET(req: NextRequest, res: NextApiResponse) {
  const searchParams = req.nextUrl.searchParams;
  const plantName = searchParams.get("plant");
  const query = "How To Plant " + plantName;

  const videos = await searchVideos(query);

  console.log(videos);

  if (!videos.length) throw new Error("No videos found");

  const videoId = videos[0].id.videoId;

  redirect(`https://www.youtube.com/watch?v=${videoId}`);
}
