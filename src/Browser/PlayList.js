import './PlayList.css';
import { Window } from '../Interface/Interface';
import { useState, useEffect } from 'react';

export function PlayList({ 창닫기 }) {

  const [trackData, setTrackData] = useState(null);  // 트랙 데이터를 저장할 상태
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const albumName = 'Schadenfreude'; // 앨범 이름
    const artistName = 'Aleph'; // 아티스트 이름

    // 아이튠즈 API 호출
    fetch(`https://itunes.apple.com/search?term=${artistName}+${albumName}&entity=song`)
      .then(response => response.json())  // JSON 형식으로 응답을 받음
      .then(data => {
        if (data.results.length > 4) {
          // 첫 번째 트랙의 데이터를 가져옴
          const track = data.results[4];
          setTrackData(track);  // 트랙 데이터를 상태에 저장
        } else {
          setErrorMessage("앨범을 찾을 수 없습니다.");
        }
      })
      .catch(error => {
        console.error("API 요청 중 오류 발생:", error);
        setErrorMessage("API 요청 중 오류가 발생했습니다.");
      });
  }, []);

  return (
    <Window id="PlayList" tabText="Play List" 닫기={창닫기}>
      <div className="Container">
        <header></header>
        <main>
          {errorMessage ? (
            <div className="Error">{errorMessage}</div>
          ) : (
            trackData && <Track track={trackData} />
          )}
          {errorMessage ? (
            <div className="Error">{errorMessage}</div>
          ) : (
            trackData && <Track track={trackData} />
          )}
          {errorMessage ? (
            <div className="Error">{errorMessage}</div>
          ) : (
            trackData && <Track track={trackData} />
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
        <img src={track.artworkUrl100.replace('100x100bb', '512x512bb')} alt="앨범 이미지" className="AlbumImage" />
      </div>
      <div className="info_Track">
        <h2>{track.collectionName}</h2>
        <h3>{track.trackName}</h3>
        <h4>{track.artistName}</h4>
      </div>
    </div>
  );
}
