import './Searchbar.scss'
<<<<<<< HEAD


export function Searchbar() {
  return (
    <div id="Searchbar">
      <button className="Left"/>
      <button className="Right"/>
      <div className="URLbar" ></div>
=======
import { useNavigate } from 'react-router-dom';

export function Searchbar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  const handleForward = () => {
    navigate(1); // 앞으로 가기
  };

  return (
    <div id="Searchbar">
      <button className="Left" onClick={handleBack} />
      <button className="Right" onClick={handleForward} />
      <div className="URLbar"></div>
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
    </div>
  );
};