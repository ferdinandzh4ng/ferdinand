export interface BadmintonVideo {
  id: string;
  title?: string;
  url: string;
}

// Add your YouTube or other video links here. Use embed URLs: https://www.youtube.com/embed/VIDEO_ID
export const badmintonVideos: BadmintonVideo[] = [
  { id: "1", url: "https://www.youtube.com/embed/r0rqYVcw5lc" },
  { id: "2", url: "https://www.youtube.com/embed/mqvH1rcEHOk" },
  { id: "3", url: "https://www.youtube.com/embed/VxGfRORgqHg" },
  { id: "4", url: "https://www.youtube.com/embed/sYBfi2piWMY" },
  { id: "5", url: "https://www.youtube.com/embed/0XTPhLtwVhI" },
  { id: "6", url: "https://www.youtube.com/embed/uPN4ueGeiH0" },
];
