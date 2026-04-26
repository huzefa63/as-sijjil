import SelectJuzButton from "../_components/report_page/SelectJuzButton";
import JuzStatsCard from "../_components/report_page/JuzStatsCard";
import JuzEntryTable from "../_components/report_page/JuzEntryTable";
import JuzAvgMarksLineChart from "../_components/report_page/charts/JuzAvgMarksLineChart";
import JuzPassAndFailCompareBarChart from "../_components/report_page/charts/JuzPassAndFailCompareBarChart";
import { cookies } from "next/headers";
import StatsAndTableWrapper from "../_components/report_page/StatsAndTableWrapper";
import { Suspense } from "react";

async function Page() {
  // const cookieStore = await cookies();
  // cookieStore.get('jwt').value;
  // await fetch('url here',{
  //   method:'POST',
  //   headers:{
  //     Cookie:`jwt=${jwt}`
  //   }
  // })
  return (
    <div className="h-full py-3 px-3">
      <Suspense>
        <SelectJuzButton />

        <StatsAndTableWrapper />

        <JuzAvgMarksLineChart />

        <JuzPassAndFailCompareBarChart />
      </Suspense>
    </div>
  );
}

export default Page;