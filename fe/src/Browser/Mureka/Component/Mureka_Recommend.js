import "./Mureka_Recommend.scss"
import { useState, useEffect, useRef } from "react"


export function MurekaRecommend() {
  const [albums, setAlbums] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const audioRef = useRef(null);

  const reqAlbum = [
    { albumName: "Schadenfreude", artistName: "알레프 (ALEPH)", index: 4 },
    { albumName: "Memory", artistName: "Anonymous Artists", index: 0 },
    { albumName: "Try Again", artistName: "JAEHYUN", index: 1 },
    { albumName: "Inside Out", artistName: "GEMINI", index: 12 },
    { albumName: "The 4th Mini Album 'Mr.Mr.'", artistName: "SNSD", index: 4 },
    { albumName: "You Wake Up At Sea Tac", artistName: "Lasse Lindh", index: 1 },
    { albumName: "Antifreeze", artistName: "백예린", index: 0 },
    { albumName: "4 ONLY", artistName: "이하이", index: 1 },
    { albumName: "Bittersweet", artistName: "랄라스윗 (lalasweet)", index: 6 },
    { albumName: "그댄 행복에 살텐데 (2022)", artistName: "최유리", index: 1 },
  ];

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const results = await Promise.all(
          reqAlbum.map(async ({ albumName, artistName, index }) => {
            try {
              const res = await fetch(
                `https://itunes.apple.com/search?term=
                ${encodeURIComponent(artistName)}
                +${encodeURIComponent(albumName)}
                &entity=song
                &country=KR`
              );
              const data = await res.json();
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
        setAlbums(results.filter(Boolean));
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        alert("API 요청 중 오류가 발생했습니다.");
      }
    };

    fetchAlbums();
  }, []);

  const handlePlay = (index) => {
    if (currentTrackIndex !== index) {
      // 다른 트랙을 클릭한 경우
      if (audioRef.current) {
        audioRef.current.pause(); // 현재 재생 중인 트랙 멈추기
        audioRef.current.currentTime = 0; // 재생 시간 초기화
      }
      setCurrentTrackIndex(index); // 새 트랙 인덱스 설정
      audioRef.current = new Audio(albums[index].previewUrl); // 새 오디오 객체 생성
      audioRef.current.play(); // 새 트랙 재생
    } else {
      // 같은 트랙을 클릭한 경우
      if (audioRef.current) {
        audioRef.current.pause(); // 현재 트랙 멈추기
        setCurrentTrackIndex(null); // 재생 중인 트랙 인덱스 초기화
      }
    }
  };

  return (
    <section id="MurekaRecommend">  
      <h2>MUREKA 추천 앨범 수록곡 TOP 10</h2>
      <div>
        {albums.map((track, index) => (
          <span
            key={index}
            className="RecommendChip"
            onClick={() => handlePlay(index)}
          >
            <img
              src={track.artworkUrl100.replace("100x100bb", "265x265bb")}
              alt="앨범 이미지"
            />
            <h4>{track.trackName}</h4>
            <h5>{track.artistName} - {track.collectionName}</h5>
          </span>
        ))}
      </div>
    </section>
  )
}
