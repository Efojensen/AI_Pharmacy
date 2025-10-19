import StatTileRow from "@components/statusTile/StatTileRow";
import DrugOverview from "@components/drugOverview/DrugOverview";
import PharmacistOverview from "@components/pharmacistOverview/PharmacistOverview";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <StatTileRow/>
        <div className='flex'>
          <div className='flex w-[62.4375rem]'>
          </div>
          <div className='flex flex-col'>
            <DrugOverview/>
            <PharmacistOverview contributions={230}/>
          </div>
        </div>
      </main>
    </>
  );
}
