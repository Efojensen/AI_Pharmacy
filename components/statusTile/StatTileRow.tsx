import StatTile from "./StatTile"
import { dummyStatTileProps } from "./StatTile.mock"

const StatTileRow = () => {
    return (
        <div className='statTileRow'>
            {
                dummyStatTileProps.map((statItem, index) => (
                    <StatTile
                        key={index}
                        stat={statItem.stat}
                        imageUrl={statItem.imageUrl}
                        description={statItem.description}
                    />
                ))
            }
        </div>
    )
}

export default StatTileRow