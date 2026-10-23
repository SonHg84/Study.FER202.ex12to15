import SearchBox from '../../../components/SearchBox';
import ClickTracker from '../../../components/ClickTracker';
import CountTime from '../../../components/DemoUseRef';
export default function RefPractice() {
  return (
    <>
      <p className="small text-muted">
        Demo useRef có sẵn: giữ tham chiếu DOM, số click và timer ID. Xem số click trong
        Console.
      </p>
      <SearchBox />
      <div className="mt-3">
        <ClickTracker />
      </div>
      <div className="mt-3">
        <CountTime />
      </div>
    </>
  );
}
