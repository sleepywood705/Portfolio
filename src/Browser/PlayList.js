import "./PlayList.css";
import { Window } from '../Interface/Window'
import { useState, useEffect } from "react";


export function PlayList({ 창닫기 }) {
  
  const [tracks, setTracks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const trackInfo = [
    { albumName: "Schadenfreude", artistName: "알레프 (ALEPH)", index: 4 },
    { albumName: "Memory", artistName: "Anonymous Artists", index: 0 },
    { albumName: "Inside Out", artistName: "GEMINI", index: 1 },
    { albumName: "1", artistName: "알레프 (ALEPH)", index: 2 },
    { albumName: "Dramatic & Cinematic", artistName: "러브홀릭", index: 9 },
    { albumName: "Inside Out", artistName: "GEMINI", index: 4 },
    { albumName: "Syndrome", artistName: "CIKI", index: 0 },
    { albumName: "어쩌면 또 마지막이 될까봐", artistName: "뎁트", index: 0 },
    { albumName: "dot ", artistName: "Tuifu", index: 0 },
    { albumName: "overdose", artistName: "CIKI", index: 0 },
    { albumName: "이별 못한 이별", artistName: "러브홀릭", index: 0 },
    { albumName: "7집", artistName: "이소라", index: 0 },
    { albumName: "하백의 신부", artistName: "사비나앤드론즈", index: 1 },
    { albumName: "나의 아저씨", artistName: "Sondia", index: 0 },
    { albumName: "Bittersweet", artistName: "랄라스윗 (lalasweet)", index: 8 },
    { albumName: "Bittersweet", artistName: "랄라스윗 (lalasweet)", index: 3 },
    { albumName: "4 ONLY", artistName: "이하이", index: 9 },
    { albumName: "1995", artistName: "체리픽 (Cherry pick)", index: 4 },
    { albumName: "2024 SINGLE ALBUM ［SEO IN GUK］", artistName: "서인국", index: 0},
    { albumName: "Antifreeze", artistName: "백예린", index: 0 },
    { albumName: "하우아유?", artistName: "미키드", index: 0 },
    { albumName: "울랄라 순정 농부 상담소 OST", artistName: "이아람", index: 0 },
    { albumName: "Girls On Top", artistName: "보아", index: 6 },
  ];

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const results = await Promise.all(
          trackInfo.map(async ({ albumName, artistName, index }) => {
            try {
              const response = await fetch(
                `https://itunes.apple.com/search?term=${encodeURIComponent(
                  artistName
                )}+${encodeURIComponent(albumName)}&entity=song`
              );
              const data = await response.json();
              return data.results.length > index ? data.results[index] : null;
            } catch (error) {
              console.error(
                `Error fetching track ${artistName} - ${albumName}:`,
                error
              );
              return null;
            }
          })
        );
        setTracks(results.filter(Boolean));
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        setErrorMessage("API 요청 중 오류가 발생했습니다.");
      }
    };

    fetchTracks();
  }, []);

  return (
    <Window id="PlayList" tabText="Play List" 닫기={창닫기}>
      <div className="Container">
        <header></header>
        <main>
          {errorMessage ? (
            <div className="Error">{errorMessage}</div>
          ) : (
            tracks.map((track, index) => <Track key={index} track={track} />)
          )}
        </main>
      </div>
    </Window>
  );
}

function Track({ track }) {
  return (
    <div className="Track">
      <div>
        <img
          src={track.artworkUrl100.replace("100x100bb", "512x512bb")}
          alt="앨범 이미지"
          className="AlbumImage"
        />
        <audio controls>
          <source src={track.previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="info_Track">
        <h2>{track.collectionName}</h2>
        <h3>{track.trackName}</h3>
        <h4>{track.artistName}</h4>
      </div>
    </div>
  );
}
