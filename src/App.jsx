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
    <div className="flex bg-[#010101] h-screen w-screen box-border p-2.5 gap-2.5">
      <div className="flex-1/5 gap-2.5 ">
        <Search />
      </div>

      <div className="flex flex-4/5 flex-col gap-2.5">
        <div className="flex flex-2/10 gap-2.5">
          <div className="flex-2/3 ">
            <ComputerStats />
          </div>
          <div className="flex-1/3">
            <Clock />
          </div>
        </div>

        <div className="flex flex-8/10 gap-2.5">
          <div className="flex-1/3 flex flex-col gap-2.5">
            <div className="flex-1">
              <TodoList />
            </div>
            <div className="flex-1">
              <AniGif />
            </div>
          </div>

          <div className="flex-2/3 flex flex-col gap-2.5">
            <div className="flex-2/3">
              <GoogleCalender />
            </div>

            <div className="flex flex-1/3 gap-2.5">
              <div className="flex-1">
                <MainWeather />
              </div>
              <div className="flex-1">
                <MusicPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
