import "./Mureka_Search.scss"
import { useState } from "react";
import axios from "axios"


export function MurekaSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("mixTerm");
  const [searchList, setSearchList] = useState([]);

  const fetchSearchList = async (term, type) => {
    try {
      const params = {
        term: term,
        entity: 'song',
        country: 'KR',
        limit: 200,
      };

      if (type !== "mixTerm") {
        params.attribute = type;
      }

      const res = await axios.get(
        `https://itunes.apple.com/search`, { params }
      );

      console.log("받은 데이터임", res);

      // 곡명 검색 시 trackName과 searchKeyword가 완전히 일치하는 것만 필터링
      const searchSong = type === "songTerm"
        ? res.data.results.filter(track => track.trackName.toLowerCase() === term.toLowerCase())
        : res.data.results;

      const sortedSearchList = searchSong.sort((a, b) => {
        return a.artistName.localeCompare(b.artistName);
      });

      setSearchList(sortedSearchList);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      alert("API 요청 중 오류가 발생했습니다.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    if (searchKeyword) {
      fetchSearchList(searchKeyword, searchType);
    } else {
      setSearchList([]); // 검색어가 비어있을 경우 트랙 목록 초기화
    }
  };

  return (
    <form 
      id="MurekaSearch"
      onSubmit={handleSearch}
    >
      <input
        type="submit"
        value=""
      />
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <select
        value={searchType}
        onChange={(e) => { setSearchType(e.target.value) }}
      >
        <option value="mixTerm">전체</option>
        <option value="songTerm">곡명</option>
        <option value="albumTerm">앨범명</option>
        <option value="artistTerm">아티스트</option>
      </select>
      {isFocused && (
        <div className="result-container">
          {searchList.length > 0 ? (
            searchList
              .filter((track, index, self) => {
                if (searchType === "albumTerm" || searchType === "artistTerm") {
                  // collectionId가 동일한 경우 중복 제거
                  return index === self.findIndex(t => t.collectionId === track.collectionId);
                }
                return true; // 다른 경우 필터링하지 않음
              })
              .map((track) => (
                <MurekaSearchList
                  key={track.trackId}
                  track={track}
                  searchType={searchType}
                />
              ))
          ) : (
            <MurekaSearchList isEmpty={true} />
          )}
        </div>
      )}
    </form>
  )
}

export function MurekaSearchList({ track, searchType, isEmpty }) {
  return (
    <div className="SearchList">
      {isEmpty ? (
        <div className="album-info">
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="album">
            <img
              src={track.artworkUrl100.replace("100x100bb", "50x50bb")}
              alt="앨범 이미지"
            />
          </div>
          <div className="album-info">
            {(searchType === "songTerm" || searchType === "mixTerm") && (
              <>
                <h4>{track.artistName} - {track.trackName}</h4>
                <h5>{track.collectionName}</h5>
              </>
            )}
            {searchType === "artistTerm" && (
              <>
                <h4>{track.artistName}</h4>
                <h5>{track.collectionName}</h5>
              </>
            )}
            {searchType === "albumTerm" && (
              <>
                <h4>{track.artistName}</h4>
                <h5>{track.collectionName}</h5>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
