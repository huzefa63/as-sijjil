function JuzStatsCard({stats}) {
  const {avgMarks,timesRecited,timesPassed,timesFailed} = stats;
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Avg marks</p>
          <h1 className="font-bold text-3xl text-amber-900">{avgMarks && Math.ceil(avgMarks)}</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times recited</p>
          <h1 className="font-bold text-3xl text-amber-900">{timesRecited}</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times passed</p>
          <h1 className="font-bold text-3xl text-amber-900">{timesPassed}</h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 bg-(--layer) w-full px-5 py-2 rounded-md shadow-sm border border-(--highlightBorder)">
          <p>Times failed</p>
          <h1 className="font-bold text-3xl text-amber-900">{timesFailed}</h1>
        </div>
      </div>
    );
}

export default JuzStatsCard
