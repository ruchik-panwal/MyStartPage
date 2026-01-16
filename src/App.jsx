import AniGif from "./apps/aniGif/AniGif";
import Clock from "./apps/clock/Clock";
import ComputerStats from "./apps/computerStats/ComputerStats";
import GoogleCalender from "./apps/googleCalender/GoogleCalender";
import MusicPlayer from "./apps/musicPlayer/MusicPlayer";
import Search from "./apps/search/Search";
import TodoList from "./apps/todoList/TodoList";
import MainWeather from "./apps/weather/MainWeather";

function App() {
  return (
    <>
      <AniGif />
      <Clock />
      <ComputerStats />
      <GoogleCalender />
      <MusicPlayer />
      <Search />
      <TodoList />
      <MainWeather />
    </>
  );
}

export default App;
