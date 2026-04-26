import JadeedOverviewCard from "../_components/dashboard/JadeedOverviewCard";
import MurajaahOverviewCard from "../_components/dashboard/MurajaahOverviewCard";
import JuzhaaliOverviewCard from "../_components/dashboard/JuzhaaliOverviewCard";
import TasmeeOverviewCard from "../_components/dashboard/TasmeeOverviewCard";
import MurajaahOverviewBarChart from "../_components/dashboard/charts/MurajaahOverviewBarChart";
import JadeedOverviewLineChart from "../_components/dashboard/charts/JadeedOverviewLineChart";
import { Suspense } from "react";

function Page() {
    
  return (
    <div className="text-background py-5 px-3">
      {/* jadeed */}
      <Suspense>
        <JadeedOverviewCard />

        {/*  murajaat */}
        <MurajaahOverviewCard />

        {/* juzhaali */}

        <JuzhaaliOverviewCard />

        {/* tasmee */}

        <TasmeeOverviewCard />

        {/* murajaah overview chart */}

        <MurajaahOverviewBarChart />

        {/* jadeed average chart */}

        <JadeedOverviewLineChart />
      </Suspense>
    </div>
  );
}

export default Page;
