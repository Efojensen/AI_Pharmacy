import DrugOverview from "@components/drugOverview/DrugOverview";
import StatTileRow from "@components/statusTile/StatTileRow";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <StatTileRow/>
        <div className='flex'>
          <div className='flex w-[62.4375rem]'>
          </div>
          <DrugOverview/>
        </div>
      </main>
    </>
  );
}
