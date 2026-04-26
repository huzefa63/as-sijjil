'use client';
import { useState } from "react";
import JuzEntryTable from "./JuzEntryTable";
import JuzStatsCard from "./JuzStatsCard";

function StatsAndTableWrapper() {
    const [stats,setStats] = useState({avgMarks:null,timesRecited:null,timesPassed:null,timesFailed:null});
    return (
      <div>
        <JuzStatsCard stats={stats}/>

        <JuzEntryTable setStats={setStats}/>
      </div>
    );
}

export default StatsAndTableWrapper
