import "./PlayList.scss";
import { Window } from '../../Interface/Window'
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

export function PlayList({ 창닫기 }) {
  
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("songTerm");
  const [errorMessage, setErrorMessage] = useState("");
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const fetchTracks = async (term, type) => {
    try {
      const params = {
        term: term,
        entity: 'song',
        country: 'KR',
      };

      if (type !== "mixTerm") {
        params.attribute = type;
      }

      const res = await axios.get(
        `https://itunes.apple.com/search`, { params }
      );

      console.log("받은 데이터임", res)

      const searchSong = res.data.results.filter(track => 
        (type === "songTerm" ? track.trackName.toLowerCase() === term.toLowerCase() : true)
      );

      const sortedTracks = searchSong.sort((a, b) => a.artistName.localeCompare(b.artistName));

      setTracks(sortedTracks);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      setErrorMessage("API 요청 중 오류가 발생했습니다.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    if (searchKeyword) {
      fetchTracks(searchKeyword, searchType);
    } else {
      setTracks([]); // 검색어가 비어있을 경우 트랙 목록 초기화
    }
  };

  const handleTrackPlay = (trackId) => {
    setCurrentTrack(prevTrack => prevTrack === trackId ? null : trackId);
  };

  return (
    <Window id="PlayList" tabText="Play List" 닫기={창닫기}>
      <div className="Container">
        <header>
          <form onSubmit={handleSearch}>
            <input type="submit" value="" />
            <input type="text" 
              value={searchKeyword} 
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <select 
              value={searchType} 
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="mixTerm">전체</option>
              <option value="songTerm">곡명</option>
              <option value="albumTerm">앨범명</option>
              <option value="artistTerm">아티스트</option>
            </select>
          </form>
        </header>
        <main>
          {errorMessage ? (
            <div className="Error">{errorMessage}</div>
          ) : tracks.length === 0 ? (
            <div className="NoResult">검색 결과가 없습니다.</div>
          ) : (
            tracks
              .filter((track, index, self) => {
                if (searchType === "albumTerm" || searchType === "artistTerm") {
                  // collectionId가 동일한 경우 중복 제거
                  return index === self.findIndex(t => t.collectionId === track.collectionId);
                }
                return true; // 다른 경우 필터링하지 않음
              })
              .map((track) => (
                <Track 
                  key={track.trackId} 
                  track={track} 
                  onPlay={() => handleTrackPlay(track.trackId)}
                  isPlaying={currentTrack === track.trackId}
                  searchType={searchType}
                />
              ))
          )}
        </main>
      </div>
    </Window>
  );
}

function Track({ track, onPlay, isPlaying, searchType }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <div className="Track">
      <div onClick={onPlay}>
        <img
          src={track.artworkUrl100.replace("100x100bb", "512x512bb")}
          alt="앨범 이미지"
          className={isPlaying ? 'isPlaying' : ''}
        />
        <audio ref={audioRef} src={track.previewUrl} />
      </div>
      <div className="info_Track">
        {(searchType === "songTerm" || searchType === "mixTerm") && (
          <>
            <h3>{track.artistName} - {track.trackName}</h3>
            <h4>{track.collectionName}</h4>
          </>
        )}
        {searchType === "artistTerm" && (
          <>
            <h3>{track.artistName}</h3>
            <h4>{track.collectionName}</h4>
          </>
        )}
        {searchType === "albumTerm" && (
          <>
            <h3>{track.artistName}</h3>
            <h4>{track.collectionName}</h4>
          </>
        )}
      </div>
    </div>
  );
}
