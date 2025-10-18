import StatTileRow from "@components/statusTile/StatTileRow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <StatTileRow/>
      </main>
    </>
  );
}
